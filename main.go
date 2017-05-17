package main

import (
    _ "git.oschina.net/nutsbeacon/NGD-Web/app/routers"
    "git.oschina.net/nutsbeacon/NGD-Web/app/utils"
    "github.com/astaxie/beego"
    "path/filepath"
    "fmt"
    "strings"
    "html/template"
    "github.com/Joker/jade"
    "github.com/yosssi/ace"
    //"io/ioutil"
    "github.com/astaxie/beego/orm"
)

func init() {
    //utils.InitSQLite("./ngd.db")
    utils.CreateDB()
}

func main() {
    orm.Debug = true
    addAceTemplate()
    addJadeTemplate()

    //fmt.Println(beego.AppConfig.String("service.top::addTopoUrl"))

    beego.Run()
}

func addAceTemplate() {
    beego.AddTemplateEngine("ace", func(root, path string, funcs template.FuncMap) (*template.Template, error) {
        aceOptions := &ace.Options{DynamicReload: true, FuncMap: funcs}
        aceBasePath := filepath.Join(root, "base")
        aceInnerPath := filepath.Join(root, strings.TrimSuffix(path, ".ace"))

        tpl, err := ace.Load(aceBasePath, aceInnerPath, aceOptions)

        if err != nil {
            return nil, fmt.Errorf("error loading ace template: %v", err)
        }
        return tpl, nil
    })
}

func addJadeTemplate() {
    beego.AddTemplateEngine("jade", func(root, path string, funcs template.FuncMap) (*template.Template, error) {
        // 加载Layout文件
        layout, err := jade.ParseFile(filepath.Join(root, "Home/layout.jade"))
        if err != nil {
            return nil, fmt.Errorf("error loading jade template: %v", err)
        }
        fmt.Println("Layout文件内容：\n", layout)

        // 加载Jade文件
        content, err := jade.ParseFile(filepath.Join(root, path))
        if err != nil {
            return nil, fmt.Errorf("error loading jade template: %v", err)
        }
        fmt.Println(path+"文件内容：\n", content)

        // 模板解析Layout
        tmp, err := template.New("Layout").Parse(layout)
        if err != nil {
            return nil, fmt.Errorf("error loading jade template: %v", err)
        }
        // 模板解析Content
        fmt.Println("解析前的html:\n", content)
        tmp, err = tmp.New(path).Parse(content)
        if err != nil {
            return nil, fmt.Errorf("error loading jade template: %v", err)
        }
        fmt.Println("解析后的html:\n", tmp)
        return tmp, err
    })
}

//func init() {
//    b, err := ioutil.ReadFile("gulpfile.js")
//    if err != nil {
//        panic(err)
//    }
//    fmt.Println(string(b))
//}
