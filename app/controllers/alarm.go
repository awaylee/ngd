package controllers

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/logic"
    "fmt"
    "encoding/json"
    "strings"
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
)

type AlarmController struct {
    baseController
}

func (this *AlarmController) URLMapping() {
    this.Mapping("Get_Index", this.Get_Index)
    this.Mapping("Get_AllAlarms", this.Get_AllAlarms)
    this.Mapping("Set_Alarm", this.Set_Alarm)
    this.Mapping("Get_SetAlarms", this.Get_SetAlarms)
    this.Mapping("Get_AlarmsByIp", this.Get_AlarmsByIp)
}


// @router /alarm [get]
func (this *AlarmController) Get_Index() {
    this.display("Alarm/index.html")
}

// @router /alarm/getall [get]
func (this *AlarmController) Get_AllAlarms() {
    //获取所有的告警
    alarms := logic.AlarmService.GetAllAlarms()
    fmt.Println(alarms)
    //将告警数据转为json输出
    result, _ := json.Marshal(alarms)
    this.json(strings.ToLower(string(result)))
}

// @router /alarm/set [post]
func (this *AlarmController) Set_Alarm() {
}

// @router /alarm/getset [get]
func (this *AlarmController) Get_SetAlarms() {
}

// @router /alarm/{ip}/list [get]
func (this *AlarmController) Get_AlarmsByIp() {
}


func getRealtimeAlarmFromDB() {

    config := make(map[string]interface{}, 0)
    config["name"] = "GetRealTimeAlarm"
    config["duration"] = 10
    config["times"] = 0

    timer := utils.MyTimer{
        Config: config,
        Callback:  func(){
            alarms := logic.AlarmService.GetAllAlarms()
            fmt.Println(alarms)
            warning <- alarms
        },
    }
    timer.Start()
}

