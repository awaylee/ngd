package controllers

import (
    "github.com/astaxie/beego"
    "git.oschina.net/nutsbeacon/NGD-Web/app/logic"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "fmt"
)

type UserController struct {
    baseController
}

func (this *UserController) URLMapping() {
    this.Mapping("Login", this.Login)
    this.Mapping("Get_logout", this.Get_logout)
    this.Mapping("Register", this.Register)
    this.Mapping("Forgot", this.Forgot)
    this.Mapping("ChangePwd", this.ChangePwd)
}

// @router /login [*]
func (this *UserController) Login() {
    if this.isPost() {
        this.post_login()
    } else {
        this.get_login()
    }
}

func (this *UserController) get_login() {
    this.Data["site_name"] = beego.BConfig.AppName
    this.display("User/login")
}

func (this *UserController) post_login() {
    account := this.GetString("account")
    pwd := this.GetString("passwd")
    // TODO 1.调用远程登陆接口； 2.成功写入session并重定向
    if logic.UserService.Login(account, pwd) {
        user := models.User{UserName:account, Login:true}
        this.SetSession("user", user)
        this.json("true")
        this.redirect("/")
    } else {
        this.Data["err_msg"] = "Login error!"
        this.json("false")
        this.redirect("/login")
    }
}

// @router /:id/logout [get]
func (this *UserController) Get_logout() {
    id := this.Ctx.Input.Param("id")
    if logic.UserService.Logout(id) {
        this.DelSession("user")
        this.redirect("/login")
    }
}

// @router /:id/register [*]
func (this *UserController) Register() {
    this.display("User/register")
}

// @router /:id/forgot [*]
func (this *UserController) Forgot() {
    this.display("User/forgot")
}

// @router /:id/reset [*]
func (this *UserController) Reset() {
    this.display("User/reset")
}

// @router /changePwd [post]
func (this *UserController) ChangePwd() {
    account := this.GetString("account")
    oldPwd := this.GetString("oldPwd")
    newPwd := this.GetString("newPwd")
    fmt.Println("account:" + account, "oldPwd:" + oldPwd, "newPwd:" + newPwd)
    if logic.UserService.ChangePwd(account, oldPwd, newPwd) {
        this.json("true")
    } else {
        this.json("false")
    }
}
