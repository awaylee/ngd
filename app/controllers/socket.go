package controllers

import (
    "github.com/gorilla/websocket"
    "fmt"
    "net/http"
    "github.com/astaxie/beego"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "encoding/json"
)

type WebSocketController struct {
    baseController
}

func (this *WebSocketController) URLMapping() {
    this.Mapping("GetIndex", this.GetIndex)
    this.Mapping("GetInfo", this.GetJoin)
}

// @router /websocket [get]
func (this *WebSocketController) GetIndex() {
    this.display("Alarm/websocket.html")
}

// @router /websocket/join [get]
func (this *WebSocketController) GetJoin() {

    fmt.Println("socket Join....")

    ws, err := websocket.Upgrade(this.Ctx.ResponseWriter, this.Ctx.Request, nil, 1024, 1024)
    if _, ok := err.(websocket.HandshakeError); ok {
        http.Error(this.Ctx.ResponseWriter, "Not a websocket handshake", 400)
        return
    } else if err != nil {
        beego.Error("Cannot setup WebSocket connection:", err)
        return
    }

    user, ok := this.GetSession("user").(models.User)
    if !ok {
        beego.Error("Current user is empty!!!")
        return
    }

    //创建用户连接
    Join(user, ws)
    defer Leave(user)

    //go getRealtimeAlarmFromDB()

    for {
        _, p, err := ws.ReadMessage()
        if err != nil {
            return
        }
        publish <- newEvent(models.EVENT_MESSAGE, user, string(p))
    }
}

/**
 * DESCRIPTION : 推送用户信息
 * AUTHOR : jack
 * DATE : 2017/5/4
 */
func broadcastWebSocket(event models.Event) {
    data, err := json.Marshal(event)
    if err != nil {
        beego.Error("Fail to marshal event : ", err)
        return
    }
    for u := onlineUsers.Front(); u != nil; u = u.Next() {
        ws := u.Value.(UserInfo).Conn
        if ws != nil {
            if ws.WriteMessage(websocket.TextMessage, data) != nil {
                fmt.Println("send message error : ", data)
            } else {
                fmt.Println("send message success!", data)
            }
        }
    }
}

/**
 * DESCRIPTION : 推送告警
 * AUTHOR : jack
 * DATE : 2017/5/5
 */
func broadcastWebSocketAlarms(alarms []models.Alarm) {
    data, err := json.Marshal(alarms)
    if err != nil {
        beego.Error("Fail to marshal event : ", err)
        return
    }
    fmt.Println("onlineUsers len : ", onlineUsers.Len())
    if onlineUsers.Len() < 1 {
        fmt.Println("onlineUsers len 小于1 结束: ", onlineUsers.Len())
        return
    }

    for user := onlineUsers.Front(); user != nil; user = user.Next() {
        ws := user.Value.(UserInfo).Conn
        fmt.Println("for in onlineUsers... ws is : ", ws != nil)
        if ws != nil {
            if ws.WriteMessage(websocket.TextMessage, data) != nil {
                fmt.Println("send message error : ", data)
            } else {
                fmt.Println("send message success!", data)
            }
        }
    }
}
