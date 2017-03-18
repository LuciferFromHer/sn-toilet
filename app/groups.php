<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Title</title>
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
<section class="container">
    <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 block-groups block">
            <div class="block-groups-header block-head">
                <span>Кабинки</span>
            </div>
            <div class="block-groups-menu block-menu">
                <ul>
                    <li>Подписки</li>
                    <li>Мои кабинки</li>
                    <li>Приглашения в кабинки</li>
                </ul>
                <img src="img/settings.png">
            </div>
            <div class="block-groups-messager block-content">
                <div class="block-name-list block-groups-msg">
                    <img class="block-face" src="../img">
                    <div class="block-info">
                        <span class="block-groups-name block-name">имя группы</span>
                        <span class="block-groups-info-count"> количество участников</span>
                    </div>
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-4 col-sm-4 block-empty">

        </div>
    </div>
</section>
<?php include("footer.php"); ?>
	<script src="js/scripts.min.js" defer></script>
</body>
</html>