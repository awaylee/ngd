package logic

var (
    UserService user
    TopoService topo
    AlarmService alarm
    SysConfigService sysConfig
)

func init() {
    UserService = user{}
    TopoService = topo{}
    AlarmService = alarm{}
    SysConfigService = sysConfig{}
}
