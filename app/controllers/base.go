package controllers

import (
    "errors"
    "strings"
    "github.com/astaxie/beego"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
)

type baseController struct {
    beego.Controller
    controllerName string
    actionName     string
    user           *models.User
    userId         int
    userName       string
}

func (this *baseController) Prepare() {
    controllerName, actionName := this.GetControllerAndAction()
    this.controllerName = strings.ToLower(controllerName[0: len(controllerName)-10]) // 去掉"Controller"
    this.actionName = strings.ToLower(actionName)

    this.Data["Version"] = beego.AppConfig.String("version")
    this.Data["SiteName"] = beego.BConfig.AppName
    this.Data["CurRoute"] = this.controllerName + "." + this.actionName
    this.Data["CurController"] = this.controllerName
    this.Data["CurAction"] = this.actionName

    // The login page don't auth
    if strings.EqualFold(this.actionName, "login") || strings.EqualFold(this.actionName, "register") || strings.EqualFold(this.actionName, "forgot") {
        this.Layout = "Common/layout.html"
        //this.Render()
        return
    }

    user, err := this.checkAuth()
    if err != nil {
        this.showMsg(err.Error())
        return
    }
    if user != nil {
        this.Layout = "Common/layout.html"
        this.LayoutSections = make(map[string]string)
        this.LayoutSections["Script"] = "Common/script.html"
        this.LayoutSections["Header"] = "Common/header.html"
        this.LayoutSections["Footer"] = "Common/footer.html"
        this.Data["user"] = user
        //this.Render()
    } else {
        this.redirect("/login")
    }
}

//登录状态验证
func (this *baseController) checkAuth() (*models.User, error) {
    if !beego.BConfig.WebConfig.Session.SessionOn {
        return nil, errors.New("系统Session功能未打开，无法正常登陆，请联系管理员！")
    }

    user := this.GetSession("user")
    if user != nil {
        // TOO 简单验证处理
        a := (user).(models.User)
        return &a, nil
    } else {
        return nil, nil
    }
}

//渲染模版
func (this *baseController) display(tpl ...string) {
    var tplname string
    ext := "." + beego.AppConfig.String("TemplateFileExt")
    switch len(tpl) {
    case 1: // 指定文件路径模式
        if strings.Index(tpl[0], ".") > 0 {
            tplname = tpl[0]
        } else {
            tplname = tpl[0] + ext
        }
    case 2: // 指定控制器+Action模式
        tplname = tpl[0] + "/" + tpl[1] + ext
    default: // 默认使用当前控制器+Action名称组合模式
        tplname = this.controllerName + "/" + this.actionName + ext
    }
    this.TplName = tplname
    this.Render()
}

// 重定向
func (this *baseController) redirect(url string) {
    this.Redirect(url, 302)
    this.StopRun()
}

// 是否POST提交
func (this *baseController) isPost() bool {
    return this.Ctx.Request.Method == "POST"
}

// 显示错误信息
func (this *baseController) showMsg(args ...string) {
    this.Data["message"] = args[0]
    redirect := this.Ctx.Request.Referer()
    if len(args) > 1 {
        redirect = args[1]
    }

    this.Data["redirect"] = redirect
    this.Data["pageTitle"] = "系统提示"
    this.display("Common/error_msg")
}

// 输出json
func (this *baseController) json(out interface{}) {
    this.Data["json"] = out
    this.ServeJSON()
    this.StopRun()
}

// 构造Ajax请求的json信息结构体
func (this *baseController) ajaxMsg(msg interface{}, msgno int) {
    out := make(map[string]interface{})
    out["status"] = msgno
    out["msg"] = msg

    this.json(out)
}

//获取用户IP地址
func (this *baseController) getClientIp() string {
    s := strings.Split(this.Ctx.Request.RemoteAddr, ":")
    return s[0]
}
