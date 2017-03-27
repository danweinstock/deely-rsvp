$(document).ready(function(){
		console.log("Purple Monkey Dishwasher");
		$('.nav-item').on('click', function(e){
			e.preventDefault();
			var option = $(this).attr('href');
			console.log(option);
			$("html, body").animate({ scrollTop: $(option).offset().top-50}, 1000);
		});
});