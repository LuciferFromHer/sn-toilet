$(function() {
	$("#profile-butt").on("click",function(){
            $('#profile-drop-menu').slideToggle(50);
			$(this).toggleClass("profile-active");
        });
	
	$(document).on('click', function(e) {
  	if (!$(e.target).closest("#profile-butt").length) {
    $('#profile-drop-menu').slideUp(50);
	$("#profile-butt").removeClass("profile-active");
    }
    e.stopPropagation();
    });
	$("#button-tb-menu").on("click",function(){
		$("#tablet-menu").css("display","block");
		$("#tablet-menu").animate({left: "0"},300);
		$("body").css("overflow","hidden");
		$(".tb-menu-black-bg").css({display: "block"});
		$(".tb-menu-black-bg").animate({opacity: "0.6"},300);
		
	});
	$("#tablet-menu a").on("click", function(){
		$('#tablet-menu').animate({left: "-300px"},300);
		$(".tb-menu-black-bg").animate({opacity: "0"},300);
		setTimeout(function(){
			$("#tablet-menu").css("display","none");
			$(".tb-menu-black-bg").css({display: "none"});
			$("body").css("overflow","");
		},300);
		});
	$(document).on('click', function(e) {
  	if (!$(e.target).closest("#button-tb-menu, #tablet-menu").length) {
    $('#tablet-menu').animate({left: "-300px"},300);
	$(".tb-menu-black-bg").animate({opacity: "0"},300);
	setTimeout(function(){
		$("#tablet-menu").css("display","none");
		$(".tb-menu-black-bg").css({display: "none"});
		$("body").css("overflow","");
	},300);
    }
	
    e.stopPropagation();
    });
	var findInptOn = 0;
	$(".messages .find").on("click", function(){
			$(".messages .find-inpt").css("display","block");
			$(".messages .close").css("display","block");
			$(".messages .find-inpt").animate({width: "300px"},100);
			$(".messages .find").animate({marginRight: "-25px"},100);
			$(".messages .plus").css("display","none");
			$(".messages .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
	});
	$(".messages .close, .friends .find").on("click",function closeMesInput(){
		setTimeout(function(){
				$(".messages .find-inpt").css("display","none");
				$(".messages .close").css("display","none");
				$(".messages .plus").css("display","block");
			},100);
			$(".messages .find-inpt").val("");
			$(".messages .find-inpt").animate({width: "0px"},100);
			$(".messages .find").animate({marginRight: "16px"},100);
			$(".messages .find").css("backgroundImage","");
			findInptOn = 0;
	});
	
	$(".dialog .find").on("click", function(){
			$(".dialog .find-inpt").css("display","block");
			$(".dialog .dots").css("display","none");
			$(".dialog .close").css("display","block");
			$(".dialog .find-inpt").animate({width: "200px"},100)
			$(".dialog .find").animate({marginRight: "-25px"},100);
			$(".dialog .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
	});
	$(".dialog .close, .friends .find").on("click",function(){
		setTimeout(function(){
				$(".dialog .dots").css("display","block");
				$(".dialog .find-inpt").css("display","none");
				$(".dialog .close").css("display","none");
			},100);
			$(".dialog .find-inpt").val("");
			$(".dialog .find-inpt").animate({width: "0px"},100);
			$(".dialog .find").animate({marginRight: "30px"},100);
			$(".dialog .find").css("backgroundImage","");
			findInptOn = 0;
	});
	
	$(".friends .find").on("click", function(){
			$(".friends .find-inpt").css("display","block");
			$(".friends .close").css("display","block");
			$(".friends .find-inpt").animate({width: "230px"},100);
			$(".friends .find").animate({marginRight: "-25px"},100);
			$(".friends .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
	});
	$(".friends .close, .messages .find, .dialog .find").on("click",function closeMesInput(){
		setTimeout(function(){
				$(".friends .find-inpt").css("display","none");
				$(".friends .close").css("display","none");
			},100);
			$(".friends .find-inpt").val("");
			$(".friends .find-inpt").animate({width: "0px"},100);
			$(".friends .find").animate({marginRight: "16px"},100);
			$(".friends .find").css("backgroundImage","");
			findInptOn = 0;
	});
	
	$(".tb-menu-page .find").on("click", function(){
			if( $(".tb-menu-page").width() < 400){
				$(".tb-menu-page .find-inpt").css("display","block");
				$(".tb-menu-page").css("padding-left","0");
				$(".tb-menu-page .close").css("display","block");
				$(".tb-menu-page p").css("display","none");
				$(".tb-menu-page .plus").css("display","none");
				$(".tb-menu-page .find-inpt").animate({width: $(".tb-menu-page").width() - 45},100);
				$(".tb-menu-page .find").animate({marginRight: "-25px"},100);
				$(".tb-menu-page .find").css("backgroundImage","url(img/search-active.svg)");
				findInptOn = 1;
			}
			if($(".tb-menu-page").width() >= 400){
			$(".tb-menu-page .find-inpt").css("display","block");
			$(".tb-menu-page .close").css("display","block");
			$(".tb-menu-page").css("padding-left","");
			$(".tb-menu-page p").css("display","block");
			$(".tb-menu-page .plus").css("display","none");
			$(".tb-menu-page .find-inpt").animate({width: "230px"},100);
			$(".tb-menu-page .find").animate({marginRight: "-25px"},100);
			$(".tb-menu-page .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
			}
	});
	$(".tb-menu-page .close").on("click",function closeMesInput(){
		setTimeout(function(){
				$(".tb-menu-page .find-inpt").css("display","none");
				$(".tb-menu-page .close").css("display","none");
				$(".tb-menu-page p").css("display","block");
				$(".tb-menu-page .plus").css("display","block");
				$(".tb-menu-page").css("padding-left","");
			},100);
			$(".tb-menu-page .find-inpt").val("");
			$(".tb-menu-page .find-inpt").animate({width: "0px"},100);
			$(".tb-menu-page .find").animate({marginRight: "16px"},100);
			$(".tb-menu-page .find").css("background-image","");
			findInptOn = 0;
	});
	//
	var editable = document.getElementById('send-inpt');

	function onChange() {
		editable.innerHTML = editable.innerText;
	}

	editable.addEventListener('DOMNodeInserted', onChange, false);
	$("#send-inpt").on("focus",function(){
		$("#send-inpt-placeholder").css("color","#c0c0c0");
	}); 
	$("#send-inpt").on("blur",function(){
		$("#send-inpt-placeholder").css("color","");
	});
	$("#send-inpt-placeholder").on("click",function(){
		$("#send-inpt").focus();
	});
	$("#send-inpt").on("keyup",function(){
		var sendInptValue = $("#send-inpt").html();
		if( sendInptValue.length == 0 || sendInptValue == "<div><br></div>" || sendInptValue == "<br>"){
			$("#send-inpt").html("");
			$("#send-inpt-placeholder").css("display","block");
		}else{
			$("#send-inpt-placeholder").css("display","none");
		}
	});
	$("#send-inpt").on("keypress", function(){
		$("#send-inpt-placeholder").css("display","none");
	});
	$(window).load(function () {
		if($(window).width() < 991){
			$(".ms-list-alignment").scrollTop($(".ms-list").height());
			var height = $(".ms-list-alignment").height() - $(".ms-list").height();
			$(".ms-list-alignment").css("padding-top",height + "px");
		}
		$(".ms-list-alignment").scrollTop($(".ms-list").height());
		var height = $(".ms-list-alignment").height() - $(".ms-list").height();
  		$(".ms-list-alignment").css("padding-top",height + "px");
	});
	$(".send-butt").on("click",function () {
		var height = $(".ms-list-alignment").height() - $(".ms-list").height();
  		$(".ms-list-alignment").css("padding-top",height + "px");
	});
	
	var getObj = function(name) {

        name = name.replace(/^\s*(.*)\s*$/, '$1');
        var obj, char = name[0];
        name = name.substr(1);

        if(char == '#'){
            return document.getElementById(name);
        }else if(char == '.'){
            return document.getElementsByClassName(name);
        }else {
            return document.getElementsByTagName(name);
        }
    };

    var countFrom = 0, countTo = 0, countSex = 0, countCountry = 0, countTown = 0;
    function getDisplay(name, display){
        return getObj(name).style.display = display;
    }
    function onObjName(name){   // функция обработчика

        if((name == 'input-age-from' || name == 'from')&& countFrom == 0) {
            countFrom = 1;
            countTo = 0;
            getDisplay('#from-age', 'block');
            getDisplay('#to-age', 'none');
        }else if((name == 'input-age-from' || name == 'from') && countFrom == 1){
            countFrom = 0;
            countTo = 0;
            getDisplay('#from-age', 'none');
        } else if((name == 'input-age-to' || name == 'age')&& countTo == 0) {
            countTo = 1;
            countFrom = 0;
            getDisplay('#to-age', 'block');
            getDisplay('#from-age', 'none');
        }else if((name == 'input-age-to' || name == 'age') && countTo == 1){
            countTo = 0;
            countFrom = 0;
            getDisplay('#to-age', 'none');
        }else if(name != 'input-age-to' || name != 'input-age-from'){
            countFrom = 0;
            countTo = 0;
            getDisplay('#to-age', 'none');
            getDisplay('#from-age', 'none');
        }

        if((name == 'input-sex' || name == 'input-sex-text') && countSex == 0){
            countSex = 1;
            getDisplay('#list-sex', 'block');
        }else if((name == 'input-sex' || name == 'input-sex-text') && countSex == 1){
            countSex = 0;
            getDisplay('#list-sex', 'none');
        }else if((name != 'input-sex' || name != 'input-sex-text')&& countSex == 1){
            countSex = 0;
            getDisplay('#list-sex', 'none');
        }
        if((name == 'input-country' || name == 'input-country-text') && countCountry == 0){
            countCountry = 1;
            getDisplay('#list-country', 'block');
        }else if((name == 'input-country' || name == 'input-country-text') && countCountry == 1){
            countCountry = 0;
            getDisplay('#list-country', 'none');
        }else if((name != 'input-country' || name != 'input-country-text')&& countCountry== 1){
            countCountry = 0;
            getDisplay('#list-country', 'none');
        }
        if((name == 'input-town' || name == 'input-town-text') && countTown == 0){
            countTown = 1;
            getDisplay('#list-town', 'block');
        }else if((name == 'input-town' || name == 'input-town-text') && countTown == 1){
            countTown = 0;
            getDisplay('#list-town', 'none');
        }else if((name != 'input-town' || name != 'input-town-text')&& countTown == 1){
            countTown = 0;
            getDisplay('#list-town', 'none');
        }


        return 0;
    }
    var idFrom = idTo = null;
    function innerAge(idLi){
        var idNum, idName;
        idNum = idLi.match(/\d{2}/);
        idName = idLi.match(/to|from/);

        if(idName == 'to' && (idNum >= idFrom || idFrom == null) ){
            if(idNum != null){
                idTo = idNum;
                getObj('#age').innerHTML = '<b id="age">до '+idNum+'</b>'
            }else{
                getObj('#age').innerHTML = 'до';
            }
            return true;
        }else if(idName == 'from' && (idNum <= idTo || idTo == null)){
            idFrom = idNum;
            if(idNum != null){
                getObj('#from').innerHTML = '<b id="from">от '+idNum+'</b>';
            }else{
                getObj('#from').innerHTML = 'от';
            }
            return true;
        }
        return false;
    }
    function innerSex(sex){
        if(sex == 'male'){
            getObj('#input-sex-text').innerHTML = '<b id="input-sex-text">мужской</b>';
        }else if(sex == 'female'){
            getObj('#input-sex-text').innerHTML = '<b id="input-sex-text">женский</b>';
        }else if(sex == 'null'){
            getObj('#input-sex-text').innerHTML = 'Любой';
        }
    }

    document.onclick = function(e) { // обработчик событий
        var name = e.target.id;
        var nameClass = e.target.className;
        onObjName(name);
        if(nameClass == "input-list"){
            innerAge(name);
            return 0
        }
        if(nameClass == "input-sex"){
            innerSex(name);
            return 0;
        }
        if(nameClass == 'country'){
            nameCountry = e.target.innerHTML;
            if(nameCountry != undefined && nameCountry != null && nameCountry != '') {
                if(nameCountry != 'Любая')
                    getObj('#input-country-text').innerHTML = '<b id="input-country-text">'+nameCountry+'</b>';
                else
                    getObj('#input-country-text').innerHTML = nameCountry;
            }
            return 0
        }
        if(nameClass == 'town'){
            nameTown = e.target.innerHTML;
            if(nameTown != undefined && nameTown != null && nameTown != '') {
                getObj('#input-town-text').innerHTML = '<b id="input-town-text">'+nameTown +'</b>';
            }
            return 0
        }
        return 0;
    };

});
