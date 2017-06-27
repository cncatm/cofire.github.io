// 注册界面JQUERY
// 验证手机号
$(document).ready(function(){
    // $("#phone").focus();
    $("#phone").blur(function(){
        var phone=$("#phone").val();
        var checkphone=/1[34578]\d{9}$/;
        // alert(checkphone.test(phone));
        if(phone){
            if(checkphone.test(phone)){
                $.ajax({
                    type:"POST",
                    url:"./public/check.php",
                    data:{type:"users_phone",users_phone:phone},
                    success:function(msg){
                    // alert("手机号："+phone+" "+msg);
                    // $("#phone").focus();
                    if(msg=='0'){
                        var txt="手机号已被注册！";
                        $("#phone").next().text(txt);
                        $("#phone").focus();
                    }else{
                        var txt="手机号可注册！";
                        $("#phone").next().text(txt);
                        $("#mail").focus();
                    }
                    
                }
            });
            }else{
                var txt="手机号格式错误！";
                $("#phone").next().text(txt);
            }   
        }else{
            var txt="手机号不能为空！";
            $("#phone").next().text(txt);
        }
    });
});
// 验证邮箱
$(document).ready(function(){
    // $("#mail").focus();
    $("#mail").blur(function(){
        var mail=$("#mail").val();
        var checkmail=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if(mail){
            if(checkmail.test(mail)){
                $.ajax({
                    type:"POST",
                    url:"./public/check.php",
                    data:{type:"users_mail",users_mail:mail},
                    success:function(msg){
                        // alert(msg);
                        if(msg=='0'){
                            var txt="该邮箱已被注册！";
                            $("#mail").next().text(txt);
                            $("#mail").focus();
                        }else{
                            var txt="该邮箱可注册！";
                            $("#mail").next().text(txt);
                            $("#password").focus();
                        }
                    }
                });
            }else{
                $("#mail").next().css("display","block");
            }
        }else{
            // alert("邮箱不能为空！");
            var txt="邮箱不能为空！";
            $("#mail").next().text(txt);
            // $("#mail").focus();
        }
    });
});
// 验证密码
$(document).ready(function(){
    $("#repassword").blur(function(){
        var password=$("#password").val();
        var repassword=$("#repassword").val();
        if(password!=repassword){
            // alert("两次密码不相等！");
            var txt="两次密码不一致！";
            $("#repassword").next().text(txt);
        }else{
            var txt="两次密码一致！";
            $("#repassword").next().text(txt);
        }
    });
});

// 公用 验证验证码
$(document).ready(function(){
    $("#vercode").blur(function(){
        var code=$("#vercode").val();
        // alert(code);
        if(code){
            $.ajax({
                type:"POST",
                url:"./public/check.php",
                data:{type:"code",code:code},
                success:function(msg){
                    if(msg=='0'){
                        var txt="验证码输入错误，请重新输入!";
                        $("#code").next().text(txt);
                    }else{
                        var txt="验证码正确！";
                        $("#code").next().text(txt);
                    }
                }
            });
        }else{
            var txt="验证码不能为空！";
            $("#code").next().text(txt);
        }
    });
});

// 登陆界面JQUERY
$(document).ready(function(){
    // alert('1');
    $("#loginpwd").blur(function(){
        var userid=$("#userid").val();
        var loginpwd=$("#loginpwd").val();
        // alert(userid+password);
        if( userid && loginpwd){
            // alert("1");
            $.ajax({
                type:"POST",
                url:"./public/check.php",
                data:{type:"login",userid:userid,password:loginpwd},
                success:function(msg){
                    if(msg=='0'){
                        var txt="账号密码验证成功!";
                        $("#loginpwd").next().text(txt);
                    }else if(msg=='2'){
                        var txt="账号或密码错误，请重新输入!";
                        $("#loginpwd").next().text(txt);
                    }else if(msg=='1'){
                        var txt="账号已封禁!";
                        $("#loginpwd").next().text(txt);
                    }
                }
            });
            
        }else{
            alert('账号密码不能为空！');
        }
    });
});

/*聊天消息检测*/
// $(document).ready(function(){
//  alert('1');
    // var userid=$.session.get('userid');
    // alert(userid);
    // if(userid){
    //  Interval(function(){
    //      $.ajax({
    //          type:"POST",
    //          url:"/public/check.php",
    //          data:{type:"message",userid:userid},
    //          success:function(msg){
    //              alert(msg);
    //          }
    //      });
    //  },100);
    // }});
$(document).ready(function(){
    // alert('1');
    if($('#hiddenuserid').length>0){
        var userid=$('#hiddenuserid').val();
        // alert(userid);
        setInterval(function(){
            $.ajax({
                type:"POST",
                url:"./public/check.php",
                data:{type:"message",userid:userid},
                success:function(msg){
                    if(msg!=''){
                        // alert(msg);
                        var href="http://localhost/graduation/chat/chat.php?fromuser="+userid+"&touser="+msg;
                        // alert(href);
                        $('#chat').css('color','red');
                        $('#chat').attr('href',href);
                    }
                }
            });
        },100);
    }
    
});
