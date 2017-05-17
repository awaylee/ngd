package utils

import (
    "database/sql"
    _ "github.com/mattn/go-sqlite3"
    _ "github.com/go-sql-driver/mysql"
    "github.com/astaxie/beego"
    "github.com/astaxie/beego/orm"
    "git.oschina.net/nutsbeacon/NGD-Web/app/models"
    "time"
)

/**
 * 初始化创建SQLite数据库
 */
func InitSQLite(fileName string) *sql.DB {
    db, err := sql.Open("sqlite3", fileName)
    CheckErr(err)
    //stmt, err := db.Prepare("INSERT INTO userinfo(username, departname, created) values(?,?,?)")
    //CheckErr(err)
    //res, err := stmt.Exec("astaxie", "研发部门", "2012-12-09")
    //CheckErr(err)
    //id, err := res.LastInsertId()
    //CheckErr(err)
    //fmt.Println(id)
    return db
}

func CreateDB() {

    orm.RegisterModel(
        new(models.User),
        new(models.Node),
        new(models.Line),
        new(models.LinePort),
        new(models.Alarm))

    driverName := beego.AppConfig.String("db::DriverName")
    if (driverName == "sqlite3") {
        orm.RegisterDriver(driverName, orm.DRSqlite)
    } else if (driverName == "mysql") {
        orm.RegisterDriver(driverName, orm.DRMySQL)
    }

    orm.RegisterDataBase("default", driverName, beego.AppConfig.String("db::DataSource"))
    orm.RunSyncdb("default", false, true)
    isDev := beego.BConfig.RunMode == beego.DEV
    err := orm.RunSyncdb("default", isDev, true)
    if err != nil {
        beego.Debug("[util.db.init]:", err.Error())
    }
    orm.RunCommand()
    if isDev {
        insertData()
    }
}

func insertData() {
    o := orm.NewOrm()
    //	o.Raw("insert into user('name') values()").Exec()

    user := new(models.User)
    user.UserName = "admin"
    user.NickName = "管理员"
    user.Password = Encoding_md5(Encoding_md5("123456"))

    id, err := o.Insert(user)
    if err != nil {
        beego.Debug("[utils.db.insertData]: insert user error:", err.Error())
    } else {
        beego.Debug("[utils.db.insertData]: user id=", id)
    }

    alarm := new(models.Alarm)
    alarm.Type = 1
    alarm.Domain = "成都-网络设备"
    alarm.Device = "CC"
    alarm.Ip = "192.168.1.12"
    alarm.Timestamp = time.Now().Unix()
    alarm.Times = 100
    alarm.Message = "停机或线路不通"
    alarm.Step = 10
    alarm.Status = 1

    id2, err2 := o.Insert(alarm)
    if err != nil {
        beego.Debug("[utils.db.insertData]: insert alarm error:", err2.Error())
    } else {
        beego.Debug("[utils.db.insertData]: alarm id=", id2)
    }
}
