/**
 * 设置显示PopupMenu（右键菜单）的位置
 * @param div 要显示的菜单DIV
 * @param x X轴
 * @param y Y轴
 */
function showDivAt(div, x, y){
    var body = document.documentElement;
    //实例化一个矩形 x,y,width,height
    var bounds = new Q.Rect(window.pageXOffset, window.pageYOffset, body.clientWidth - 2, body.clientHeight - 2);
    var width = div.offsetWidth;
    var height = div.offsetHeight;

    if (x + width > bounds.x + bounds.width) {
        x = bounds.x + bounds.width - width;
    }
    if (y + height > bounds.y + bounds.height) {
        y = bounds.y + bounds.height - height;
    }
    if (x < bounds.x) {
        x = bounds.x;
    }
    if (y < bounds.y) {
        y = bounds.y;
    }
    div.style.left = x + 'px';
    div.style.top = y + 'px';
}

/**
 * 判断一个节点是否为另一个节点的子节点
 * @param parent 父节点
 * @param child 子节点
 * @returns {boolean} 如果是返回true
 */
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * 右键菜单类
 * @param items 构造items参数，可进接传入菜单项
 * @constructor
 */
var PopupMenu = function(items){
    this.items = items || [];
};

var menuClassName = 'dropdown-menu';
PopupMenu.Separator = 'divider';

//定义右键菜单
PopupMenu.prototype = {
    dom : null,
    _invalidateFlag: true,
    add : function(item){
        this.items.push(item);
        this._invalidateFlag = true;
    },
    addSeparator : function() {
        this.add(PopupMenu.Separator);
    },
    showAt: function(x, y){
        if(!this.items || !this.items.length){
            return false;
        }
        if(this._invalidateFlag){
            this.render();
        }
        this.dom.style.display = "block";
        document.body.appendChild(this.dom);
        showDivAt(this.dom, x, y);
    },
    hide : function(){
        if(this.dom && this.dom.parentNode){
            this.dom.parentNode.removeChild(this.dom);
        }
    },
    render : function(){
        this._invalidateFlag = false;
        if(!this.dom){
            this.dom = document.createElement('ul');
            this.dom.setAttribute("role", "menu");
            this.dom.className = menuClassName;
            //判断是否支持触控事件，如果不支持则用鼠标点击事件
            var startEventName = Q.isTouchSupport ? "touchstart" : "mousedown";

            if(!this.stopEditWhenClickOnWindow){
                var _this = this;
                this.stopEditWhenClickOnWindow = function(evt){
                    if(isDescendant(_this.html, evt.target)){
                        _this.hide();
                    }
                }
            }
            window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, true);
            this.dom.addEventListener(startEventName, function(evt){
                Q.stopEvent(evt);
            }, false);
        } else {
            this.dom.innerHTML = "";
        }

        for (var i = 0,l = this.items.length; i < l; i++) {
            var item = this.renderItem(this.items[i]);
            this.dom.appendChild(item);
        }
    },
    html2Escape: function(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
    },
    renderItem : function(menuItem, zIndex){
        var dom = document.createElement('li');
        dom.setAttribute("role", "presentation");
        if(menuItem == PopupMenu.Separator){
            dom.className = PopupMenu.Separator;
            dom.innerHTML = " ";
            return dom;
        }
        if(Q.isString(menuItem)){
            dom.innerHTML = '<a role="menuitem" tabindex="-1" href="#">' + this.html2Escape(menuItem) + '</a>';
            return dom;
        }
        if(menuItem.selected){
            dom.style.backgroundPosition = '3px 5px';
            dom.style.backgroundRepeat = 'no-repeat';
            dom.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4y2P4//8/AyWYYdQA7AYAAZuamlo7ED+H4naQGNEGQDX/R8PtpBjwHIsBz+lqAGVeoDgQR1MiaRgAnxW7Q0QEK0cAAAAASUVORK5CYII=')";
        }
        var a = document.createElement("a");
        a.setAttribute("role", "menuitem");
        a.setAttribute("tabindex", "-1");
        a.setAttribute("href", "javascript:void(0)");
        dom.appendChild(a);

        var text = menuItem.text || menuItem.name;
        if(text){
            a.innerHTML = this.html2Escape(text);
        }
        var className = menuItem.className;
        if(className){
            dom.className = className;
        }
        var call = menuItem.action;
        var self = this;

        var onclick = function(evt){
            if (call) {
                call.call(menuItem.scope, evt, menuItem);
            }
            if(!Q.isIOS){
                evt.target.focus();
            }
            setTimeout(function(){
                self.hide();
            }, 100);
        };
        if(Q.isTouchSupport){
//            dom.ontouchstart = onclick;
            a.ontouchstart = onclick;
        }else{
            dom.onclick = onclick;
        }
        return dom;
    }
};

