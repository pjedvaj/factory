// Created by Petar Jedvaj in October 2018, updated in May 2019 for factory.hr, Junior Frontend Developer test
// Copyright: design and images by Factory.hr / HTML, CSS and JS code by Petar Jedvaj

// IMAGE SLIDER
$(document).ready(function() {

	// Add images to top row
	$("#top").append(
		'<li><img class="image" src="img/slider-image-9.jpg" alt="penguins"></li>',
		'<li><img class="image" src="img/slider-image-8.jpg" alt="wave"></li>',
		'<li><img class="image" src="img/slider-image-7.jpg" alt="beach"></li>',
		'<li><img class="image" src="img/slider-image-6.jpg" alt="girl"></li>',
		'<li><img class="image" src="img/slider-image-5.jpg" alt="surfer"></li>'
	);

	// Add images to bottom row
	$("#bottom").append(
		'<li><img class="image" src="img/slider-image-1.jpg" alt="pebbles"></li>',
		'<li><img class="image" src="img/slider-image-2.jpg" alt="bay"></li>',
		'<li><img class="image" src="img/slider-image-3.jpg" alt="sport"></li>',
		'<li><img class="image" src="img/slider-image-4.jpg" alt="clifs"></li>'
	);

  // Prev button click
	$('#prev').click(function() {
		$('#top li:first').before($('#top li:last')); // Top row
		$('#bottom li:first').before($('#bottom li:last')); // Bottom row
	});

  // Next button click
	$('#next').click(function() {
		$('#top li:last').after($('#top li:first')); // Top row
		$('#bottom li:last').after($('#bottom li:first')); // Bottom row
	});

});
