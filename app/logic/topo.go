package logic

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
    "github.com/astaxie/beego/orm"
    "fmt"
)

type topo struct {}

/**
 * DESCRIPTION : 编辑节点
 * AUTHOR : jack
 * DATE : 2017/4/14
 * id : 节点ID
 * name : 节点的新名称
 */
func (this *topo)EditTopoNode(id int, name string) error {
    //TODO 保存Node节点数据
    o := orm.NewOrm()
    var err error
    node := &models.Node{
        Id: id,
    }
    if (o.Read(node) == nil) {
        node.Name = name
        _, err = o.Update(node)
    } else {
        err = &utils.NgdError{
            Msg: utils.TOPO_NOT_RECORD,
        }
    }

    return err;
}

/**
 * DESCRIPTION : 添加拓扑节点
 * AUTHOR : jack
 * DATE : 2017/4/14
 * name : 节点名称
 * ip_v4 : 节点IP
 * nodeType : 节点类型
 */
func (this *topo)AddTopoNode(name, ip_v4 string, nodeType int) (*models.Node, error) {
    o := orm.NewOrm()
    //检查重复
    node := new(models.Node)
    qs := o.QueryTable("node")
    err := qs.Filter("name", name).One(node)
    //检查重复
    if (err == nil || len(node.Name) > 0) {
        err = &utils.NgdError{
            Msg: utils.TOPO_NAME_REPEAT,
        }
        return nil, err
    }

    node = &models.Node{
        Name: name,
        Ip_v4: ip_v4,
        Type: nodeType,
    }

    o.Begin()
    //保存节点信息
    _, err = o.Insert(node)
    if (err != nil) {
        err = &utils.NgdError{
            Msg: utils.TOPO_NODE_ADD_ERROR,
        }
        o.Rollback()
        return nil, err
    }
    o.Commit()
    return node, err
}


/**
 * DESCRIPTION : 添加拓扑连线
 * AUTHOR : jack
 * DATE : 2017/4/14
 */
func (this *topo)AddTopoEdge(edgeInputs []models.EdgeInputs) (*models.TopoStatus, error) {
    o := orm.NewOrm()
    o.Begin()
    var leftNode, rightNode *models.Node
    var line *models.Line
    var line_port *models.LinePort
    isCreated := false
    for _, v := range edgeInputs {
        leftNode = &models.Node{
            Id: v.Left,
        }
        if o.Read(leftNode) != nil {
            o.Rollback()
            return nil, &utils.NgdError{
                Msg: utils.TOPO_EDGE_LEFT_EMTPY,
            }
        }
        rightNode = &models.Node{
            Id: v.Right,
        }
        if o.Read(rightNode) != nil {
            o.Rollback()
            return nil, &utils.NgdError{
                Msg: utils.TOPO_EDGE_RIGHT_EMTPY,
            }
        }
        if !isCreated {
            line = &models.Line{
                Left: v.Left,
                Right: v.Right,
            }
            //创建节点连线
            _, err := o.Insert(line)
            if (err != nil) {
                err := &utils.NgdError{
                    Msg : utils.TOPO_EDGE_ADD_ERROR,
                }
                o.Rollback()
                return nil, err
            }
            isCreated = true
        }
        line_port = &models.LinePort{
            Line_id: line.Id,
            Left_port: v.Left_port,
            Right_port: v.Right_port,
            Protocol: v.Protocol,
        }
        //创建节点连线端口信息
        _, err := o.Insert(line_port)
        if (err != nil) {
            err = &utils.NgdError{
                Msg: utils.TOPO_EDGE_ADD_ERROR,
            }
            o.Rollback()
            return nil, err
        }
    }

    topoStatus := &models.TopoStatus{
        Line: line,
        Status: models.Status{
            Return_code: utils.SUCCESS,
            Reason: utils.TOPO_ADD_EDGE_SUCCESS,
        },
    }
    o.Commit()
    return topoStatus, nil
}

/**
 * DESCRIPTION : 添加拓扑连线
 * AUTHOR : jack
 * DATE : 2017/4/14
 * left_port : 源节点端口
 * right_port : 目标节点端口
 * edge : 连线ID
 * protocol :  通信协议
 */
func (this *topo)AddTopoMultipleEdge(left_port, right_port, edge int, protocol string) (*models.TopoStatus, error) {
    o := orm.NewOrm()

    line := &models.Line{
        Id: edge,
    }
    //获取连线信息
    if (o.Read(line) != nil) {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_EMPTY,
        }
        return nil, err
    }
    o.Begin()
    line_port := &models.LinePort{
        Line_id: line.Id,
        Left_port: left_port,
        Right_port: right_port,
        Protocol: protocol,
    }
    //创建节点连线端口信息
    _, err := o.Insert(line_port)
    if (err != nil) {
        err = &utils.NgdError{
            Msg: utils.TOPO_EDGE_ADD_ERROR,
        }
        o.Rollback()
        return nil, err
    }

    topoStatus := &models.TopoStatus{
        Status: models.Status{
            Reason: utils.TOPO_ADD_EDGE_SUCCESS,
            Return_code: utils.SUCCESS,
        },
        Line: line,
        Line_Port: line_port,
    }
    o.Commit()
    return topoStatus, err
}

/**
 * DESCRIPTION : 获得拓扑图
 * AUTHOR : jack
 * DATE : 2017/4/14
 */
