<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>网址导航</title>
	<meta name="keyWords" content="导航">
	<meta name="description" content="导航">
	<meta  name="viewport" content="width=device-width,initial-scal=1"/>
	<!-- 导入网页图标和网页样式 -->
	<link rel="shortcut icon" href="./site_files/favicon.ico">
	<link rel="stylesheet" href="./site_files/style_default.css">
</head>
<body>
	<div id="container">
		<!-- 头部 -->
		<div id="header">
			<h1 id="logo"><a href="javascript:location.reload();" target="_self"><img src="./site_files/logo.png" alt="死神"></a></h1>
			<h1 id="warning"><p>部分网址请谨慎浏览！</p></h1>
		</div>

		<!-- 网址导航部分 -->
		<div id="content">

			<!-- 读取web.txt文件 -->
			<?php
			$ph='./site_files/web.txt';
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

		<!-- 清除浮动 -->
		<div id='clea'></div>
		<div id="blank"></div>
		<!-- footer部分 -->
		<div id="footer">
			<p>CopyRight<span style="font-family:Arial,Helvetica,sans-serif;">&#169;</span>2016-2018</p>
			<p>站长邮箱：yli_666@163.com</p>
			<p>All Rights Reserved.</p>
		</div>
	</div>
</body>
</html>