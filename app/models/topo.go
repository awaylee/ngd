package models

/**
    节点
 */
type Node struct {
    Id int
    Name string
    Type int
    Ip_v4 string
}

/**
    连线
 */
type Line struct {
    Id int
    Left int
    Right int
}

/**
    连线信息
 */
type LinePort struct {
    Id int
    Line_id int
    Left_port int
    Right_port int
    Protocol string
}

/**
    拓扑信息返回数据
 */
type TopoNodesStatus struct {
    Status
    Nodes []*Node
    Lines []*Line
    Line_Ports []*LinePort
}


/**
    拓扑响应返回数据
 */
type TopoStatus struct {
    Status
    Node *Node
    Line *Line
    Line_Port *LinePort
}

/**
    删除拓扑元素请求数据
 */
type DeleteIds struct {
    NodeIds []int
    EdgeIds []int
}

type EdgeStatus struct {
    Status
    LeftNode *Node
    RightNode *Node
    Line *Line
    Line_Ports []*LinePort
    PageNo int64
    PageSize int64
    TotalCount int64
    TotolPage int64
}

type EdgeInputs struct {
    Left int
    Right int
    Left_port int
    Right_port int
    Protocol string
}
