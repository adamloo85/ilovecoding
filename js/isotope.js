$(document).ready(function() {

	$(window).load(function() {
		$('#container').isotope({
			//options
			itemSelector: '.item',
			layoutMode: 'masonry'
		});
	})
});