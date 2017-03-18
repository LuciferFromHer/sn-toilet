<!doctype html>
<html lang='en'>
<head>
    <meta charset='utf-8'>

    <title>Title</title>
    <meta name='description' content=''>

    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>

    <meta property='og:image' content='path/to/image.jpg'>
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
        <div class="block-friends block col-lg-8 col-md-8">
            <div class="block-friends-header block-head">
                <span>Друзья</span>
            </div>
            <div class="block-friends-menu block-menu">
                <ul>
                    <li>Мои друзья</li>
                    <li>Заявки в друзья</li>
                    <li>Возможные друзья</li>
                    <li>Списки друзей</li>
                    <li>Черный список</li>
                </ul>
                <img src="img/settings.png">
            </div>
            <div class="block-groups-messager block-content">
                <div class="block-name-list">
                    <img class="block-face" >
                    <div class="block-info">
                        <span class="block-friends-name block-name">имя lehuf</span>
                    </div>
                    <img class="block-star">
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="block-name-list">
                    <img class="block-face" >
                    <div class="block-info">
                        <span class="block-friends-name block-name">имя lehuf</span>
                    </div>
                    <img class="block-star">
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-4 col-lg-4 block-friends-search block">
            <div class="block-friends-search-header block-head">
                <span>Расширенный поиск</span>
            </div>
            <div class="block-friends-find">
                <div class="block-friends-age friends-search">
                    <span class="block-friends-head-age head-search-title">Возраст</span>
                    <div class="div-set input-age-from" id="input-age-from"><span id="from">от</span></div>
                    <div class="div-set input-age-to" id="input-age-to"><span id="age">до</span></div>
                    <div class="div-set input-age-list from-age block-list-search" id="from-age">
                        <ul id="ul-main-list">
                            <li class='input-list' id='li-age-from-null'>от</li>
                            <li class='input-list' id='li-age-from-14'>от 14</li>
                            <li class='input-list' id='li-age-from-15'>от 15</li>
                            <li class='input-list' id='li-age-from-16'>от 16</li>
                            <li class='input-list' id='li-age-from-17'>от 17</li>
                            <li class='input-list' id='li-age-from-18'>от 18</li>
                            <li class='input-list' id='li-age-from-19'>от 19</li>
                            <li class='input-list' id='li-age-from-20'>от 20</li>
                            <li class='input-list' id='li-age-from-21'>от 21</li>
                            <li class='input-list' id='li-age-from-22'>от 22</li>
                            <li class='input-list' id='li-age-from-23'>от 23</li>
                            <li class='input-list' id='li-age-from-24'>от 24</li>
                            <li class='input-list' id='li-age-from-25'>от 25</li>
                            <li class='input-list' id='li-age-from-26'>от 26</li>
                            <li class='input-list' id='li-age-from-27'>от 27</li>
                            <li class='input-list' id='li-age-from-28'>от 28</li>
                            <li class='input-list' id='li-age-from-29'>от 29</li>
                            <li class='input-list' id='li-age-from-30'>от 30</li>
                            <li class='input-list' id='li-age-from-31'>от 31</li>
                            <li class='input-list' id='li-age-from-32'>от 32</li>
                            <li class='input-list' id='li-age-from-33'>от 33</li>
                            <li class='input-list' id='li-age-from-34'>от 34</li>
                            <li class='input-list' id='li-age-from-35'>от 35</li>
                            <li class='input-list' id='li-age-from-36'>от 36</li>
                            <li class='input-list' id='li-age-from-37'>от 37</li>
                            <li class='input-list' id='li-age-from-38'>от 38</li>
                            <li class='input-list' id='li-age-from-39'>от 39</li>
                            <li class='input-list' id='li-age-from-40'>от 40</li>
                            <li class='input-list' id='li-age-from-41'>от 41</li>
                            <li class='input-list' id='li-age-from-42'>от 42</li>
                            <li class='input-list' id='li-age-from-43'>от 43</li>
                            <li class='input-list' id='li-age-from-44'>от 44</li>
                            <li class='input-list' id='li-age-from-45'>от 45</li>
                            <li class='input-list' id='li-age-from-46'>от 46</li>
                            <li class='input-list' id='li-age-from-47'>от 47</li>
                            <li class='input-list' id='li-age-from-48'>от 48</li>
                            <li class='input-list' id='li-age-from-49'>от 49</li>
                            <li class='input-list' id='li-age-from-50'>от 50</li>
                            <li class='input-list' id='li-age-from-51'>от 51</li>
                            <li class='input-list' id='li-age-from-52'>от 52</li>
                            <li class='input-list' id='li-age-from-53'>от 53</li>
                            <li class='input-list' id='li-age-from-54'>от 54</li>
                            <li class='input-list' id='li-age-from-55'>от 55</li>
                            <li class='input-list' id='li-age-from-56'>от 56</li>
                            <li class='input-list' id='li-age-from-57'>от 57</li>
                            <li class='input-list' id='li-age-from-58'>от 58</li>
                            <li class='input-list' id='li-age-from-59'>от 59</li>
                            <li class='input-list' id='li-age-from-60'>от 60</li>
                            <li class='input-list' id='li-age-from-61'>от 61</li>
                            <li class='input-list' id='li-age-from-62'>от 62</li>
                            <li class='input-list' id='li-age-from-63'>от 63</li>
                            <li class='input-list' id='li-age-from-64'>от 64</li>
                            <li class='input-list' id='li-age-from-65'>от 65</li>
                            <li class='input-list' id='li-age-from-66'>от 66</li>
                            <li class='input-list' id='li-age-from-67'>от 67</li>
                            <li class='input-list' id='li-age-from-68'>от 68</li>
                            <li class='input-list' id='li-age-from-69'>от 69</li>
                            <li class='input-list' id='li-age-from-70'>от 70</li>
                            <li class='input-list' id='li-age-from-71'>от 71</li>
                            <li class='input-list' id='li-age-from-72'>от 72</li>
                            <li class='input-list' id='li-age-from-73'>от 73</li>
                            <li class='input-list' id='li-age-from-74'>от 74</li>
                            <li class='input-list' id='li-age-from-75'>от 75</li>
                            <li class='input-list' id='li-age-from-76'>от 76</li>
                            <li class='input-list' id='li-age-from-77'>от 77</li>
                            <li class='input-list' id='li-age-from-78'>от 78</li>
                            <li class='input-list' id='li-age-from-79'>от 79</li>
                            <li class='input-list' id='li-age-from-80'>от 80</li>
                        </ul>
                    </div>
                    <div class="div-set input-age-list to-age block-list-search" id="to-age">
                        <ul>
                            <li class='input-list' id='li-age-to-null'>до</li>
                            <li class='input-list' id='li-age-to-14'>до 14</li>
                            <li class='input-list' id='li-age-to-15'>до 15</li>
                            <li class='input-list' id='li-age-to-16'>до 16</li>
                            <li class='input-list' id='li-age-to-17'>до 17</li>
                            <li class='input-list' id='li-age-to-18'>до 18</li>
                            <li class='input-list' id='li-age-to-19'>до 19</li>
                            <li class='input-list' id='li-age-to-20'>до 20</li>
                            <li class='input-list' id='li-age-to-21'>до 21</li>
                            <li class='input-list' id='li-age-to-22'>до 22</li>
                            <li class='input-list' id='li-age-to-23'>до 23</li>
                            <li class='input-list' id='li-age-to-24'>до 24</li>
                            <li class='input-list' id='li-age-to-25'>до 25</li>
                            <li class='input-list' id='li-age-to-26'>до 26</li>
                            <li class='input-list' id='li-age-to-27'>до 27</li>
                            <li class='input-list' id='li-age-to-28'>до 28</li>
                            <li class='input-list' id='li-age-to-29'>до 29</li>
                            <li class='input-list' id='li-age-to-30'>до 30</li>
                            <li class='input-list' id='li-age-to-31'>до 31</li>
                            <li class='input-list' id='li-age-to-32'>до 32</li>
                            <li class='input-list' id='li-age-to-33'>до 33</li>
                            <li class='input-list' id='li-age-to-34'>до 34</li>
                            <li class='input-list' id='li-age-to-35'>до 35</li>
                            <li class='input-list' id='li-age-to-36'>до 36</li>
                            <li class='input-list' id='li-age-to-37'>до 37</li>
                            <li class='input-list' id='li-age-to-38'>до 38</li>
                            <li class='input-list' id='li-age-to-39'>до 39</li>
                            <li class='input-list' id='li-age-to-40'>до 40</li>
                            <li class='input-list' id='li-age-to-41'>до 41</li>
                            <li class='input-list' id='li-age-to-42'>до 42</li>
                            <li class='input-list' id='li-age-to-43'>до 43</li>
                            <li class='input-list' id='li-age-to-44'>до 44</li>
                            <li class='input-list' id='li-age-to-45'>до 45</li>
                            <li class='input-list' id='li-age-to-46'>до 46</li>
                            <li class='input-list' id='li-age-to-47'>до 47</li>
                            <li class='input-list' id='li-age-to-48'>до 48</li>
                            <li class='input-list' id='li-age-to-49'>до 49</li>
                            <li class='input-list' id='li-age-to-50'>до 50</li>
                            <li class='input-list' id='li-age-to-51'>до 51</li>
                            <li class='input-list' id='li-age-to-52'>до 52</li>
                            <li class='input-list' id='li-age-to-53'>до 53</li>
                            <li class='input-list' id='li-age-to-54'>до 54</li>
                            <li class='input-list' id='li-age-to-55'>до 55</li>
                            <li class='input-list' id='li-age-to-56'>до 56</li>
                            <li class='input-list' id='li-age-to-57'>до 57</li>
                            <li class='input-list' id='li-age-to-58'>до 58</li>
                            <li class='input-list' id='li-age-to-59'>до 59</li>
                            <li class='input-list' id='li-age-to-60'>до 60</li>
                            <li class='input-list' id='li-age-to-61'>до 61</li>
                            <li class='input-list' id='li-age-to-62'>до 62</li>
                            <li class='input-list' id='li-age-to-63'>до 63</li>
                            <li class='input-list' id='li-age-to-64'>до 64</li>
                            <li class='input-list' id='li-age-to-65'>до 65</li>
                            <li class='input-list' id='li-age-to-66'>до 66</li>
                            <li class='input-list' id='li-age-to-67'>до 67</li>
                            <li class='input-list' id='li-age-to-68'>до 68</li>
                            <li class='input-list' id='li-age-to-69'>до 69</li>
                            <li class='input-list' id='li-age-to-70'>до 70</li>
                            <li class='input-list' id='li-age-to-71'>до 71</li>
                            <li class='input-list' id='li-age-to-72'>до 72</li>
                            <li class='input-list' id='li-age-to-73'>до 73</li>
                            <li class='input-list' id='li-age-to-74'>до 74</li>
                            <li class='input-list' id='li-age-to-75'>до 75</li>
                            <li class='input-list' id='li-age-to-76'>до 76</li>
                            <li class='input-list' id='li-age-to-77'>до 77</li>
                            <li class='input-list' id='li-age-to-78'>до 78</li>
                            <li class='input-list' id='li-age-to-79'>до 79</li>
                            <li class='input-list' id='li-age-to-80'>до 80</li>
                        </ul>
                    </div>
                </div>
                <div class="block-friends-sex friends-search">
                    <span class="head-search-title">Пол</span>
                    <div class="input-sex div-set" id="input-sex"><span id="input-sex-text">Выберите пол</span></div>
                    <div class="list-sex block-list-search" id="list-sex">
                        <ul>
                            <li class="input-sex" id="null">любой</li>
                            <li class="input-sex" id="male">мужской</li>
                            <li class="input-sex" id="female">женский</li>
                        </ul>
                    </div>
                </div>
                <div class="block-friends-country friends-search">
                    <span class="head-search-title">Страна</span>
                    <div class="input-country div-set" id="input-country"><span id="input-country-text">Выберите страну</span></div>
                    <div class="list-country block-list-search" id="list-country">
                        <ul>
                            <li class="country">Любая</li>
                            <li class="country">Россия</li>
                            <li class="country">США</li>
                            <li class="country">Германия</li>
                            <li class="country">Швеция</li>
                            <li class="country">Польша</li>
                            <li class="country">Китай</li>
                            <li class="country">Эстония</li>
                            <li class="country">Канада</li>
                        </ul>
                    </div>
                </div>
                <div class="block-friends-city friends-search">
                    <span class="head-search-title">Город</span>
                    <div class="input-town div-set" id="input-town"><span id="input-town-text">Выберите город</span></div>
                    <div class="list-town block-list-search" id="list-town">
                        <ul>
                            <li class="town">Москва</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<? include('footer.php')?>
<script src="js/scripts.min.js"></script>
</body>
</html>