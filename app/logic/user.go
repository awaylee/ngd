package logic

import (
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
    "github.com/astaxie/beego/orm"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "fmt"
)

type user struct {
}

func (this *user) Login(account, pwd string) bool {
    //从数据库中取出user进行比较
    o := orm.NewOrm()
    user := models.User{
        UserName: account,
        Password: utils.Encoding_md5(pwd),
    }
    err := o.Read(&user, "userName", "Password")
    if err == orm.ErrNoRows {
        fmt.Println("user不存在")
        return false
    }
    return true
}

func (this *user) ChangePwd(account, oldPwd, newPwd string) bool {
    //进行密码修改
    o := orm.NewOrm()
    user := models.User{
        UserName: account,
        Password: utils.Encoding_md5(oldPwd),
    }
    err := o.Read(&user, "userName", "Password")
    if err == orm.ErrNoRows {
        fmt.Println("原始密码错误")
        return false
    }
    user.Password = utils.Encoding_md5(newPwd)
    fmt.Println(user)
    if num, err := o.Update(&user, "Password"); err == nil {
        fmt.Println(num)
        return true
    }
    return false
}

func (this *user) Logout(user string) bool {
    return true
}
