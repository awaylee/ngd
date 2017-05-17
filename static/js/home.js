//TOPO图画布
var graph;
var websocket;

$(document).ready(function () {
    //添加新的CSS规则
    Q.addCSSRule(".maximize", "margin: 0px !important;position: fixed !important;top: 0px;bottom: 0px;right: 0px;left: 0px;z-index: 1030;height: auto !important; width: auto !important;");
    //实例化图形组件类
    graph = new Q.Graph("canvas");

    //设置样式列表
    var styles = {};
    //设置选中颜色样式
    styles[Q.Styles.SELECTION_COLOR] = "#0F0";
    // graph.styles = styles;
    styles[Q.Styles.EDGE_COLOR]= "#2898E0";
    // styles[Q.Styles.EDGE_WIDTH]= 2;
    graph.styles = styles;

    //初始坐标原点位于屏幕中心，默认为true，如果希望延续传统的左上角为坐标原点，可设置该属性为false
    graph.originAtCenter = false;
    //设置图形组件是否能编辑
    graph.editable = true;

    /**
     * 图元被点击时，调用此函数，在此函数中进行判断
     * @param evt
     */
    graph.ondblclick = function(evt){
        var element = evt.getData();
        var target = graph.hitTest(evt);
        if(target instanceof Q.LabelUI){
            Q.log(target.data);
            return;
        } else if (element instanceof Q.Node) {
            showNodeInfo(element);
            return;
        } else if (element instanceof Q.Edge) {
            showEdgeInfo(element);
            return;
        }
    };

    graph.onclick = function (e) {
        var element = e.getUI();
        // if (element != undefined){
        //      destroy();
        // }
    };

    /**
     * 图元通过界面交互被创建时，会回调此函数
     * @param {Q.Element} element 图元对象
     * @param {MouseEvent} evt 交互鼠标或者触控事件
     */
    graph.onElementCreated = function (element, evt) {
        console.log("onElementCreated");
        showNodeAddPanel(element, evt);
        //如果创建的图元对象为连线时
        if (element instanceof Q.Edge) {
            //设置粗度
            element.setStyle(Q.Styles.EDGE_WIDTH, 2);
            element.setStyle(Q.Styles.ARROW_TO, false);//去除连线箭头
            element.editable = false;//连线不可移动
            //判断当前连线的类型，并且不是默认的连线类型
            if (element.edgeType && element.edgeType != Q.Consts.EDGE_TYPE_DEFAULT) {
                //那么就不设置连线捆绑交互
                element.setStyle(Q.Styles.EDGE_BUNDLE, false);
            }
        }
        //如果当前图元对象为文本图元
        if (element instanceof Q.Text) {
            //设置文本标签背景颜色
            element.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
            //设置文本标签文字颜色
            element.setStyle(Q.Styles.LABEL_COLOR, "#FFF");
            //设置文本标签内间距
            element.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(3, 5));//insets 上 左 下 右
        }
    };

    /**
     * 文本编辑提交时调用此函数，用于设置文本信息
     * @param {Q.Element} element 图元对象
     * @param {Q.LabelUI} label 文本标签组件
     * @param {string} text 文本信息字符串
     * @param {Q.ElementUI} elementUI 图元组件，对应的数据对象为Q.Element
     */
    graph.onLabelEdit = function (element, label, text, elementUI) {
        //如果文件信息为空，则直接消取提交
        if (!text) {
            return false;
        }
        //设置图元对象的名称为文本值
        element.name = text;
        var editData = {
            id : element.tid,
            name : element.name
        };

        //TODO
        //在此处进行后台数据保存
        $.ajax({
            url : '/api/topo/node/modify',
            type : 'POST',
            async : true,
            data : editData,
            timeout:5000,
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        })
    };

    graph.removeSelectionByInteraction = function (evt) {
        showDeleteConfirm(this, evt);
    };

    //添加右键菜单
    appendInteractionMenu(graph);

    //初始化工具栏
    initToolbar();
    //初始化元素节点工具栏
    initToolbox();
    //初始化页面拓扑数据
    initData();

    //设置页面工具栏和元素栏选中变色
    setBtnAndNodeSelectColor();
    //设置默认为框选模式
    $("#toolbar").find(">.btn-group:eq(0)>button:eq(0)").click();

    createWSConn();
});

/**
 * 设置选中元素切换背景色
 */
function setBtnAndNodeSelectColor() {
    var elements = $("#toolbar button");
    elements.click(function(){
        elements.css("backgroundColor","inherit");
        $(this).css("backgroundColor","#E7E7E7");
    });
}

