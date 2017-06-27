$(function(){ 
    $.getJSON("urlJson/site.json",function(data){ 
        var $jsontip = $("#jsonTip"); 
        var strHtml = "123";//存储数据的变量 
        $jsontip.empty();//清空内容 
        $.each(data,function(infoIndex,info){ 
            strHtml += "标题："+info["titile"]+"<br>"; 
            strHtml += "网址："+info["url"]+"<br>"; 
            strHtml += "<hr>" 
        }) 
        $jsontip.html(strHtml);//显示处理后的数据 
    }) 
})