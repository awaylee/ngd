package utils

import "fmt"

const(
    //通用模块
    SUCCESS = "0"
    FAILED = "1"

    //TOPO模块错误信息
    TOPO_ID_EMPTY  = "ID不能为空"
    TOPO_NAME_EMPTY  = "名称不能为空"
    TOPO_TYPE_EMPTY  = "类型不能为空"
    TOPO_IP_EMPTY  = "IP不能为空"
    TOPO_NAME_REPEAT  = "名称不能重复"
    TOPO_NOT_RECORD  = "没有找到该条记录"
    TOPO_NODE_ADD_ERROR  = "添加节点失败"
    TOPO_ADD_NODE_SUCCESS = "添加节点成功"
    TOPO_MODIFY_SUCCESS = "修改节点成功"
    TOPO_ADD_EDGE_SUCCESS = "添加连线成功"
    TOPO_EDGE_LEFT_PORT_ERROR = "源端口输入不正确"
    TOPO_EDGE_RIGHT_PORT_ERROR = "目标端口输入不正确"
    TOPO_EDGE_PROTOCOL_EMPTY = "通信协议为空"
    TOPO_EDGE_ADD_ERROR  = "添加连线失败"
    TOPO_ELEMENT_DELETE_ERROR = "删除元素失败"
    TOPO_ELEMENT_DELETE_SUCCESS = "删除元素成功"
    TOPO_EDGE_EMPTY = "连线信息为空"
    TOPO_EDGE_GET_ERROR = "获取连线信息失败"
    TOPO_EDGE_MODIFY_ERROR = "修改连线信息失败"
    TOPO_EDGE_PAGING_ERROR = "连线信息分页参数错误"
    TOPO_EDGE_DELETE_PORT_ERROR = "删除连线信息错误"
    TOPO_EDGE_INPUT_ERROR = "连线信息输入有误"
    TOPO_EDGE_LEFT_EMTPY = "连线源节点为空"
    TOPO_EDGE_RIGHT_EMTPY = "连线目标节点为空"
)

type NgdError struct {
    Code int
    Msg string
}

func (err *NgdError) Error() string {
    return fmt.Sprintf(err.Msg)
}

