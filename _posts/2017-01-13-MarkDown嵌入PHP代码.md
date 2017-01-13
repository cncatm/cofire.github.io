---
layout:	post
title:	"MarkDown嵌入PHP代码"
date:	2017-1-13 13:35:33
categories:	[php]
---

<div id="content">
<!-- 读取web.txt文件 -->
<?php
$ph='web.txt';
if(file_exists($ph)){
$fp=fopen($ph,'r');
}else{
}
$row=fgetcsv($fp);
$temp=$row[0];
echo '<h2>'.$row[0].'</h2>';
echo '<ul class="clearfix">';
while($row){
if($row[0]==$temp){
echo '<li><a href="',$row[1],'" target="_blank">'.$row[2].'</a></li>';
}else{
echo '</ul><div id="clea"></div><h2>'.$row[0].'</h2><ul class="clearfix">';
$temp=$row[0];
echo '<li><a href="',$row[1],'" target="_blank">'.$row[2].'</a></li>';
}
$row=fgetcsv($fp);

}
echo '</ul>';
fclose($fp);
?>

</div>

