$(document).on('turbolinks:load ready', function(){
	// $(".hover_image").hide();

	$('.main_image').mouseenter(function(){
		var name = $(this).attr('name');
		console.log(name);
		$('#'+name+"_text").show();
		$(this).hide();
	});


	$('.hover_image').mouseout(function(){
		var name = $(this).attr('name');
		$('#' + name).show();
		$(this).hide();	
	});
});


// configuration.png
// configuration_text.png