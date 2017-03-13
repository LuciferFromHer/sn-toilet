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
		$(".tb-menu-black-bg").css({display: "block"});
		$(".tb-menu-black-bg").animate({opacity: "0.6"},300);
		
	});
	$("#tablet-menu a").on("click", function(){
		$('#tablet-menu').animate({left: "-300px"},300);
		$(".tb-menu-black-bg").animate({opacity: "0"},300);
		setTimeout(function(){
			$("#tablet-menu").css("display","none");
			$(".tb-menu-black-bg").css({display: "none"});
		},300);
		});
	$(document).on('click', function(e) {
  	if (!$(e.target).closest("#button-tb-menu, #tablet-menu").length) {
    $('#tablet-menu').animate({left: "-300px"},300);
	$(".tb-menu-black-bg").animate({opacity: "0"},300);
	setTimeout(function(){
		$("#tablet-menu").css("display","none");
		$(".tb-menu-black-bg").css({display: "none"});
	},300);
    }
	
    e.stopPropagation();
    });

});
