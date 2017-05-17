package utils

import (
    "time"
    "fmt"
    "os"
    "errors"
    "io/ioutil"
    "regexp"
    "strings"
    "strconv"
)

/* 任务列表*/
var taskList []*Task

/**
 * DESCRIPTION : 任务
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
type Task struct {
    Name string
    Times int
    Duration int
    Callback Callback
    Ch chan int
}

/**
 * DESCRIPTION : 定时器
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
type MyTimer struct {
    Config map[string]interface{}
    Callback Callback
}

type Callback func()

/**
 * DESCRIPTION : 定义一个定时器
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func NewMyTimer() *MyTimer {
    return &MyTimer{}
}

/**
 * DESCRIPTION : 定义一个新任务
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func NewTask(v map[string]interface{}, callback Callback) *Task {
    c := make(chan int, 1)
    return &Task{
        Name: v["name"].(string),
        Times: v["times"].(int),
        Duration: v["duration"].(int),
        Callback: callback,
        Ch: c,
    }
}

/**
 * DESCRIPTION : 开启任务
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func (task *Task) Start(){
    timer := time.NewTicker(time.Duration(task.Duration) * time.Second)
    go func(c chan int) {
        if task.Times == 0 {
            forEnd1:
            for {
                select {
                case <- timer.C:
                    fmt.Println("loop execute task ---> : ", task.Name)
                    task.Callback()
                case <- c:
                    break forEnd1
                }
            }
        } else {
            forEnd2:
            for i := 0; i < task.Times; i++ {
                select {
                case <- timer.C:
                    fmt.Println("execute task ---> : ", task.Name, "   for --> ", i)
                    task.Callback()
                case <- c:
                    break forEnd2
                }
            }
            //执行完成后，需要销毁计时器
            for k,v := range taskList {
                if v == task {
                    if k == 0 {
                        taskList = taskList[1:]
                    } else if (k + 1) == len(taskList) {
                        taskList = taskList[:k]
                    } else {
                        taskList = append(taskList[k+1:], taskList[:k+2]...)
                    }
                    break;
                }
            }
        }
    }(task.Ch)
}

/**
 * DESCRIPTION : 关闭任务
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func (task *Task) Stop(){
    task.Ch <- 1
    fmt.Println("----task stoped---task name : ", task.Name)
}

/**
 * DESCRIPTION : 定时器开启
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func (t *MyTimer) Start() {
    myTask := NewTask(t.Config, t.Callback)
    myTask.Start()
    taskList = append(taskList, myTask)
    fmt.Println("------add task-------task name：", myTask.Name)
    fmt.Println("-----Timer Start-------")
}

/**
 * DESCRIPTION : 定时器关闭
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func (t *MyTimer) Stop() {
    for _, task := range taskList {
        task.Stop()
    }
    //清空task列表
    taskList = make([]*Task, 0)
    fmt.Println("------Timer Stoped------")
}

/**
 * DESCRIPTION : 定时器重启
 * AUTHOR : jack
 * DATE : 2017/5/8
 */
func (t *MyTimer) Restart() {
    t.Stop()
    t.Start()
    fmt.Println("-------Timer Restart-------")
}


func (t *MyTimer) LoadConfigFile(fileName string) error {
    file, err := os.Open(fileName)
    if nil != err {
        return errors.New("config file load failed:" + fileName)
    }
    defer file.Close()
    config := make(map[string]interface{}, 0)
    content, ok := ioutil.ReadAll(file)
    if ok != nil {
        return errors.New("read config file error")
    }
    str := string(content)
    reg := regexp.MustCompile("[\r\n]+")
    array := reg.Split(str, -1)
    for _, val := range array {
        //#;号开头的，作为注释
        if strings.HasPrefix(val, "#") || strings.HasPrefix(val, ";") {
            continue
        }
        if len(val) > 0 {
            kv := strings.Split(val, "=")
            key := kv[0]
            if strings.EqualFold(key, "name") {
                config["name"] = kv[1]
            } else if strings.EqualFold(key, "duration") {
                config["duration"], _ = strconv.Atoi(kv[1])
            } else if strings.EqualFold(key, "times") {
                config["times"], _ = strconv.Atoi(kv[1])
            }
        }
    }
    t.Config = config
    return nil
}
