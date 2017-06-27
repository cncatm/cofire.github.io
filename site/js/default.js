$(function(){ 
    $.getJSON("urlJson/site.json",function(data){ 
        var $jsontip = $("#jsonTip"); 
        var strHtml = "";//存储数据的变量 
        $jsontip.empty();//清空内容 
        $.each(data,function(infoIndex,info){ 
            strHtml += "<hr>" 
        }) 
        $jsontip.html(strHtml);//显示处理后的数据 
    }) 
})