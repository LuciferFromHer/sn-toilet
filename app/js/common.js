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
	
	$(".friends .find").on("click", function(){
			$(".friends .find-inpt").css("display","block");
			$(".friends .close").css("display","block");
			$(".friends .find-inpt").animate({width: "230px"},100);
			$(".friends .find").animate({marginRight: "-25px"},100);
			$(".friends .find").css("backgroundImage","url(img/search-active.svg)");
			findInptOn = 1;
	});
	$(".friends .close, .messages .find").on("click",function closeMesInput(){
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
			$(".tb-menu-page .find").css("backgroundImage","");
			findInptOn = 0;
	});
});
