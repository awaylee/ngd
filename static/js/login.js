/**
 * Created by Administrator on 2017/3/27.
 */
//初始化
$(function(){
    var data = localStorage.getItem("user");
    if(data && data !=""){
        $("#login_name").val(JSON.parse(data).userID);
        $("#login_psw").val(JSON.parse(data).password);
    }

    var loginApp = new Vue({
        el: "#loginApp",
        created: function () {
            this.productCode();
            // TODO 发布时删除remove
            this.user.userID = "admin";
            this.user.password = "123456";
            this.user.code = this.checkCode;
        },
        data: {
            user: {
                userID: "",  //ID
                password: "",  //密码
                code: "",  //输入的验证码
                checked: false  //记住密码
            },
            tip: "", //错误提示
            checkCode: "",  //验证码
            checkCodeLength: 4,  //验证码长度
            random: new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K',
                'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z') //验证码随机数
        },
        methods: {
            login: function() {
                //检查用户名，密码，验证码
                if (this.user.userID.length == 0 || this.user.password.length == 0 || this.user.code == 0) {
                    this.tip = "用户名，密码，验证码不能为空！";
                    return;
                }
                if (this.user.code != this.checkCode) {
                    this.tip = "验证码错误！";
                    return;
                }

                //进行登录
                if(this.user.checked){
                    var str = '{"userID":"'+this.user.userID+'","password":"'+this.user.password+'"}';
                    localStorage.setItem("user",str);
                }
                var json = {
                    account: this.user.userID,
                    passwd: md5(this.user.password)
                };
                $.ajax({
                    type:"post",
                    ContentType:"application/json",
                    data:json,
                    success: function(data) {
                        if(data == "true") {
                            window.location.href = "/";
                        } else {
                            loginApp.tip = "用户名或密码错误！";
                            return;
                        }
                    },
                    error: function(data) {
                        loginApp.tip = "登录失败！";
                        return;
                    }
                });
            },
            productCode: function () {
                this.checkCode = "";
                for(var i = 0; i < this.checkCodeLength; i++) {  //循环操作
                    var index = Math.floor(Math.random() * 36);  //取得随机数的索引（0~35）
                    this.checkCode += this.random[index];  //根据索引取得随机数加到code上
                }
            }
        }
    });
});
