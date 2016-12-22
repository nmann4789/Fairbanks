$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
	var initHeroHeight = $('.hero img').height();
	$('.hero').css({
		height:initHeroHeight+"px"
	});
	var initBorderHeight = initHeroHeight*0.40;
	$('.hero:after').css({
		"border-width": "0 0 "+initBorderHeight+"px 100vw"
	});
	$(window).resize(function(event) {
		var heroHeight = $('.hero img').height();
		$('.hero').css({
			height:heroHeight+"px"
		});
		var borderHeight = heroHeight*0.40;
		$('.hero:after').css({
			"border-width": "0 0 "+borderHeight+"px 100vw"
		})
	});
});