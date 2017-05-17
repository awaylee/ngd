package logic

import (
    "github.com/astaxie/beego/httplib"
    "time"
    "encoding/json"
    "fmt"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "github.com/astaxie/beego/orm"
)

type alarm struct{}

func (this *alarm)GetAllAlarms() []models.Alarm {
    //获取所有的告警数据
    var alarms []models.Alarm

    o := orm.NewOrm()
    num, err := o.Raw("select * from alarm").QueryRows(&alarms)
    if err == nil {
        fmt.Println("num:", num)
    }
    return alarms
}

func (this *alarm)RequestPostAlarm(url string, param interface{}) models.AllAlarm {
    req := httplib.Post(url).SetTimeout(100 * time.Second, 100 * time.Second)
    requestBody, err := json.Marshal(param)
    if err != nil {
        fmt.Println("转换错误")
    }
    req.Body(requestBody)
    //初始化变量并分配内存空间
    result := models.AllAlarm{}
    req.ToJSON(&result)
    return result
}


