# NGD-Web

> 本项目采用Beego作为基础开发框架，前端采用Vue.JS框架

# 整体架构

# 模块说明

### TOPO图模块

- 控件创建（工具栏，属性编辑面板）
- 控件数据绑定

### 用户管理模块

- 用户登陆
- 账户信息管理

### 告警模块

- [ ] 告警列表
- [x] 告警查询

### 报表模块

- 

# 数据说明


# NGD前端开发计划

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title   NGD前端开发计划
    
    section 框架搭建
    服务器搭建               :done, freamwork_server, 2017-03-27, 1d
    前端WEB框架              :done, freamwork_font, after freamwork_server, 1d
    
    section nGOne接口对接【赵克勇】
    接口调用                 :active, topo_sidebar, after freamwork_font, 15d
    
    section TOPO图模块【骆治宇】
    边侧栏改造               :active, topo_sidebar, after freamwork_font, 10d
    工具栏改造               :active, topo_tool, after topo_sidebar, 7d
    TOPO逻辑处理             :active, topo_logic, after topo_tool, 15d
    实时告警处理             :active, topo_time_alarm, after topo_logic, 10d
    联线端点处理             :active, topo_line_p2p, after topo_time_alarm, 7d

    section 用户管理模块【陈诚】
    用户登陆                 :active, user_login, after freamwork_font, 5d
    忘记密码                 :active, user_pwd_forgot, after user_login, 5d
    修改密码                 :active, user_pwd_change, after user_pwd_forgot, 5d

    section 告警模块【陈诚】
    告警查询                 :active, alarm_query, after user_pwd_change, 5d
    
    section 报表模块
    报表查询                 :active, report_query, after freamwork_font, 5d
```