Object.defineProperties(PopupMenu.prototype, {
    items: {
        get:function(){
            return this._items;
        },
        set: function(v){
            this._items = v;
            this._invalidateFlag = true;
        }
    }
});

/**
 * 获取事件的XY轴坐标
 * @param evt
 */
function getPageXY(evt){
    if (evt.touches && evt.touches.length) {
        evt = evt.touches[0];
    }
    return {x: evt.pageX, y: evt.pageY};
}

/**
 * 添加交互菜单
 * @param graph
 */
function appendInteractionMenu(graph){
    var menu = new PopupMenu();
    function showMenu(evt, graph){
        var xy = getPageXY(evt);
        var x = xy.x, y = xy.y;
        var data = graph.getElementByMouseEvent(evt);
        var items = [];
        if (data) {
           var name = data instanceof Q.Node ? "查看节点" : "查看连线";
           items.push({
               text: name,
               action: function(){
                   if (data instanceof Q.Node) {
                       showNodeInfo(data);
                   } else if (data instanceof Q.Edge) {
                       showEdgeInfo(data);
                   }
               }
           });
           items.push(PopupMenu.Separator);
           items.push({text: "删除节点"});
           items.push(PopupMenu.Separator);
        }
        var currentMode = graph.interactionMode;
        var interactons = [{
            text: "浏览模式",
            value: Q.Consts.INTERACTION_MODE_VIEW
        }, {
            text: "框选模式",
            value: Q.Consts.INTERACTION_MODE_SELECTION
        }];
        for (var i = 0, l = interactons.length; i < l; i++) {
            var mode = interactons[i];
            if (mode.value == currentMode) {
                mode.selected = true;
            }
            mode.action = function (evt, item) {
                //graph.interactionMode = item.value;
                $("#toolbar").find(">.btn-group:eq(0)>button[title=" + item.text + "]").click();
            };
            items.push(mode)
        }

        menu.items = items;
        menu.showAt(x, y);
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }
    if(Q.isTouchSupport){
        graph.addCustomInteraction({
            onlongpress: function (evt, graph) {
                showMenu(evt, graph)
            },
            onstart: function (evt) {
                menu.hide();
            }
        });
    }else{
        graph.html.oncontextmenu = function(evt){
            Q.stopEvent(evt);
            showMenu(evt, graph);
        };
        graph.addCustomInteraction({
            onstart: function (evt) {
                menu.hide();
            }
        });
    }
}

/**
 * 用于调整图片导出预览工具
 * @param parent 画布
 * @param onBoundsChange
 * @constructor
 */
function ResizeBox(parent, onBoundsChange){
    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = Q.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for (var i = 0, l = handles.length; i < l; i++) {
        var name = handles[i];
        var handle = this._createDiv(this.parent);
        handle.type = "handle";
        handle.name = name;
        handle.style.position = "absolute";
        handle.style.backgroundColor = "#FFF";
        handle.style.border = "solid 1px #555";
        handle.style.width = handle.style.height = this.handleSize + "px";
        var cursor;
        if (name == 'lt' || name == 'rb') {
            cursor = "nwse-resize";
        } else if (name == 'rt' || name == 'lb') {
            cursor = "nesw-resize";
        } else if (name == 't' || name == 'b') {
            cursor = "ns-resize";
        } else {
            cursor = "ew-resize";
        }
        handle.style.cursor = cursor;
        this[handles[i]] = handle;
    }
    this.interaction = new Q.DragSupport(this.parent, this);
}

