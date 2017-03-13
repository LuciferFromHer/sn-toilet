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

});
