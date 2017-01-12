---
layout: post
title:  "Jekyll-Blog模板的使用教程"
date:   2017-01-11 12:07:14 +1000
categories: [website]
---
1.下载jekyll博客模板（包含[jekyll教程](https://raw.githubusercontent.com/cofire/cofire.github.io/master/Jekyll-%E6%95%99%E7%A8%8B-v1.0.pdf "jekyll教程")）：
```
https://github.com/cofire/cofire.github.io
```
或[模版下载](https://github.com/cofire/cofire.github.io "模版下载")。

2.注册github：```https://github.com/```或[GIT官网](https://github.com/ "Git官网")。

3.新建profile，命名为nickName.github.io（nickName为你的git名称）。

4.先将你的profile download到本地（建议D盘），然后将下载的模版解压到此文件夹中。例如：```D:\PHPnow\htdocs\cofire.github.io```

![模版目录](https://raw.githubusercontent.com/cofire/cofire.github.io/master/img/website/1/0.png "模版目录")

5.修改blog的作者名称和头像、网站的LOGO：打开```~\cofire.github.io\static\img```文件夹，用你自己的图片替换```avatar.jpg```和```favicon.ico```，图片名称不用改。打开```~\cofire.github.io\index.html```将第六行```<h1>NoFly</h1>```改为```<h1>NickName</h1>```；打开```~\cofire.github.io\_config.yml```将第一行和第六行```title: NoFly```和```author: NoFly```修改为```title: nickName```和```author: nickName```。

6.打开```~\cofire.github.io\_config.yml```将所有cofire替换成nickName(你的git昵称)。

7.打开```~\cofire.github.io\_config.yml```将43行改为```url: "http://nofly.cc"```。

8.将网页右下角的图标修改为自己的git图标。打开```\cofire.github.io\_layouts\_default.html```,将下列代码中的```cofire```修改为你的git账号名称。

```html
<div class="btn-github" style="float:right;">
    <iframe src="https://ghbtns.com/github-btn.html?user=cofire&repo=cofire.github.io&type=star&count=true" frameborder="0" scrolling="0" width="85" height="20px"></iframe>                    
    <iframe src="https://ghbtns.com/github-btn.html?user=cofire&repo=cofire.github.io&type=fork&count=true" frameborder="0" scrolling="0" width="85" height="20px"></iframe>
</div>
```
9.将打开```\cofire.github.io\_layouts\_default.html```第125行代码如下，将```placeholder="搜索"```自定义修改。

```html
<div class="search" id="js-search">
     <input type="text" placeholder="搜索" class="search__input form-control" id="js-search__input">
     <ul class="search__results" id="js-search__results"></ul>
</div>
```

10.下载MarkDownPad2，安装。然后新建md文件保存到```~\cofire.github.io\_posts```路径下，文件名保存为，例如：```2017-01-10-BLOG模版的使用教程.md```

11.将修改上传到gitHub上，方法参见```http://nofly.cc/git/2017/01/10/Git%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%96%B9%E6%B3%95.html```,或点击[Git使用的基本方法](http://nofly.cc/git/2017/01/10/Git%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%96%B9%E6%B3%95.html "git使用的基本方法")。

12.访问你的博客，地址```https://cofire.github.io/```，将cofire改成你自己的昵称。

13.若觉得二级域名不好看，你可以自己申请一个域名，然后解析上去。详情点击[GithubPages绑定域名](http://nofly.cc/git/2017/01/10/GithubPages%E7%BB%91%E5%AE%9A%E5%9F%9F%E5%90%8D.html "绑定域名")。
14.一个博客网站就完成了。成品如下：

![网站成品](https://raw.githubusercontent.com/cofire/cofire.github.io/master/img/website/1/1.png "网站成品")
