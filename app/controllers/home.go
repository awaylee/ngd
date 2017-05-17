package controllers

import "git.oschina.net/nutsbeacon/NGD-Web/app/models"

type HomeController struct {
    baseController
}

func (this *HomeController) URLMapping() {
    this.Mapping("Get_Index", this.Get_Index)
    this.Mapping("Get_Demo", this.Get_Demo)
}

// @router / [get]
func (this *HomeController) Get_Index() {
    this.Data["Email"] = "astaxie@gmail.com"
    this.display("Home/index.html")
}

// @router /demo [get]
func (this *HomeController) Get_Demo() {
    user := this.GetSession("user").(*models.User)
    this.Data["Email"] = user.Id
    this.display("Home/demo.html")
}
