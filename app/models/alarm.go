package models

type AllAlarm struct {
    Status Status           `json: status`
    Result Alarm_result     `json: result`
}

type Alarm_result struct {
    Typelist []Data_type    `json: typelist`
}

type Data_type struct {
    Name      string        `json: name`
    Data_type string        `json: data_type`
}

type Alarm struct {
    Id  int64
    Line_port_id    int64
    Type    int
    Domain  string
    Device  string
    Ip  string
    Timestamp   int64
    Times   int
    Message string
    Step    int
    Status int
}

func (a *Alarm) TableName() string {
    return "alarm"
}