/**
 * 加载TOPOLOGY初始化数据
 */
function initData() {
    Q.loadJSON("/api/topo/all", function (json) {
        if(json.Return_code == 0) {
            var topoNodes = json.Nodes;
            var topoLines = json.Lines;
            var topoLinePorts = json.Line_Ports;
            initTopology(topoNodes, topoLines, topoLinePorts);
        } else {
            alert("加载TOPO图失败：",json.Reason);
        }

        //延迟调用，在画布下次绘制时调用
        graph.callLater(function(){
            //树形布局
            var layouter = new Q.TreeLayouter(graph);
            //开始布局
            layouter.layoutType = Q.Consts.LAYOUT_TYPE_EVEN_HORIZONTAL;
            layouter.doLayout();
            //移动到中心，设置会在下次绘制时生效
            graph.moveToCenter();

        });
    });
}


/**
 * 初始化拓扑图
 * @param nodes 拓扑节点
 * @param lines 节点关系
 * @param linePorts 连线端口信息
 */
function initTopology(nodes, lines, linePorts) {
    //TOPO关系映射
    var nodeMapping = {};
    var linePortMapping = {};


    //遍历topo节点
    $.each(nodes, function (index, data) {
        var node = data;
        //Q.Node：节点图元，可以设置图片，图形，挂载其他UI组件，对应的UI类为NodeUI
        var qNode = new Q.Node();
        var parent = node.Parent;
        //设置图元名称
        qNode.tid = node.Id;
        qNode.name = node.Name;
        qNode.ip_v4 = node.Ip_v4;
        qNode.type = node.Type;
        switch (node.Type) {
         case 0:
             qNode.image = Q.Graphs.node;
             break;
         case 1:
             qNode.image = Q.Graphs.server;
             break;
         case 2:
             qNode.image = Q.Graphs.exchanger2;
             break;
         }
        //设置节点位置
        qNode.location = new Q.Point(node.x, node.y);//Q.Point:坐标点对象 x坐标,y坐标,rotate旋转角度
        //调用图元管理容器(graphModel存放和管理图形元素)添加元素
        graph.graphModel.add(qNode);
        nodeMapping[node.Id] = qNode;

        if (parent) {
            parent = nodeMapping[parent];
            if (parent) {
                nodeMapping[node.Id].parent = parent;
            }
        }
    });

    $.each(linePorts, function(index, data){
        linePortMapping[data.Line_id] = data;
    });

    //遍历topo关系
    $.each(lines, function (index, data) {
        var line = data;
        var nodeFrom = nodeMapping[line.Left];
        var nodeTo = nodeMapping[line.Right];
        if (nodeFrom && nodeTo) {
            var edge = graph.createEdge(nodeFrom, nodeTo);
            edge.setStyle(Q.Styles.ARROW_TO, false);//去除箭头指向
            edge.editable = false;
            edge.info = line;
            edge.tid = data.Id;
            edge.line_port = linePortMapping[data.Id];
        }
    });
}

/**
 * 通过节点获得节点信息，返回节点列表UL对象
 * @param node
 * @returns {*|jQuery}
 */
function getUlByNode(node) {
    var name = $("<li>").text("节点名称：" + node.name);
    var ip = $("<li>").text("IP地址："+ node.ip_v4);
    var type = $("<li>").text("节点类型："+ convertNumToType(node.type));
    //var edgeCount = $("<li>").text("子节点数："+ node.childrenCount + "个");
    var ul = $("<ul>").addClass("box-advance list3");
    //ul.append(name).append(ip).append(type).append(edgeCount);
    ul.append(name).append(ip).append(type);
    return ul;
}


/**
 * 显示节点详细信息
 * @param node
 */
