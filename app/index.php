<!DOCTYPE html>
<html>

<head>
	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
	<meta charset="utf-8">

	<title>Главная</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<meta property="og:image" content="path/to/image.jpg">
	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
	<link rel="stylesheet" href="css/main.min.css">

	<!-- Chrome, Firefox OS and Opera -->
	<meta name="theme-color" content="#000">
	<!-- Windows Phone -->
	<meta name="msapplication-navbutton-color" content="#000">
	<!-- iOS Safari -->
	<meta name="apple-mobile-web-app-status-bar-style" content="#000">

</head>

<body>
	<?php 
		include("header.php");
	?>
	<div class="messages-block">
		<div class="container">
			<div class="row">
				<div class="friends-block">
					<div class="col-lg-5 col-md-5">
						<div class="friends">
							<div class="f-head">
								<p>Друзья</p>
								<div class="close"></div>
								<input type="text" class="find-inpt" id="message-search">
								<div class="find"></div>
							</div>
							<ul class="f-list">
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
								<li><a href="#"><img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div></a><span class="favor"></span></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-7 col-md-7 col-sm-12">
					<div class="messages">
						<div class="f-head">
							<p>Сообщения</p>
							<div class="close"></div>
							<input type="text" class="find-inpt" id="message-search">
							<div class="find"></div>
							<div class="plus"></div>
						</div>
						<ul class="m-list">
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<!-- Пример ниже для диалога в кабинке -->
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="group-name">Пролетариат</div><div class="g-members">312 участников</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind online"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
							<li><a href="#">
							<img src="img/211794845.jpg" alt=""><div class="ind offline"></div><div class="use-name">Себастьян Гончаров</div><span class="time">23:30</span><span class="ms-del"></span>
							<div class="last-ms">
								<img src="img/211794845.jpg" alt="">
								<div class="message">Привет петя</div>
							</div>
							</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php include("footer.php"); ?>
	<script src="js/scripts.min.js" defer></script>
</body>
</html>
