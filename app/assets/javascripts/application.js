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
			
			// Slide up any divs that are down
			$(this).siblings().each(function(){
				if($(this).hasClass('selected')){
					var up_id = $(this).attr('id');
					var slide_elem_up = $("#" + up_id + "_slide");
					slide_elem_up.animate({marginTop: "-=230px"}, 500);
				}	
			});
			
			// Remove selected class
			$(this).siblings().removeClass("selected");
			$(this).addClass('selected');
			
			// Slide div down
			if(elem_to_slide.outerHeight(true) == 0) {
				elem_to_slide.delay(550).animate({marginTop: "+=230px"}, 500);
			}
		}
	});
});

// When logo is clicked
$(function(){
	// Slide up any divs which are down, remove selected class on option
	$("#logo").click(function(){
		$("#options").children().each(function(){
			if($(this).hasClass('selected')){
				var up_id = $(this).attr('id');
				var slide_elem_up = $("#" + up_id + "_slide");
				slide_elem_up.animate({marginTop: "-=300px"}, 500);
				$(this).removeClass('selected');
			}
		});
	});
});