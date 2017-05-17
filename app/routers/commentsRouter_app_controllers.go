package routers

import (
	"github.com/astaxie/beego"
)

func init() {

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"],
		beego.ControllerComments{
			Method: "Get_Index",
			Router: `/alarm`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"],
		beego.ControllerComments{
			Method: "Get_AllAlarms",
			Router: `/alarm/getall`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"],
		beego.ControllerComments{
			Method: "Set_Alarm",
			Router: `/alarm/set`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"],
		beego.ControllerComments{
			Method: "Get_SetAlarms",
			Router: `/alarm/getset`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:AlarmController"],
		beego.ControllerComments{
			Method: "Get_AlarmsByIp",
			Router: `/alarm/{ip}/list`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:HomeController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:HomeController"],
		beego.ControllerComments{
			Method: "Get_Index",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:HomeController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:HomeController"],
		beego.ControllerComments{
			Method: "Get_Demo",
			Router: `/demo`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:SysConfigController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:SysConfigController"],
		beego.ControllerComments{
			Method: "GetSysConfig",
			Router: `/getSysConfig`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:SysConfigController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:SysConfigController"],
		beego.ControllerComments{
			Method: "SaveSysConfig",
			Router: `/saveSysConfig`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "AddNode",
			Router: `/api/topo/node/add`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "AddEdge",
			Router: `/api/topo/edge/add`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "GetTopoInfo",
			Router: `/api/topo/all`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "ModifyNodeName",
			Router: `/api/topo/node/modify`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "DeleteTopoByIds",
			Router: `/api/topo/delete`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "AddMultipleEdge",
			Router: `/api/topo/edge/multiple/add`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "GetEdgeInfo",
			Router: `/api/topo/edge/info`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "ModifyEdge",
			Router: `/api/topo/edge/modify`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:TopoController"],
		beego.ControllerComments{
			Method: "DeleteLinePorts",
			Router: `/api/topo/edge/port/delete`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "Login",
			Router: `/login`,
			AllowHTTPMethods: []string{"*"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "Get_logout",
			Router: `/:id/logout`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "Register",
			Router: `/:id/register`,
			AllowHTTPMethods: []string{"*"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "Forgot",
			Router: `/:id/forgot`,
			AllowHTTPMethods: []string{"*"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "Reset",
			Router: `/:id/reset`,
			AllowHTTPMethods: []string{"*"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:UserController"],
		beego.ControllerComments{
			Method: "ChangePwd",
			Router: `/changePwd`,
			AllowHTTPMethods: []string{"post"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:WebSocketController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:WebSocketController"],
		beego.ControllerComments{
			Method: "GetIndex",
			Router: `/websocket`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

	beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:WebSocketController"] = append(beego.GlobalControllerRouter["git.oschina.net/nutsbeacon/NGD-Web/app/controllers:WebSocketController"],
		beego.ControllerComments{
			Method: "GetJoin",
			Router: `/websocket/join`,
			AllowHTTPMethods: []string{"get"},
			Params: nil})

}
