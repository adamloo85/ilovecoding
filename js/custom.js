$(document).ready(function() {

	$(window).load(function() {
			navScroll();
			linkHover();

	});

	var linkHover = function() {
		$('.navigationLinks').mouseenter(function(){
    $(this).animate({
     color: '#FF3925'
    }, 200);
		}).mouseout(function(){
    $(this).animate({
        color: '#FFBF00'
    }, 200);
	});
	}

	var navScroll = function() {
		$('a').on('click', function() {
			var addressValue = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(addressValue).offset().top}, 800);
			return false;
		});
	}
});
