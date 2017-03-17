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
			$(".messages .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
	});
	$(".messages .close, .friends .find").on("click",function closeMesInput(){
		setTimeout(function(){
				$(".messages .find-inpt").css("display","none");
				$(".messages .close").css("display","none");
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
			var start = Date.now(); // сохранить время начала

			var timer = setInterval(function() {
			  // вычислить сколько времени прошло с начала анимации
			  var timePassed = Date.now() - start;

			  if (timePassed >= 2000) {
				clearInterval(timer); // конец через 2 секунды
				return;
			  }

			  // рисует состояние анимации, соответствующее времени timePassed
			  draw(timePassed);

			}, 20);

			// в то время как timePassed идёт от 0 до 2000
			// left принимает значения от 0 до 400px
			function draw(timePassed) {
			 document.getElementById("message-search").style.width = timePassed / 10 + 'px';
			}
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
	getObj("#send-inpt").onfocus = function(){
		getObj("#send-inpt-placeholder").style.color = "#c0c0c0";
	};
	getObj("#send-inpt").onblur = function(){
		getObj("#send-inpt-placeholder").style.color = "";
	};
	getObj("#send-inpt-placeholder").onclick = function(){
		getObj("#send-inpt").focus();
	};
	getObj("#send-inpt").onkeyup = function(){
		var sendInptLength = getObj("#send-inpt").innerHTML.length;
		if(sendInptLength == 0){
			getDisplay("#send-inpt-placeholder","block");
		}else{
			getDisplay("#send-inpt-placeholder","none");
		}
	};
	getObj("#send-inpt").onkeypress = function(){
			getDisplay("#send-inpt-placeholder","none");
	};
});
