// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// Function to slide option div
$(function(){
	$("#options").children().click(function(){
		if($(this).hasClass('selected')) {
			// Current choice is selected, do nothing
		} else {
			var id = $(this).attr('id');
			var elem_to_slide = $("#"+ id + "_slide");
			var elem_to_fade = $('#' + id + "_container");
			
			// Slide up any divs that are down, fade out any containers which are exposed
			$(this).siblings().each(function(){
				if($(this).hasClass('selected')){
					var up_id = $(this).attr('id');
					var slide_elem_up = $("#" + up_id + "_slide");
					var fade_elem_out = $("#" + up_id + "_container");
					slide_elem_up.animate({marginTop: "-=230px"}, 500);
					fade_elem_out.fadeOut();
				}	
			});
			
			// Remove selected class
			$(this).siblings().removeClass("selected");
			$(this).addClass('selected');
			
			// Slide div down
			if(elem_to_slide.outerHeight(true) == 0) {
				elem_to_slide.delay(550).animate({marginTop: "+=230px"}, 500);
			}
			
			// Change name of header, fade out blog
			changeHeaderName($(this));
			$("#blog_space").fadeOut();
			
			// Fade in div corresponding to header
			elem_to_fade.delay(800).fadeIn();
			
		}
	});
});

// Change header name
function changeHeaderName(linkObject){
	$("#header").children().text(linkObject.children().text());
}

// When logo is clicked
$(function(){
	// Slide up any divs which are down, fade out exposed containers, remove selected class on option, change header to blog
	$("#logo").click(function(){
		$("#options").children().each(function(){
			if($(this).hasClass('selected')){
				var up_id = $(this).attr('id');
				var slide_elem_up = $("#" + up_id + "_slide");
				var fade_elem_out = $("#" + up_id + "_container");
				slide_elem_up.animate({marginTop: "-=230px"}, 500);
				fade_elem_out.fadeOut();
				$(this).removeClass('selected');
				$("#header").children().text("the blog")
			}
		});
		
		$("#blog_space").delay(500).fadeIn();
	});
});

// Adjust header tab if window is too small on load
$(function(){
	if($(window).width() < 740){
		$("#header").css({"width": "60px", "top": "150px"});
	}
});


// If screen becomes too small
$(window).resize(function(){
	if($(window).width() < 740){
		$("#header").css({"width": "60px", "top": "150px"});
	} else if($(window).width() > 740) {
		$("#header").css({"width": "200px", "top": "60px"});
	}
});

// Function to rotate work panels
$(function(){
	$(".front").click(function(){
		if($(this).parent().css('transform') == 'none'){
			$(this).parent().css({'transform': "rotateY(+180deg)"});
		} else {
			$(this).parent().css({'transform': "none"});
		}
	});
});