function showNodeInfo(node) {
    var infoDialog = $('#q-details-info');
    var title = $("<span>").text("节点基本信息");
    var close = $("<button>").text("关闭");
    var br = $("<br/>");
    close.click(closeDetail);
    infoDialog.find('.modal-title').empty().append(title);
    var data = {
        list:[{name:"节点名称",value:node.name},
            {name:"IP地址",value:node.ip_v4},
            {name:"节点类型",value:convertNumToType(node.type)}
        ]
    };
    // console.log(data);
    //var ul = getUlByNode(node);
    var ul = template("nodeInfo",data);
    infoDialog.find('.modal-body>.content').empty().append(ul);
    if (node.childrenCount > 0) {
        var tab = $("<div>").addClass("tab");
        var nav = $("<ul>").addClass("nav");
        var content = $("<ul>").addClass("content");
        var tabTitle = $("<div>").addClass("node_title").text("相关节点信息");
        var liTitle, liContent;
        $.each(node.children.datas, function(index, child){
            liTitle = $("<li>").text(child.name);
            liContent = $("<li>").append(getUlByNode(child));
            if (index == 0) {
                liTitle.addClass("active");
                liContent.addClass("active");
            }
            nav.append(liTitle);
            content.append(liContent);
        });

        $(".modal-body>.content").append(tabTitle);
        tab.append(nav);
        tab.append(content);
        infoDialog.find('.modal-body>.content').append(tab);
    }
    initTab();

    infoDialog.find('.modal-footer').empty().append(close);

    infoDialog.modal("show");
}

/**
 * 显示添加节点面板
 */
function showNodeAddPanel(element, evt) {
    if (!(element instanceof Q.Node || element instanceof Q.Edge)) {
        return;
    }
    var infoDialog = $('#q-details-info');
    var title = $("<span>");
    var submit = $("<button>").text("确认");
    var close = $("<button>").text("关闭");
    close.click(function () {
        graph.graphModel.removeById(element.id);
        closeDetail();
    });
    var titleObj = infoDialog.find('.modal-title').empty();
    var contentObj = infoDialog.find('.modal-body>.content').empty();

    infoDialog.find('.modal-footer').empty().append(submit).append(close);

    if (element instanceof Q.Node) {
        title.text("添加节点");
        titleObj.append(title);
        var nodeType = evt.dataTransfer.getData("nodetype");
        var ul = getNodeInfoInputUl(nodeType);
        contentObj.append(ul);
        submit.click(function(){
            var param = {
                name : $("#nodeName").val(),
                ip_v4 : $("#nodeIp").val(),
                type : nodeType
            };
            $.ajax({
                url: '/api/topo/node/add',
                type: 'POST',
                async: true,
                data: param,
                timeout: 5000,
                dataType: 'json',
                success: function (data) {
                    clearErrorMsg();
                    if (data.Return_code == 0) {
                        element.name = data.Node.Name;
                        element.title = data.Node.Name;
                        element.tid = data.Node.Id;
                        element.type = data.Node.Type;
                        element.ip_v4 = data.Node.Ip_v4;
                        closeDetail();
                    } else {
                        showErrorMsg(data.Reason);
                    }
                }
            });
        });
    } else if (element instanceof Q.Edge) {
        title.text("添加连线");
        titleObj.append(title);
        var left = element.from;
        var right = element.to;
        var data = {
            list:["源端口","目标端口","通信协议"]
        };
        var ul = template("addEdgeUI",data);
        var ulhtml = $(ul);
        ulhtml.find(".removeBtn").hide();
        contentObj.append(ulhtml);
        //新增连线端口
        contentObj.on("click",".addBtn",function () {
            contentObj.append(ul);
        });
        //移除连线端口
        contentObj.on("click",".removeBtn",function () {
            $(this).parents(".edgeBox").remove();
        });

        submit.click(function(){
            console.log($(".edgeBox").length);
            var params = [];
            $(".edgeBox").each(function (index) {
                var param = {
                    Left : left.tid,
                    Right : right.tid,
                    Left_port : parseInt($(this).find("li:nth-of-type(1) input").val()),
                    Right_port : parseInt($(this).find("li:nth-of-type(2) input").val()),
                    Protocol: $(this).find("li:nth-of-type(3) input").val()
                };
                params.push(param);
                return params;
            });

            params = JSON.stringify(params);
            var data = {AddEdgeInput:params};
            console.log(data);
            $.ajax({
                url: '/api/topo/edge/add',
                type: 'POST',
                async: true,
                data: data,
                timeout: 5000,
                dataType: 'json',
                success: function (data) {
                    clearErrorMsg();
                    if (data.Return_code == 0) {
                        element.name = "";
                        element.tid = data.Line.Id;
                        //element.to.parent = element.from;
                        //element.line_port = data.Line_Port;
                        closeDetail();
                    } else {
                        showErrorMsg(data.Reason);
                    }
                },
                error: function (xhr, textStatus) {
                    console.log('错误')
                }
            });
        });
    }
    infoDialog.modal("show");
}


/**
 * 获取添加节点列表
 * @returns {*|jQuery}
 */
