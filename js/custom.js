$(document).ready(function() {

	$('#hours_locations').waypoint(function(direction) {
		if (direction == 'down'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#hours_nav').addClass('active');
			$('#navbar').removeClass('nav_transparent');
		}
	})

	$('#hours_locations').waypoint(function(direction) {
		if (direction == 'up'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#home_nav').addClass('active');
			$('#navbar').addClass('nav_transparent');
		}
	})

	$('#services').waypoint(function(direction) {
		if (direction == 'down'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#services_nav').addClass('active');
		}
	})

	$('#services').waypoint(function(direction) {
		if (direction == 'up'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#hours_nav').addClass('active');
		}
	})

	$('#jobs').waypoint(function(direction) {
		if (direction == 'down'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#jobs_nav').addClass('active');
		}
	})

	$('#jobs').waypoint(function(direction) {
		if (direction == 'up'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#services_nav').addClass('active');
		}
	})

	$('#contactus').waypoint(function(direction) {
		if (direction == 'down'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#contact_nav').addClass('active');
		}
	})

	$('#contactus').waypoint(function(direction) {
		if (direction == 'up'){
			$('a.smoothScroll').parent().removeClass('active');
			$('#jobs_nav').addClass('active');
		}
	})

	// $('#submit_button').submit(function(){
	// 	$('#success_container').removeClass('hidden_success');
	// })

	$('#waypoint1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	})

	$('#myCarousel').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	})
});