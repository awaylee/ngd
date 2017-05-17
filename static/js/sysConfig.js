/**
 * Created by Administrator on 2017/4/25.
 */
$(function() {
    $(document).ready(function () {
        var sysConfigApp = new Vue({
            el: "#sysConfigModal",
            data: {
                sysConfig: {
                    ipAddress: "",  //Ip地址
                    port: ""  //端口号
                },
                tip: "", //错误提示,
                tipClass: "text-danger"  //错误提示样式

            },
            methods: {
                getSysConfig: function () {
                    $.get("getSysConfig", function (data) {
                        console.log(data);
                        var config = JSON.parse(data);
                        sysConfigApp.sysConfig.ipAddress = config.ipAddress;
                        sysConfigApp.sysConfig.port = config.port;
                    });
                },
                saveSysConfig: function () {
                    // TODO 等确定具体有哪些系统配置项后再具体做表单验证

                    var json = {
                        ipAddress: this.sysConfig.ipAddress,
                        port: this.sysConfig.port
                    };

                    $.ajax({
                        type:"post",
                        url: "saveSysConfig",
                        ContentType:"application/json",
                        data:json,
                        success: function(data) {
                            if(data == "true") {
                                sysConfigApp.tip = "修改成功！";
                                sysConfigApp.tipClass = "text-success";
                            } else {
                                sysConfigApp.tip = "修改失败！";
                                return;
                            }
                        },
                        error: function(data) {
                            sysConfigApp.tip = "修改失败！";
                            return;
                        }
                    });
                }
            },
            created: function () {
                this.getSysConfig();
            }
        });
    });
});
