package models

type User struct {
    Id        int64  // ID标识符
    UserName  string // 用户名
    NickName  string // 昵称
    Password  string // 用户密码
    Email     string
    LastLogin int64
    LastIp    string
    Status    int
    Login     bool
}

func (u *User) TableName() string {
    return "user"
}