function getNodeInfoInputUl(nodeType) {
    var nameLabel = $("<li>").text("名称：");
    var ip_v4Label = $("<li>").text("IP地址：");
    var nameInput = $("<input>").attr("type","text").attr("id", "nodeName");
    var ipInput = $("<input>").attr("type","text").attr("id", "nodeIp");
    var typeInput = $("<input>").attr("id", "nodeType").attr("type", "hidden").val(nodeType);

    var ul = $("<ul>").addClass("box-advance list2");
    ul.append(nameLabel.append(nameInput)).append(typeInput).append(ip_v4Label.append(ipInput));

    return ul;
}


/**
 * 删除节点
 */
function showDeleteConfirm(hook, evt) {
    var selection = hook.selectionModel.datas;
    if (!selection || selection.length == 0) {
        return false;
    }

    var deleteIds = {};
    var nodeIds = [];
    var edgeIds = [];
    var infoDialog = $('#q-details-info');
    var content = infoDialog.find('.modal-body>.content');
    var li;
    $.each(hook.selectionModel.datas, function(index, element) {
        //TODO 改为 element.name 此时连线可能没有名字导致显示不了
        if (element instanceof Q.Node) {
            nodeIds.push(element.tid);
            if(element.name != undefined){
                var data = {
                    list:[{name:"节点名称",value:element.name},
                        {name:"IP地址：",value:element.ip_v4},
                        {name:"节点类型",value:convertNumToType(element.type)}
                    ]
                };
                li = template("nodeInfo",data);
            }
        } else if (element instanceof Q.Edge) {
            edgeIds.push(element.tid);
            if(element.name == undefined) {
                //li = "<li><span>连线ID：</span><span>"+element.id+"</span></li><li><span>连线左边节点ID：</span><sapn>"+element.info.Left+"</sapn></li><li><span>连线右边节点ID：</span><sapn>"+element.info.Right+"</sapn></li>";
                var data = {
                    list: [{name: "连线ID：", value: element.id},
                        {name: "连线左边节点ID：", value: element.info.Left},
                        {name: "连线右边节点ID：", value: element.info.Right}
                    ]
                };
                li = template("nodeInfo", data);
            }
        }
        content.append(li);

    });
    deleteIds.nodeIds = nodeIds;
    deleteIds.edgeIds = edgeIds;
    var yes = $("<button>").text("确认");
    var no = $("<button>").text("取消");
    infoDialog.find('.modal-title').empty().append("您确定要删了以下内容吗？");
    infoDialog.find('.modal-footer').empty().append(yes).append(no);
    infoDialog.modal("show");

    yes.click(function () {
        $.ajax({
            url : '/api/topo/delete',
            type : 'POST',
            async : true,
            data : JSON.stringify(deleteIds),
            timeout:5000,
            dataType:'json',
            success:function(data){
                console.log(data);
                var selection = hook.removeSelection();
                if (selection) {
                    var event = new Q.InteractionEvent(hook, Q.InteractionEvent.ELEMENT_REMOVED, evt, selection);
                    hook.onInteractionEvent(event);
                }
                closeDetail();
            }
        });
    });

    no.click(function(){
        closeDetail();
        return false;
    });
}

function showErrorMsg(content) {
    $('#q-details-info').find('.modal-body>.errorMsg').empty().append(content);
}

function clearErrorMsg(){
    $('#q-details-info').find('.modal-body>.errorMsg').empty()
}

/**
 * 显示连线详细信息
 * @param edge
 */