ResizeBox.prototype = {
    destroy: function () {
        this.interaction.destroy();
    },
    update: function (width, height) {
        this.wholeBounds = new Q.Rect(0, 0, width, height);
        this._setBounds(this.wholeBounds.clone());
    },
    ondblclick: function (evt) {
        if (this._bounds.equals(this.wholeBounds)) {
            if (!this.oldBounds) {
                this.oldBounds = this.wholeBounds.clone().grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
            }
            this._setBounds(this.oldBounds, true);
            return;
        }
        this._setBounds(this.wholeBounds.clone(), true);
    },
    startdrag: function (evt) {
        if (evt.target.type) {
            this.dragItem = evt.target;
        }
    },
    ondrag: function (evt) {
        if (!this.dragItem) {
            return;
        }
        Q.stopEvent(evt);
        var dx = evt.dx;
        var dy = evt.dy;
        if (this.dragItem.type == "border") {
            this._bounds.offset(dx, dy);
            this._setBounds(this._bounds, true);
        } else if (this.dragItem.type == "handle") {
            var name = this.dragItem.name;
            if (name[0] == 'l') {
                this._bounds.x += dx;
                this._bounds.width -= dx;
            } else if (name[0] == 'r') {
                this._bounds.width += dx;
            }
            if (name[name.length - 1] == 't') {
                this._bounds.y += dy;
                this._bounds.height -= dy;
            } else if (name[name.length - 1] == 'b') {
                this._bounds.height += dy;
            }
            this._setBounds(this._bounds, true);
        }

    },
    enddrag: function (evt) {
        if (!this.dragItem) {
            return;
        }
        this.dragItem = false;
        if (this._bounds.width < 0) {
            this._bounds.x += this._bounds.width;
            this._bounds.width = -this._bounds.width;
        } else if (this._bounds.width == 0) {
            this._bounds.width = 1;
        }
        if (this._bounds.height < 0) {
            this._bounds.y += this._bounds.height;
            this._bounds.height = -this._bounds.height;
        } else if (this._bounds.height == 0) {
            this._bounds.height = 1;
        }
        if (this._bounds.width > this.wholeBounds.width) {
            this._bounds.width = this.wholeBounds.width;
        }
        if (this._bounds.height > this.wholeBounds.height) {
            this._bounds.height = this.wholeBounds.height;
        }
        if (this._bounds.x < 0) {
            this._bounds.x = 0;
        }
        if (this._bounds.y < 0) {
            this._bounds.y = 0;
        }
        if (this._bounds.right > this.wholeBounds.width) {
            this._bounds.x -= this._bounds.right - this.wholeBounds.width;
        }
        if (this._bounds.bottom > this.wholeBounds.height) {
            this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
        }

        this._setBounds(this._bounds, true);
    },
    _createDiv: function (parent) {
        var div = document.createElement("div");
        parent.appendChild(div);
        return div;
    },
    _setHandleLocation: function (handle, x, y) {
        handle.style.left = (x - this.handleSize / 2) + "px";
        handle.style.top = (y - this.handleSize / 2) + "px";
    },
    _setBounds: function (bounds) {
        if (!bounds.equals(this.wholeBounds)) {
            this.oldBounds = bounds;
        }
        this._bounds = bounds;
        bounds = bounds.clone();
        bounds.width += 1;
        bounds.height += 1;
        this.boundsDiv.style.left = bounds.x + "px";
        this.boundsDiv.style.top = bounds.y + "px";
        this.boundsDiv.style.width = bounds.width + "px";
        this.boundsDiv.style.height = bounds.height + "px";

        this._setHandleLocation(this.lt, bounds.x, bounds.y);
        this._setHandleLocation(this.t, bounds.cx, bounds.y);
        this._setHandleLocation(this.rt, bounds.right, bounds.y);
        this._setHandleLocation(this.l, bounds.x, bounds.cy);
        this._setHandleLocation(this.r, bounds.right, bounds.cy);
        this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
        this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
        this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
        if (this.onBoundsChange) {
            this.onBoundsChange(this._bounds);
        }
    }
};

Object.defineProperties(ResizeBox.prototype, {
    bounds: {
        get: function(){
            return this._bounds;
        },
        set: function(v){
            this._setBounds(v);
        }
    }
});

