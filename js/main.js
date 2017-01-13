$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
	$('nav a').on('click', function(){
		var section = $(this).attr('href');
		var offset = 0;
		if(window.innerWidth<=991){
			offset=75;
		}
		var scroll=$(section).offset().top-offset;
		$('html,body').animate({
		  scrollTop: scroll
		});
	});
	/*var initBannerHeight = $('.banner .content').height()-100;
		$('.banner .pop-logo').css({
			height:initBannerHeight+"px"
		})
	$(window).resize(function(event) {
		var bannerHeight = $('.banner .content').height()-100;
		$('.banner .pop-logo').css({
			height:bannerHeight+"px"
		})
	});*/
	var hero_bac = document.querySelectorAll("#hero");
	var career_bac = document.querySelectorAll("#careers");
	var speed1 = 0.2;
	var speed2 = 1.1;
	window.onscroll = function(){
		if(window.innerWidth>640){
			[].slice.call(hero_bac).forEach(function(el,i){
	    var windowYOffset = window.pageYOffset,
	        elBackgrounPos = "0% " + (windowYOffset * speed1) + "px";
	    el.style.backgroundPosition = elBackgrounPos;
	    });

	    [].slice.call(career_bac).forEach(function(el,i){
	    var windowYOffset = window.pageYOffset,
	        elBackgrounPos = "0% " + (windowYOffset * speed2) + "px";
	    el.style.backgroundPosition = elBackgrounPos;
	    });
		}  
	};
});