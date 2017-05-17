package controllers

import (
    "fmt"
    "git.oschina.net/nutsbeacon/NGD-Web/app/logic"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "encoding/json"
)

type SysConfigController struct {
    baseController
}

func (this *SysConfigController) URLMapping() {
    this.Mapping("GetSysConfig", this.GetSysConfig)
    this.Mapping("SaveSysConfig", this.SaveSysConfig)
}

// @router /getSysConfig [get]
func (this *SysConfigController) GetSysConfig() {
    sysConfig := logic.SysConfigService.GetSysConfig()
    json, _ := json.Marshal(sysConfig)
    this.json(string(json))
}


// @router /saveSysConfig [post]
func (this *SysConfigController) SaveSysConfig() {
    var sysConfig models.SysConfig

    ipAddress := this.GetString("ipAddress")
    port := this.GetString("port")
    fmt.Println("ip:" + ipAddress, "port:" + port)

    sysConfig.IpAddress = ipAddress
    sysConfig.Port = port

    if logic.SysConfigService.SaveSysConfig(sysConfig) {
        this.json("true")
    } else {
        this.json("false")
    }
}
