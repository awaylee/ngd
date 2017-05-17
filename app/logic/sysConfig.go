package logic

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
    "fmt"
    "encoding/json"
    "os"
)

type sysConfig struct{}

func (this *sysConfig) GetSysConfig() models.SysConfig {
    var sysConfig models.SysConfig

    str, _ := utils.ReadFile("sysConfig.json")
    json.Unmarshal([]byte(str), &sysConfig)
    fmt.Println("ipAddress:" + sysConfig.IpAddress, "port:" + sysConfig.Port)

    return sysConfig
}

func (this *sysConfig) SaveSysConfig(sysConfig models.SysConfig) bool {
    //将结构体转为json写入配置文件
    json, _ := json.Marshal(sysConfig)
    fmt.Println(string(json))

    file, err := os.Create("sysConfig.json")
    if err != nil {
        fmt.Println(err)
        return false
    }
    file.WriteString(string(json))

    return true
}