function showEdgeInfo(edge) {
    var title = $("<span>").text("连线基本信息");

    var data = {
        list:[{name:"节点1名称：",value:edge.from.name},
            {name:"节点类型",value:convertNumToType(edge.from.type)},
            {name:"节点2名称：",value:edge.to.name},
            {name:"节点类型",value:convertNumToType(edge.to.type)}
        ]
    };
    var nodeInfo = template("lineInfo",data);
    var nodehtml = $(nodeInfo);
    var close = $("<button>").text("关闭");
    close.click(closeDetail);

    var infoDialog = $('#q-details-info');
    infoDialog.find('.modal-title').empty().append(title);
    infoDialog.find('.modal-body>.content').empty().append(nodehtml);
    infoDialog.find('.modal-footer').empty().append(close);

    //tab切换
    $('ul.nav-tabs>li').click(function (e) {
        var index = $(this).index();
        e.preventDefault();
        $('.tab-content .tab-pane').eq(index).addClass('active').siblings().removeClass('active');

    });

    initTable(edge);
    initEchart(edge);

    /**
     * 添加已有连线端口
     * */
    $(".toolbar").on("click","button.add",function () {
        var add = $("#addTr").html();
        var addhtml = $(add);
        if($(".addTr").length == 0){
            $(".tables tbody").append(addhtml);
            //确定
            $(".addTr .sure").on("click",function () {
                var left_port = $(".left_port").val();
                var right_port = $(".right_port").val();
                var protocol = $(".protocol").val();
                var data = {
                    edge:edge.tid,
                    left_port:left_port,
                    right_port:right_port,
                    protocol:protocol
                };

                $(".addTr input[type='text']").each(function (i) {
                    if(i < 2 && check_port($(this).val()) == true){
                        $(this).parent().removeClass("has-error");
                        return;
                    } if (i == 2 && check_protocol($(this).val()) == true ){
                        $(this).parent().removeClass("has-error");
                        return;
                    } else {
                        $(this).parent().addClass("has-error");
                        return;
                    }
                });

                if(check_port(left_port) ==true && check_port(right_port) ==true && check_protocol(protocol) == true){
                    $.ajax({
                        url:"/api/topo/edge/multiple/add",
                        type:"POST",
                        async:"true",
                        data:data,
                        timeout:5000,
                        dataType:"json",
                        success:function (data) {
                            if(data.Return_code == 0){
                                var row = {
                                    Left_port:left_port,
                                    Right_port:right_port,
                                    Protocol:protocol,
                                    edge:data.Line_Port.Id
                                };
                                $(this).parents("tr").remove();
                                $(".tables").bootstrapTable('append', row);
                                $(".tables").bootstrapTable('refresh', row); //更新数据
                            } else {
                                showErrorMsg(data.Reason);
                            }
                        },
                        error:function (xhr,textStatus) {
                            console.log("添加出错");
                        }
                    })
                }
            });
            //取消
            $(".addTr .cancel").on("click",function () {
                $(this).parents("tr").remove();
            })
        }
    });

    /**
    * 删除端口信息
    * */
    $(".toolbar").on("click",".delete",function () {
       var ids = $.map($(".tables").bootstrapTable('getSelections'), function (row) {
           return row.Id;
       });
        deletePort(ids);
       //删除一行或多行
       // $(".tables").bootstrapTable('remove', {field: 'Id', values: ids});

   });
   //删除当前行
   $(".tab-content").on("click",".remove",function () {
       var id = $(this).parents("tr").attr("data-uniqueid");
       id = parseInt(id);
       var ids = [];
       ids.push(id);
       deletePort(ids);
   });

    /**
     *编辑修改连线端口信息
     * */
    $(".tab-content").on("click",".edit",function () {
        var parents = $(this).parents("tr[data-index]");
        var add = $("#addTr").html();
        var addhtml = $(add);
        var groups = addhtml.find(".btn-group").addClass("editBtn");
        parents.find("input[disabled]").attr("disabled",false);
        parents.find("td:nth-of-type(5)").html(groups);
        addhtml.find('[data-toggle="tooltip"]').tooltip();
    });
    //确定
    $(".tab-content").on("click",".editBtn .sure",function () {
        var tr = $(this).parents("tr[data-index]");
        var index = tr.attr("data-index");
        var line_port = tr.attr("data-uniqueid");
        var left_port = tr.find("td:nth-of-type(2)").children("input").val();
        var right_port = tr.find("td:nth-of-type(3)").children("input").val();
        var protocol = tr.find("td:nth-of-type(4)").children("input").val();
        var data = {
            line_port:line_port,
            left_port:left_port,
            right_port:right_port,
            protocol:protocol
        };
        $.ajax({
            url:"/api/topo/edge/modify",
            type:"POST",
            async:"true",
            data:data,
            timeout:5000,
            dataType:"json",
            success:function (data) {
                //console.log(data);
                if(data.Return_code == 0){
                    var row = {
                        Left_port:left_port,
                        Right_port:right_port,
                        Protocol:protocol,
                        edge:line_port
                    };
                    $(".tables").bootstrapTable('updateRow', {index: index, row: row});

                } else {
                    showErrorMsg(data.Reason);
                }
            },
            error:function (xhr,textStatus) {
                console.log("添加出错");
            }
        });
    });
    //取消
    $(".tab-content").on("click",".editBtn .cancel",function () {
        var tr = $(this).parents("tr[data-index]");
        var editBtn = $("#editBtn").html();
        tr.find("input").attr("disabled",true);
        tr.find("td:nth-of-type(5)").html(editBtn);
    });

    //查看节点详情
    var _this = edge;
    $(".aClick").click(function (edge) {
        var index = $(this).index();
        if(index == 0){
            showNodeInfo(_this.from);
        } else {
            showNodeInfo(_this.to);
        }
    });

    infoDialog.modal("show");
}

