package controllers

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/logic"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
    "encoding/json"
    "strconv"
    "strings"
)

type TopoController struct {
    baseController
}

func (this *TopoController) URLMapping() {
    this.Mapping("AddNode", this.AddNode)
    this.Mapping("ModifyNodeName", this.ModifyNodeName)
    this.Mapping("GetTopoInfo", this.GetTopoInfo)
    this.Mapping("AddEdge", this.AddEdge)
    this.Mapping("GetEdgeInfo", this.GetEdgeInfo)
    this.Mapping("ModifyEdge", this.ModifyEdge)
    this.Mapping("DeleteLinePorts", this.DeleteLinePorts)
    this.Mapping("AddMultipleEdge", this.AddMultipleEdge)
    this.Mapping("DeleteTopoByIds", this.DeleteTopoByIds)
}

/**
 * DESCRIPTION : 添加节点
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/node/add [post]
func (this *TopoController) AddNode() {
    node := new(models.Node)
    res := &models.TopoStatus{
        Node: node,
        Status: models.Status{
            Reason:utils.TOPO_ADD_NODE_SUCCESS,
            Return_code:utils.SUCCESS,
        },
    };

    typeStr := this.GetString("type")
    nodeName := this.GetString("name")
    nodeIp := this.GetString("ip_v4")

    if len(nodeName) == 0 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_NAME_EMPTY
        this.json(res)
    }

    nodeType, err := strconv.Atoi(typeStr);
    if err != nil {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_TYPE_EMPTY
        this.json(res)
    }

    if len(nodeIp) == 0 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_IP_EMPTY
        this.json(res)
    }

    node, err = logic.TopoService.AddTopoNode(nodeName, nodeIp, nodeType)
    if err != nil {
        res.Return_code = utils.FAILED
        res.Reason = err.Error()
    }
    res.Node = node;

    this.json(res)
}

/**
 * DESCRIPTION : 添加连线
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/edge/add [post]
func (this *TopoController) AddEdge() {
    res := &models.TopoStatus{};

    data := this.GetString("AddEdgeInput")
    if len(data) < 1 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_EDGE_EMPTY
        this.json(res)
    }

    //处理请求的json数据
    edgeInputs := make([]models.EdgeInputs, 0)

    json.Unmarshal([]byte(data), &edgeInputs)

    if len(edgeInputs) < 1 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_EDGE_INPUT_ERROR
        this.json(res)
    }

    res, err := logic.TopoService.AddTopoEdge(edgeInputs)

    if res == nil || err != nil {
        res = &models.TopoStatus{
            Status : models.Status{
                Reason : err.Error(),
                Return_code : utils.FAILED,
            },
        }
    }

    this.json(res)
}


/**
 * DESCRIPTION : 获取拓扑信息
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/all [get]
func (this *TopoController) GetTopoInfo() {
    topoNodes, err := logic.TopoService.GetTopoInfo()
    if topoNodes == nil || err != nil {
        topoNodes.Return_code = utils.FAILED
    }
    this.json(topoNodes)
}

/**
 * DESCRIPTION : 修改节点名称
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/node/modify [post]
func (this *TopoController) ModifyNodeName() {
    //处理请求的json数据
    /*var requestJson models.Node
    json.Unmarshal(this.Ctx.Input.RequestBody, &requestJson)*/

    res := &models.Status{
        Reason : utils.TOPO_MODIFY_SUCCESS,
        Return_code: utils.SUCCESS,
    };

    idStr := this.GetString("id")
    name := this.GetString("name")

    if len(idStr) == 0 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_ID_EMPTY
        this.json(res)
    }

    id, err := strconv.Atoi(idStr);
    if err != nil {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_NOT_RECORD
        this.json(res)
    }

    if len(name) == 0 {
        res.Return_code = utils.FAILED
        res.Reason = utils.TOPO_NAME_EMPTY
        this.json(res)
    }

    err = logic.TopoService.EditTopoNode(id, name)
    if err != nil {
        res.Return_code = utils.FAILED
        res.Reason = err.Error()
    }
    this.json(res)
}

