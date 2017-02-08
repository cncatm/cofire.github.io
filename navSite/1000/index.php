<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>视频1000</title>
  <link rel="stylesheet" href="">
  <style>
    *{
      margin:0px;
      padding: 0px;
      font-family: 微软雅黑；
    }
    div{
      height: auto;
      width: 100%;
      margin: 0 auto;
      border-top: 1px solid #000;
      border-left: 1px solid #000;
    }
    a{
      display: inline-block;
      width: 4.9%;
      text-align: center;
      text-decoration: none;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      color:#036c8a;
    }
    a:hover {
      color:#fff;
      background:#036c8a;
      text-decoration:none;
    }
    a:active{
      color: #ff00ff;
    }
    a:visited{
      color: #990099;
    } 
  </style>
</head>
<body>
  <div>
    <?php 
    $str1='http://120.52.73.43/adultvideo.science/media/videos/iphone/one_';
    $str2='.mp4';
    for($i=0;$i<2000;$i++){
      $j=$i+1;
      $str=$str1.$j.$str2;
      echo '<a href="',$str,'">',$j,'</a>';
    }

    ?>
  </div>
</body>
</html>