/**
* 初始化连线详情bootstrap-table
* */
function initTable(edge) {
    $(".tables").bootstrapTable({
        toolbar: ".toolbar",
        columns: [
            {
                title: "",
                field: "check",
                align: "center",
                valign: "middle",
                checkbox:true,
                class:"check"
            }, {
                title: "端口1",
                field: "Left_port",
                align: "center",
                valign: "middle",
                formatter:function (val) {
                    return "<input type='text' disabled value="+val+">";
                }
            }, {
                title: "端口2",
                field: "Right_port",
                align: "center",
                valign: "middle",
                formatter:function (val) {
                    return "<input type='text' disabled value="+val+">";
                }
            },
            {
                title: "通信协议",
                field: "Protocol",
                align: "center",
                valign: "middle",
                formatter:function (val) {
                    return "<input type='text' disabled value="+val+">";
                }
            },
            {
                title: "操作",
                field: "",
                align: "center",
                valign: "middle",
                width: 140,
                formatter: function (value, row, index) {
                    var editBtn = $("#editBtn").html();
                    return editBtn;
                }
            }
        ],
        // data: data,
        uniqueId: "Id",
        striped: true,
        cache: false,
        search: false,
        sortable: true,
        sidePagination: "server",
        showRefresh: false,
        pagination: true,
        smartDisplay: true,
        paginationLoop:false,
        pageList:'[10, 25, 50, 100, All]',
        paginationPreText: "上一页",
        paginationNextText: "下一页",
        pageSize: 5,
        pageNumber:1,
        totalField: "TotalCount",
        dataField: "Line_Ports",
        pageIndex: "pageNo",
        onLoadSuccess: function(data){
            return data;
        },
        queryParams: function (params) {
            params = {
                edge:edge.tid,
                pageNo:params.offset/params.limit + 1,
                pageSize:params.limit
            };
            return params;
        },
        onRefresh:function (params) {
            return params;
        },
        method: 'post',
        contentType: "application/x-www-form-urlencoded",
        url: '/api/topo/edge/info'
    });
}

/**
 * 删除端口函数
 * */
function deletePort(ids) {
    var idsStr = ids.join(",");
    $.ajax({
        url:"/api/topo/edge/port/delete",
        type:"POST",
        async:"true",
        data:{
            line_port:idsStr
        },
        timeout:5000,
        dataType:"json",
        success:function (data) {
            if(data.Return_code == 0){
                $(".tables").bootstrapTable('remove', {field: 'Id', values: ids});
                //$(".tables").bootstrapTable('refresh', row); //更新数据
            } else {
                showErrorMsg(data.Reason);
            }
        },
        error:function (xhr,textStatus) {
            console.log("添加出错");
        }
    })
}


/**
 * 初始化告警图表
 * */
