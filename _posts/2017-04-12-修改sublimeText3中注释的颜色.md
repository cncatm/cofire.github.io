---
layout:	post
title:	" 修改sublime3代码注释颜色"
date:	2017-4-12 21:09:32
categories:	[others]
---

1、首先知道你采用的是什么颜色主题

在Preferences => color scheme查看，假设是Monokai

2、查找该主题的脚本文件

Preferences => Browse Packages ，打开Color Scheme - Default文件夹，找到Monokai.tmTheme
3、修改自定义样式

theme文件是xml格式，可以根据提示猜测语句的作用

例如注释，查找comment，找到如下一段：

    
    <dict>
    			<key>name</key>
    			<string>Comment</string>
    			<key>scope</key>
    			<string>comment</string>
    			<key>settings</key>
    			<dict>
    				<key>foreground</key>
    				<string>#10AD38</string>
    			</dict>
    </dict>
    

将foreground对应的#10AD38修改为你需要的颜色就可以了，例如#10AD38

其他需要自定义的慢慢查看即可，例如数字、字符串、函数、变量样式等等

你可以在原有主题的基础上作修改，或者复制某个主题文件修改后作为自己新定义的主题，在preferences => Color Scheme菜单下即可启用

【1】ctrl+shift+p 打开命令面板，搜索"install"

【2】键入"pakgageResourceViewer"，并安装之

【3】安装完成后重新打开命令面板，搜索"pakgageResourceViewer:open file"

【4】搜索"Monokai.tmTheme",并打开这个XML文件

【5】快捷键ctrl+f打开搜索，键入“comment”.快捷键ctrl+/注释掉<string>#75715E</string>,添加<string>#57A64A</string>。ctrl+s保存后就会发现注释变成了显眼的绿色.
