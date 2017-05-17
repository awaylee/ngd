package models

import "container/list"

type EventType int

/**
    事件类型枚举
 */
const (
    EVENT_JOIN = iota
    EVENT_LEAVE
    EVENT_MESSAGE
)

/**
    事件
 */
type Event struct {
    Type EventType  //事件类型
    User User       //事件用户
    Timestamp int   //事件发生时间
    Content string  //事件内容
}

//最大连接信息数
const archiveSize = 20
//连接信息列表
var archive = list.New()

//创建一个新的连接档案信息
func NewArchive(event Event) {
    if archive.Len() >= archiveSize {
        //如果大于最大连接信息数，则删除掉第一个连接信息
        archive.Remove(archive.Front())
    }
    //添加当前连接信息
    archive.PushBack(event)
}