function initEchart(edge) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var labelRight = {
        normal: {
            position: 'right'
        }
    };
    option = {
        title: {
            text: '告警提示'
            // subtext: 'From ExcelHome',
            // sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 80,
            bottom: 30
        },
        xAxis: {
            type : 'value',
            position: 'top',
            splitLine: {lineStyle:{type:'dashed'}}
        },
        yAxis: {
            type : 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
        },
        series : [
            {
                name:'生活费',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}'
                    }
                },
                data:[
                    {value: -0.07, label: labelRight},
                    {value: -0.09, label: labelRight},
                    0.2, 0.44,
                    {value: -0.23, label: labelRight},
                    0.08,
                    {value: -0.17, label: labelRight},
                    0.47,
                    {value: -0.36, label: labelRight},
                    0.18
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/**
 * 检查输入对象的值是否符合端口号格式
 * */
function check_port(obj){
    var re =  /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    var res = re.test(obj);
    return res;
}

/**
 * 检查输入对象的值是否符合通信协议格式
 * */
function check_protocol(obj){
    var re =  /^[A-Za-z]+$/;
    var res = re.test(obj);
    return res;
}

/**
 * 关闭详细展示框
 */
function closeDetail() {
    var dialog = $('#q-details-info');
    dialog.find('.modal-title').empty();
    dialog.find('.modal-body>.content').empty();
    dialog.find('.modal-body>.errorMsg').empty();
    dialog.modal("hide");
}


/**
 * 转换节点类型名称
 * @param num
 * @returns {*}
 */
function convertNumToType(num) {
    switch (num) {
        case 0 :
            return "主机";
            break;
        case 1 :
            return "服务器";
            break;
        case 2 :
            return "交换机";
            break;
    }
}



/**
 * 初始化工具栏
 */
function initToolbar() {
    var toolbar = document.getElementById("toolbar");
    var buttons = {
        interactionModes: [{
            name: '框选模式',
            value: Q.Consts.INTERACTION_MODE_SELECTION, //框选交互模式
            icon: '/static/img/topo/rectangle_selection_icon.png',
            action: setInteractionMode
        }, {
            name: '浏览模式',
            value: Q.Consts.INTERACTION_MODE_VIEW, //交互模式：浏览模式
            icon: '/static/img/topo/pan_icon.png',
            action: setInteractionMode
        }],
        zoom: [{
            name: "放大", icon: "/static/img/topo/zoomin_icon.png", action: function () {
                graph.zoomIn()
            }
        }, {
            name: "缩小", icon: "/static/img/topo/zoomout_icon.png", action: function () {
                graph.zoomOut()
            }
        }, {
            name: "1:1", action: function () {
                graph.scale = 1;
            }
        }, {
            name: '纵览', icon: '/static/img/topo/overview_icon.png', action: function () {
                graph.zoomToOverview()
            }
        }, {
            name: '最大化', icon: '/static/img/topo/fullscreen_icon.png', action: function () {
                if ($("#graph_panel").hasClass("maximize")) {
                    $("#graph_panel").removeClass("maximize")
                } else {
                    $("#graph_panel").addClass("maximize")
                }
                graph.updateViewport();
            }
        }, {
            name: '导出',
            icon: '/static/img/topo/export_icon.png',
            action: function () {
            showExportPanel(toolbar.graph);
        }
    }],
        drawLine: [{
            name: '普通连线',
            value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
            icon: '/static/img/topo/edge_icon.png',
            action: setInteractionMode
        }, {
            name: '正交直线',
            value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
            icon: '/static/img/topo/edge_orthogonal_icon.png',
            action: setInteractionMode,
            edgeType: Q.Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL
        }],
        find: {
            name: '查找',
            type: "input",
            action: function (evt, info) {
                $("#toolbar button,img").css("backgroundColor","inherit");
                var name = info.input.value;
                if (!name) {
                    return;
                }
                graph.forEach(function (e) {
                    if (e instanceof Q.Node && (name == e.name || (e.info && e.info.name == name))) {
                        graph.setSelection(e);
                        ensureVisible(e);
                        return false;
                    }
                }, graph);
            }
        }
    };

    createToolBar(buttons, toolbar, graph, false, false);
}

/**
 * 设置某个节点显眼可见
 * @param node
 */
function ensureVisible(node){
    var bounds = graph.getUIBounds(node);
    var viewportBounds = graph.viewportBounds;
    if(!viewportBounds.contains(bounds)){
        graph.sendToTop(node);
        graph.centerTo(node.x, node.y);
    }
}


/**
 * 设置交互模式
 * @param evt
 * @param info
 */
function setInteractionMode(evt, info) {
    graph.interactionMode = info.value;
    currentInteractionMode = info.value;

    if (info.value == Q.Consts.INTERACTION_MODE_VIEW) {
        $(".btn-group:eq(2)>button").attr({"disabled":"disabled"});
        $("#toolbox>img").css("cursor", "not-allowed").attr({"draggable":"false"});
    } else {
        $(".btn-group:eq(2)>button").removeAttr("disabled");
        $("#toolbox>img").css("cursor", "move").attr({"draggable":"true"});
    }

    //如果创建连线模式
    if (info.value == Q.Consts.INTERACTION_MODE_CREATE_EDGE) {
        graph.edgeUIClass = info.edgeUIClass;
        graph.edgeType = info.edgeType;
    }
}

/**
 * 初始化画图元素栏
 */
function initToolbox() {
    var toolbox = document.getElementById("toolbox");

    createDNDImage(toolbox, "/static/img/topo/node_icon.png", "终端", {
        type: "Node",
        label: "终端",
        image: "Q.Graphs.node",
        nodeType : "0"
    });
    createDNDImage(toolbox, "/static/img/topo/server_icon.png", "服务器", {
        type: "Node",
        label: "服务器",
        image: "Q.Graphs.server",
        nodeType : "1"
    });
    createDNDImage(toolbox, "/static/img/topo/exchanger_icon.png", "交换机", {
        type: "Node",
        label: "交换机",
        image: "Q.Graphs.exchanger2",
        nodeType : "2"
    });
}

/**
 * 初始化DiQuick的Tab页
 */
function initTab() {
    $(".tab").each(function () {
        var obj = $(this);
        obj.children(".nav").children("li").click(function () {
            var num = $(this).index();
            obj.children("ul").children("li.active").removeClass("active");
            obj.children(".nav").children("li:eq("+num+")").addClass("active");
            obj.children(".content").children("li:eq("+num+")").addClass("active");
        });
    });
}



if(!window.getI18NString){getI18NString = function(s){return s;}}
//append alarm balloon support
if(!Q.Element.prototype.initAlarmBalloon){
    Q.Element.prototype.initAlarmBalloon = function(){
        var alarmUI = new Q.LabelUI();
        alarmUI.position = Q.Position.CENTER_TOP;
        alarmUI.anchorPosition = Q.Position.LEFT_BOTTOM;
        alarmUI.border = 1;
        alarmUI.backgroundGradient = Q.Gradient.LINEAR_GRADIENT_VERTICAL;
        alarmUI.padding = new Q.Insets(2, 5);
        alarmUI.showPointer = true;
        alarmUI.offsetY = -10;
        alarmUI.offsetX = -10;
        alarmUI.rotatable = false;
        alarmUI.showOnTop = true;
        this._alarmBalloon = alarmUI;
    };
    Q.Element.prototype._checkAlarmBalloon = function(){
        if(!this.alarmLabel || !this.alarmColor){
            if(this._alarmBalloon){
                this.removeUI(this._alarmBalloon);
            }
            return;
        }
        if(!this._alarmBalloon){
            this.initAlarmBalloon();
        }
        this._alarmBalloon.data = this.alarmLabel;
        this._alarmBalloon.backgroundColor = this.alarmColor;
        if(this.addUI(this._alarmBalloon) === false){
            this.invalidate();
        }
    };
    Object.defineProperties(Q.Element.prototype, {
        alarmLabel: {
            get: function(){
                return this._alarmLabel;
            },
            set: function(label){
                if(this._alarmLabel == label){
                    return;
                }
                this._alarmLabel = label;
                this._checkAlarmBalloon();
            }
        },
        alarmColor: {
            get: function(){
                return this._alarmColor;
            },
            set: function(color){
                if(this._alarmColor == color){
                    return;
                }
                this._alarmColor = color;
                this.setStyle(Q.Styles.RENDER_COLOR, color);
                this._checkAlarmBalloon();
            }
        }
    })
}
var AlarmSeverity = {
    CRITICAL: {color: Q.toColor(0xEEFF0000), sortName: "C"},
    MAJOR: {color: Q.toColor(0xEEFFAA00), sortName: "M"},
    MINOR: {color: Q.toColor(0xEEFFFF00), sortName: "m"},
    WARNING: {color: Q.toColor(0xEE00FFFF), sortName: "W"}
};
var all = [];
for(var name in AlarmSeverity){
    all.push(AlarmSeverity[name]);
}
AlarmSeverity.all = all;

Object.defineProperties(AlarmSeverity, {
    random: {
        get: function(){
            return this.all[Q.randomInt(this.all.length)];
        }
    }
});


var timer = setTimeout(function A(){
    graph.forEach(function(element){
        if(element instanceof Q.Edge){

            if(Q.randomBool()){
                element.alarmLabel = null;
                element.alarmColor = null;
                return;
            }
            var alarmSeverity = AlarmSeverity.random;
            element.alarmLabel = "!";
            //element.alarmLabel = "" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
            element.alarmColor = alarmSeverity.color;
        }
    });
    timer = setTimeout(A, 2000);
}, 1000);

function destroy(){
    clearTimeout(timer);
}

function createWSConn() {
    if (!websocket) {
        var wsUri = "ws://"+window.location.host+"/websocket/join";
        websocket = new WebSocket(wsUri);
        websocket.onopen = function (evt) {
            console.log("CONNECTED...");
            //websocket.send("onopen");
        };
        websocket.onclose = function (evt) {
            console.log("DISCONNECTED...");
        };
        websocket.onmessage = function (evt, data) {
            console.log("onmessage...");
            console.log("onmessage data: " + evt.data);
            //websocket.close();
        };
        websocket.onerror = function (evt) {
            console.log("onerror...");
            console.log("onerror evt: " + evt.data);
        };
    }
}