function ExportPanel(){
    var scope = this;
    var export_panel = document.getElementById("export_panel");
    var handler = function(evt){
        if(evt.target == export_panel){
            scope.destroy();
        }
    };
    if(export_panel.addEventListener) {
        export_panel.addEventListener("mousedown", handler, false);
    } else if (export_panel.attachEvent) {
        export_panel.attachEvent("onmousedown", handler);
    } else {
        export_panel['onmousedown'] = handler;
    }

    var export_scale = document.getElementById("export_scale");
    var export_scale_label = document.getElementById("export_scale_label");
    export_scale.onchange = function(evt){
        export_scale_label.textContent = scope.scale = export_scale.value;
        scope.updateOutputSize();
    };
    var exportImage = function(print){
        var graph = scope.graph;
        if(!graph){
            return;
        }
        var scale = export_scale.value;
        var s = scope.imageInfo.scale;
        var clipBounds = new Q.Rect(scope.clipBounds.x / s, scope.clipBounds.y / s, scope.clipBounds.width / s, scope.clipBounds.height / s);
        clipBounds.offset(scope.bounds.x, scope.bounds.y);
        var imageInfo = graph.exportImage(scale, clipBounds);

        if (!imageInfo || !imageInfo.data) {
            return false;
        }
        var win = window.open();
        var doc = win.document;
        doc.title = graph.name || "";
//        doc.title = "export image - " + imageInfo.width + " x " + imageInfo.height;
        var img = doc.createElement("img");
        img.src = imageInfo.data;
        doc.body.style.textAlign = "center";
        doc.body.style.margin = "0px";
        doc.body.appendChild(img);

        if(print){
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("media", "print");
            var printCSS = "img {max-width: 100%; max-height: 100%;}";
            if(clipBounds.width / clipBounds.height > 1.2){
                printCSS += "\n @page { size: landscape; }";
            }
            style.appendChild(document.createTextNode(printCSS));
            doc.head.appendChild(style);

            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            setTimeout(function(){
                win.print();
                win.onfocus=function(){ win.close();}
            }, 100);
        }
    };
    var export_submit = document.getElementById("export_submit");
    export_submit.onclick = function(){
        exportImage();
    };
    var print_submit = document.getElementById("print_submit");
    print_submit.onclick = function(){
        exportImage(true);
    };
}

ExportPanel.prototype = {
    canvas: null,
    initCanvas: function(){
        var export_canvas = document.getElementById('export_canvas');
        export_canvas.innerHTML = "";

        var canvas = document.createElement("canvas");
        export_canvas.appendChild(canvas);
        this.canvas = canvas;

        var export_bounds = document.getElementById("export_bounds");
        var export_size = document.getElementById("export_size");
        var scope = this;
        var clipBounds;
        var drawPreview = function(){
            var canvas = scope.canvas;
            var g = canvas.getContext("2d");
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.drawImage(scope.imageInfo.canvas, 0, 0);
            g.beginPath();
            g.moveTo(0, 0);
            g.lineTo(canvas.width, 0);
            g.lineTo(canvas.width, canvas.height);
            g.lineTo(0, canvas.height);
            g.lineTo(0, 0);

            var x = clipBounds.x, y = clipBounds.y, width = clipBounds.width, height = clipBounds.height;
            g.moveTo(x, y);
            g.lineTo(x, y + height);
            g.lineTo(x + width, y + height);
            g.lineTo(x + width, y);
            g.closePath();
            g.fillStyle = "rgba(0, 0, 0, 0.3)";
            g.fill();
        };

        var onBoundsChange = function(bounds){
            clipBounds = bounds;
            scope.clipBounds = clipBounds;
            drawPreview();
            var w = clipBounds.width / scope.imageInfo.scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale | 0;
            export_bounds.textContent = (clipBounds.x / scope.imageInfo.scale | 0) + ", "
                + (clipBounds.y / scope.imageInfo.scale | 0) + ", " + w + ", " + h;
            scope.updateOutputSize();
        };

        this.updateOutputSize = function(){
            var export_scale = document.getElementById("export_scale");
            var scale = export_scale.value;
            var w = clipBounds.width / scope.imageInfo.scale * scale | 0;
            var h = clipBounds.height / scope.imageInfo.scale  * scale | 0;
            var info = w + " X " + h;
            if(w * h > 3000 * 4000){
                info += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>";
            }
            export_size.innerHTML = info;
        };

        var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange);
        this.update = function(){
            this.canvas.width = this.imageInfo.width;
            this.canvas.height = this.imageInfo.height;
            resizeHandler.update(this.canvas.width, this.canvas.height);
        };
    },
    destroy: function(){
        this.graph = null;
        this.imageInfo = null;
        this.clipBounds = null;
        this.bounds = null;
    },
    show: function(graph){
        $('#export_panel').modal("show");

        this.graph = graph;
        var bounds = graph.bounds;
        this.bounds = bounds;

        var canvas_size = document.getElementById("canvas_size");
        canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

        var size = Math.min(500, screen.width / 1.3);
        var imageScale;
        if(bounds.width > bounds.height){
            imageScale = Math.min(1, size / bounds.width);
        }else{
            imageScale = Math.min(1, size / bounds.height);
        }
        this.imageInfo = graph.exportImage(imageScale);
        this.imageInfo.scale = imageScale;

        if(!this.canvas){
            this.initCanvas();
        }
        this.update();
    }
};