/**
 * DESCRIPTION : 删除拓扑元素
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/delete [post]
func (this *TopoController) DeleteTopoByIds() {
    var deleteIds = models.DeleteIds{}
    json.Unmarshal(this.Ctx.Input.RequestBody, &deleteIds)
    res := &models.Status{
        Reason: utils.TOPO_ELEMENT_DELETE_SUCCESS,
        Return_code: utils.SUCCESS,
    }
    err := logic.TopoService.DeleteTopoByIds(deleteIds)
    if err != nil {
        res.Reason = utils.TOPO_ELEMENT_DELETE_ERROR
        res.Return_code = utils.FAILED
    }
    this.json(res)
}


/**
 * DESCRIPTION : 添加多连线
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
// @router /api/topo/edge/multiple/add [post]
func (this *TopoController) AddMultipleEdge() {
    res := &models.TopoStatus{};
    var err error
    var left_port, right_port, edge int

    edge, err = this.GetInt("edge")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_EMPTY
        res.Return_code = utils.FAILED
        this.json(res)
    }
    left_port,err = this.GetInt("left_port")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_LEFT_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    right_port,err = this.GetInt("right_port")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_RIGHT_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    protocol := this.GetString("protocol")
    if len(protocol) == 0 {
        res.Reason = utils.TOPO_EDGE_PROTOCOL_EMPTY
        res.Return_code = utils.FAILED
        this.json(res)
    }

    res, err = logic.TopoService.AddTopoMultipleEdge(left_port, right_port, edge, protocol)
    if res == nil || err != nil {
        res = &models.TopoStatus{
            Status : models.Status{
                Reason : err.Error(),
                Return_code : utils.FAILED,
            },
        }
    }

    this.json(res)
}

/**
 * DESCRIPTION :  通过连线ID获得连线信息
 * AUTHOR : jack
 * DATE : 2017/5/10
 */
// @router /api/topo/edge/info [post]
func (this *TopoController) GetEdgeInfo() {
    res := &models.EdgeStatus{};
    var err error
    var edge int
    var pageNo, pageSize int64
    edge, err = this.GetInt("edge")

    if err != nil {
        res.Reason = utils.TOPO_EDGE_EMPTY
        res.Return_code = utils.FAILED
        this.json(res)
    }
    pageNo, err = strconv.ParseInt(this.GetString("pageNo"), 10, 64)

    if err != nil {
        res.Reason = utils.TOPO_EDGE_PAGING_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    pageSize, err = strconv.ParseInt(this.GetString("pageSize"), 10, 64)

    if err != nil {
        res.Reason = utils.TOPO_EDGE_PAGING_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }

    res, err = logic.TopoService.GetEdgeInfoById(edge, pageNo, pageSize)
    if res == nil || err != nil {
        res = &models.EdgeStatus{
            Status : models.Status{
                Reason : err.Error(),
                Return_code : utils.FAILED,
            },
        }
    }

    this.json(res)
}

/**
 * DESCRIPTION : 修改端口信息
 * AUTHOR : jack
 * DATE : 2017/5/10
 */
// @router /api/topo/edge/modify [post]
func (this *TopoController) ModifyEdge() {
    res := &models.Status{
        Return_code:utils.SUCCESS,
    }
    var err error
    var left_port, right_port, line_port int

    line_port, err = this.GetInt("line_port")

    if err != nil {
        res.Reason = utils.TOPO_EDGE_EMPTY
        res.Return_code = utils.FAILED
        this.json(res)
    }
    left_port,err = this.GetInt("left_port")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_LEFT_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    right_port,err = this.GetInt("right_port")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_RIGHT_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    protocol := this.GetString("protocol")
    if len(protocol) == 0 {
        res.Reason = utils.TOPO_EDGE_PROTOCOL_EMPTY
        res.Return_code = utils.FAILED
        this.json(res)
    }

    err = logic.TopoService.ModifyEdgeInfo(left_port, right_port, line_port, protocol)
    if err != nil {
        res.Reason = err.Error()
        res.Return_code = utils.FAILED
    }

    this.json(res)
}


/**
 * DESCRIPTION : 批量删除端口信息
 * AUTHOR : jack
 * DATE : 2017/5/10
 */
// @router /api/topo/edge/port/delete [post]
func (this *TopoController) DeleteLinePorts() {
    res := &models.Status{
        Return_code:utils.SUCCESS,
    }
    var err error
    var line_port []int

    ports := this.GetString("line_port")

    if len(ports) < 1 {
        res.Reason = utils.TOPO_EDGE_DELETE_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    line_port, err = string2array(ports, ",")
    if err != nil {
        res.Reason = utils.TOPO_EDGE_DELETE_PORT_ERROR
        res.Return_code = utils.FAILED
        this.json(res)
    }
    err = logic.TopoService.DeleteLinePortByIds(line_port)
    if err != nil {
        res.Reason = err.Error()
        res.Return_code = utils.FAILED
    }

    this.json(res)
}

/**
 * DESCRIPTION : 字符串转数组
 * AUTHOR : jack
 * DATE : 2017/5/10
 */
func string2array(arrStr, symbol string) ([]int, error) {
    arr := strings.Split(arrStr, symbol)
    result := make([]int, len(arr))

    var err error
    for index, v := range arr {
        result[index], err = strconv.Atoi(v)
        if err != nil {
            return nil, err
        }
    }
    return result, nil
}
