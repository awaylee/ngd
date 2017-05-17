/**
 * Created by Administrator on 2017/3/27.
 */
$(function() {
    $(document).ready(function () {
        var changePwdApp = new Vue({
            el: "#changePwdModal",
            data: {
                user: {
                    oldPwd: "",  //旧密码
                    newPwd: "",  //新密码
                    confirmPwd: ""  //确认密码
                },
                tip: "", //错误提示,
                tipClass: "text-danger"  //错误提示样式
            },
            methods: {
                changePwd: function() {
                    //首先验证一下输入不能为空
                    if (this.user.oldPwd.length == 0 || this.user.newPwd.length == 0 || this.user.confirmPwd.length == 0) {
                        this.tip = "原始密码，新密码和确认密码不能为空！";
                        return;
                    }
                    if (this.user.newPwd != this.user.confirmPwd) {
                        this.tip = "新密码与确认密码不一致！";
                        return;
                    }
                    var json = {
                        account: $('#userName').text(),
                        oldPwd: md5(this.user.oldPwd),
                        newPwd: md5(this.user.newPwd)
                    };
                    $.ajax({
                        type:"post",
                        url: "changePwd",
                        ContentType:"application/json",
                        data:json,
                        success: function(data) {
                            if(data == "true") {
                                changePwdApp.tip = "修改成功！";
                                changePwdApp.tipClass = "text-success";
                                changePwdApp.user.oldPwd = "";
                                changePwdApp.user.newPwd = "";
                                changePwdApp.user.confirmPwd = "";
                            } else {
                                changePwdApp.tip = "原始密码错误！";
                                return;
                            }
                        },
                        error: function(data) {
                            changePwdApp.tip = "修改失败！";
                            return;
                        }
                    });
                }
            }
        });
    });
});