func (this *topo) GetTopoInfo() (*models.TopoNodesStatus, error) {
    o := orm.NewOrm()
    nodes := make([]*models.Node, 0)
    lines := make([]*models.Line, 0)
    linePorts := make([]*models.LinePort, 0)

    qs := o.QueryTable("node")
    _,err := qs.All(&nodes)
    if err != nil {
        return nil, err
    }
    qs = o.QueryTable("line")
    _,err = qs.All(&lines)
    if err != nil {
        return nil, err
    }
    qs = o.QueryTable("line_port")
    _,err = qs.All(&linePorts)
    if err != nil {
        return nil, err
    }
    topoNodes := &models.TopoNodesStatus{
        Nodes: nodes,
        Lines: lines,
        Line_Ports: linePorts,
        Status: models.Status{
            Return_code:utils.SUCCESS,
        },
    }
    return topoNodes, err
}

/**
 * DESCRIPTION : 删除拓扑元素
 * AUTHOR : jack
 * DATE : 2017/4/18
 */
func (this *topo) DeleteTopoByIds(deleteIds models.DeleteIds) error {

    o := orm.NewOrm()
    o.Begin()

    for _, v := range deleteIds.NodeIds {
        fmt.Println(v)
        node := &models.Node{
            Id: v,
        }
        //删除节点
        _, err := o.Delete(node)
        if (err != nil) {
            o.Rollback()
            return &utils.NgdError{
                Msg: utils.TOPO_ELEMENT_DELETE_ERROR,
            }
        }
    }

    for _, v := range deleteIds.EdgeIds {
        fmt.Println(v)
        line := &models.Line{
            Id: v,
        }
        //删除连线信息
        _,err := o.Raw("delete from line_port where line_id = ?", line.Id).Exec()
        if (err != nil) {
            o.Rollback()
            return &utils.NgdError{
                Msg: utils.TOPO_ELEMENT_DELETE_ERROR,
            }
        }
        //删除连线
        _,err = o.Delete(line)
        if (err != nil) {
            o.Rollback()
            return &utils.NgdError{
                Msg: utils.TOPO_ELEMENT_DELETE_ERROR,
            }
        }
    }

    o.Commit()
    return nil
}

/**
 * DESCRIPTION : 通过连线ID获得连线信息
 * AUTHOR : jack
 * DATE : 2017/5/10
 */
func (this *topo) GetEdgeInfoById(edge int, pageNo, pageSize int64) (*models.EdgeStatus, error){
    o := orm.NewOrm()
    line := &models.Line{
        Id: edge,
    }
    if o.Read(line) != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_EMPTY,
        }
        return nil, err
    }

    leftNode := &models.Node{
        Id:line.Left,
    }
    if o.Read(leftNode) != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_GET_ERROR,
        }
        return nil, err
    }
    rightNode := &models.Node{
        Id:line.Right,
    }
    if o.Read(rightNode) != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_GET_ERROR,
        }
        return nil, err
    }

    linePorts := make([]*models.LinePort, 0)

    qs := o.QueryTable("line_port")
    totalCount, err := qs.Filter("line_id", line.Id).Count()
    if err != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_GET_ERROR,
        }
        return nil, err
    }

    var totalPage, offset int64
    totalPage = totalCount / int64(pageSize)
    if totalCount % pageSize != 0 {
        totalPage ++
    }
    if pageNo > totalPage {
        pageNo = totalPage
    } else if pageNo < 1 {
        pageNo = 1
    }
    if pageNo == 1 {
        offset = 0
    } else {
        offset = (pageNo - 1) * pageSize
    }

    _, err = qs.Filter("line_id", line.Id).Limit(pageSize, offset).All(&linePorts)
    if err != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_GET_ERROR,
        }
        return nil, err
    }

    edgeStatus := &models.EdgeStatus{
        LeftNode: leftNode,
        RightNode: rightNode,
        Line:line,
        Line_Ports: linePorts,
        PageNo: pageNo,
        PageSize:pageSize,
        TotolPage:totalPage,
        TotalCount:totalCount,
        Status:models.Status{
            Return_code:utils.SUCCESS,
        },
    }

    return edgeStatus, err
}

func (this *topo) ModifyEdgeInfo(left_port, right_port, line_port int, protocol string) error {
    o := orm.NewOrm()

    lp := &models.LinePort{
        Id: line_port,
    }
    if o.Read(lp) != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_GET_ERROR,
        }
        return err
    }
    o.Begin()
    lp.Left_port = left_port
    lp.Right_port = right_port
    lp.Protocol = protocol
    _,err := o.Update(lp)
    if err != nil {
        err := &utils.NgdError{
            Msg : utils.TOPO_EDGE_MODIFY_ERROR,
        }
        o.Rollback()
        return err
    }
    o.Commit()
    return nil
}

func (this *topo) DeleteLinePortByIds(ids []int) error {
    o := orm.NewOrm()

    o.Begin()
    for _, v := range ids {
        lp := &models.LinePort{
            Id: v,
        }
        if o.Read(lp) != nil {
            err := &utils.NgdError{
                Msg : utils.TOPO_EDGE_DELETE_PORT_ERROR,
            }
            o.Rollback()
            return err
        }
        o.Delete(lp)
    }
    o.Commit()
    return nil
}