//导出面板
var exportPanel;

/**
 * 显示导出面板
 */
function showExportPanel(){
    if(!exportPanel){
        exportPanel = new ExportPanel();
    }
    exportPanel.show(graph);
}

var DRAGINFO_PREFIX = "draginfo";

/**
 * 刚拖动时触发的事件
 * @param evt
 */
function ondrag(evt) {
    var dataTransfer = evt.dataTransfer;
    var img = evt.target;
    var attributes = img.attributes;

    for (var i = 0, l = attributes.length; i < l; i++) {
        var attribute = attributes[i];
        var name = attribute.name;
        var value = attribute.value;
        if (name == DRAGINFO_PREFIX) {
            dataTransfer.setData("label", value);
            return;
        }
        var index = name.indexOf(DRAGINFO_PREFIX + "-");
        if (index == 0) {
            var key = name.substring((DRAGINFO_PREFIX + "-").length);
            dataTransfer.setData(key, value);
        }
    }
}

/**
 * 创建图片元件
 * @param parent
 * @param src
 * @param title
 * @param info
 * @returns {Element}
 */
function createDNDImage(parent, src, title, info) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("draggable", "true");
    img.setAttribute("title", title);
    img.style.cursor = "move";
    img.style.marginTop = "10px";
    img.onmouseover = function () {
        this.style.backgroundColor = "#E7E7E7";
    };
    img.onmouseleave = function () {
        this.style.backgroundColor = "inherit";
    };
    if (info) {
        if (Q.isString(info)) {
            img.setAttribute(DRAGINFO_PREFIX, info);
        } else {
            for (var name in info) {
                img.setAttribute(DRAGINFO_PREFIX + "-" + name, info[name]);
            }
        }
    }
    img.ondragstart = ondrag;

    var label = document.createElement("span");
    label.innerText = title;

    parent.appendChild(img);
    parent.appendChild(label);
    return img;
}

/**
 * 创建工具栏
 * @param buttons
 * @param toolbar
 * @param scope
 * @param vertical
 * @param togglable
 */
function createToolBar(buttons, toolbar, scope, vertical, togglable){
    for(var n in buttons){
        var info = buttons[n];
        if(Q.isArray(info)){
            var buttonGroup = document.createElement("div");
            buttonGroup.className = vertical ? "btn-group-vertical" : "btn-group";
            if(togglable !== false){
                buttonGroup.setAttribute("data-toggle", "buttons");
            }
            for(var i= 0,l=info.length;i<l;i++){
                if(!info[i].type && togglable !== false){
                    info[i].type = 'radio';
                }
                buttonGroup.appendChild(createGraphButton(info[i], scope));
            }
            toolbar.appendChild(buttonGroup);
            continue;
        }
        toolbar.appendChild(createGraphButton(info, scope));
    }
}

/**
 * 创建工具栏上的按钮
 * @param info
 * @param scope
 * @returns {Element}
 */
function createGraphButton(info, scope){
    if(info.type == "input"){
        var div = document.createElement("div");
        div.style.display = "inline-flex";
        div.innerHTML = '<div class="input-group input-group-sm" style="width: 150px;">\
            <input type="text" class="form-control">\
                <span class="input-group-btn">\
                    <button class="btn btn-default" style="width:50px;" type="button"></button>\
                </span>\
            </div>';
        var input = div.getElementsByTagName("input")[0];
        var button = div.getElementsByTagName("button")[0];
        button.innerHTML = info.name;
        button.setAttribute("title", info.name);
        info.input = input;
        if(info.action){
            button.onclick = function(evt){
                info.action.call(scope || window.graph, evt, info);
            }
        }
        return div;
    }

    if(!info.type){
        var label = document.createElement("button");
    }else{
        var label = document.createElement("label");
        var button = document.createElement("input");
        info.input = button;
        button.setAttribute('type', info.type);
        label.appendChild(button);
        if (info.selected) {
            button.setAttribute('checked', 'checked');
            if(info.type == 'radio'){
                label.className += "active";
            }
        }
    }
    label.className += " btn btn-default btn-sm";
    if(info.icon){
        var icon = document.createElement('img');
        icon.src = info.icon;
        label.appendChild(icon);
    }else if(info.name){
        label.appendChild(document.createTextNode(" " + info.name));
    }
    if(info.name){
        label.setAttribute("title", info.name);
    }
    if(info.action){
        label.onclick = function(evt){
            info.action.call(scope || window.graph, evt, info);
        }
    }
    return label;
}
