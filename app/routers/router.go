package routers

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/controllers"
    "github.com/astaxie/beego"
)

func init() {
    setRouter()
    setFilter()
}

func setRouter() {
    //beego.Router("/", &app.controllers.MainController{})
    beego.Include(&controllers.HomeController{})
    beego.Include(&controllers.UserController{})
    beego.Include(&controllers.TopoController{})
    beego.Include(&controllers.AlarmController{})
    beego.Include(&controllers.SysConfigController{})
    beego.Include(&controllers.WebSocketController{})
}

func setFilter() {
    //beego.InsertFilter("/*", beego.BeforeRouter, func(ctx *context.Context) {
    //    _, ok := ctx.Input.Session("uid").(int)
    //    if !ok && ctx.Request.RequestURI != "/welcome" {
    //        ctx.Redirect(302, "/welcome")
    //    }
    //})
    //var permissions []*Permission
}
