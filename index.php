<html>

<head>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" media="screen">
<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
</head>
<body>
<div class="navbar1">
   <div class="navbar-inner1">
      <a href="#" class="brand" style="color:#fff"><h3>Blood + </h3></a>
   </div>
 </div>
 
 <div class="wrapper">
 	<div class="span3">
       <div class="well sidebar-nav sidebar-nav-fixed">
         <ul class="nav nav-list">
           <li class="nav-header">Sidebar</li>
           <li><a href="?val=barchart">barchart</a></li>
           <li><a href="?val=age-ab-negative">age-ab-negative</a></li>
           <li><a href="?val=age-ab-positive">age-ab-positive</a></li>
           
           <li><a href="?val=age-a-negative">age-a-negative</a></li>
           <li><a href="?val=age-a-positive">age-a-positive</a></li>
           <li><a href="?val=age-a-negative">age-a-negative</a></li>
           <li><a href="?val=age-b-positive">age-a-positive</a></li>
           <li><a href="?val=age-a-negative">age-a-negative</a></li>
           <li><a href="?val=age-o-positive">age-o-positive</a></li>
           <li><a href="?val=agetotal">agetotal</a></li>
           <li><a href="?val=grouptotal">grouptotal</a></li>
           <li><a href="?val=map">map</a></li>
         </ul>
       </div><!--/.well -->
     </div>
	<div>
		<div class="span9">
       <div class="hero-unit">
			when you do work on something you give it full until its blood donation
		</div>
	</div>
	<?php
		if(isset($_GET['val'])){
			$url = $_GET['val'].".html";
		}
		else {
			$url = "map.html";
		}

	?>
	<iframe src="map.html" border="0" width="700px" height="450px" frameBorder="0" class="ifr"></iframe>
	</div>
 </div>nav-header


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<script>

$('a').on('click', function(e) {
	// this = anchor that was clicked
	
	console.log($(this).attr("href"));
	var newUrl = $(this).attr("href")+".html";
	newUrl = newUrl.split('=');

	$("iframe").attr("src", newUrl[1]);
	console.log(newUrl);
	e.preventDefault();
});





</script>
</body>
</html>