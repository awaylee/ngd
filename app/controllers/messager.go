package controllers

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "time"
    "github.com/gorilla/websocket"
    "container/list"
    "github.com/astaxie/beego"
    "fmt"
)

var (
    //新加入用户通道
    online = make(chan UserInfo, 10)

    //退出用户通道
    offline = make(chan models.User, 10)

    //向用户发布通道
    publish = make(chan models.Event, 10)

    warning = make(chan []models.Alarm, 1024)

    //当前用户列表
    onlineUsers = list.New()
)

/**
 * DESCRIPTION : 订阅信息
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
type Subscription struct {
    Archive []models.Event          //存所有的事件档案信息
    New     <-chan models.Event     //添加新事件 定义一个只读事件类型管道
}

/**
 * DESCRIPTION : 登陆用户信息
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
type UserInfo struct {
    User models.User                //订阅者
    Conn *websocket.Conn            //订阅者ws连接
}

/**
 * DESCRIPTION : 创建新事件
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
func newEvent(ep models.EventType, user models.User, msg string) models.Event {
    return models.Event{
        Type: ep,
        User: user,
        Timestamp: int(time.Now().Unix()),
        Content: msg,
    }
}

/**
 * DESCRIPTION : 创建用户连接
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
func Join(user models.User, ws *websocket.Conn) {
    online <- UserInfo{
        User: user,
        Conn: ws,
    }
}

/**
 * DESCRIPTION : 删除用户连接
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
func Leave(user models.User) {
    offline <- user
}

/**
 * DESCRIPTION : 判断用户是否存在
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
func isUserExist(users *list.List, user models.User) bool {
    for u := users.Front(); u != nil; u = u.Next() {
        if u.Value.(UserInfo).User.UserName == user.UserName {
            return true
        }
    }
    return false
}

/**
 * DESCRIPTION : 消息管理器
 * AUTHOR : jack
 * DATE : 2017/5/3
 */
func msgManager() {
    for {
        select {
        case on := <-online:
            fmt.Println("online...")
            if !isUserExist(onlineUsers, on.User) {
                //添加用户到用户订阅列表中
                onlineUsers.PushBack(on)
                fmt.Println("New User: ", on.User.UserName, "; WebSocket:", on.Conn != nil)
                //发布加入事件
                publish <- newEvent(models.EVENT_JOIN, on.User, "join")
            } else {
                fmt.Println("Old user: ", on.User.UserName, "; WebSocket:", on.Conn != nil)
            }
        case event := <-publish:
            //通知订阅用户
            broadcastWebSocket(event)
            //创建一个新的用户连接信息档案
            models.NewArchive(event)
        case off := <-offline:
            fmt.Println("offline...")
            for u := onlineUsers.Front(); u != nil; u = u.Next() {
                if u.Value.(UserInfo).User.UserName == off.UserName {
                    onlineUsers.Remove(u)
                    //克隆ws连接
                    ws := u.Value.(UserInfo).Conn
                    if ws != nil {
                        ws.Close()
                        beego.Error("WebSocket closed:", off)
                    }
                    //发布用户下线事件通知
                    publish <- newEvent(models.EVENT_LEAVE, off, "Leave")
                    break
                }
            }
        case alarms := <-warning:
            fmt.Println("warning...")
            broadcastWebSocketAlarms(alarms)
        }
    }
}

func init() {
    go msgManager()
}
