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
	var initBannerHeight = $('.banner .content').height();
		$('.banner .pop-logo').css({
			height:initBannerHeight+"px"
		})
	$(window).resize(function(event) {
		var bannerHeight = $('.banner .content').height();
		$('.banner .pop-logo').css({
			height:bannerHeight+"px"
		})
	});
});