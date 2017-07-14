jQuery(function($) {


	/// Show the File Names from the upload buttons
	$(document).on('change', '.btn-file :file', function() {
	    var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	$('.btn-cover :file').on('fileselect', function(event, numFiles, label) {
		$('.btn-cover').append("<div class='file-name'>"+label+"</div>");
	});

	$('.btn-vid :file').on('fileselect', function(event, numFiles, label) {
		$('.btn-vid').append("<div class='file-name'>"+label+"</div>");
	});

	$('.btn-photo :file').on('fileselect', function(event, numFiles, label) {
		$('.profile-upload').append("<div class='file-name'>"+label+"</div>");
	});

	$('.btn-aud :file').on('fileselect', function(event, numFiles, label) {
		$('.btn-aud').append("<div class='file-name'>"+label+"</div>");
	});



	/// Show the Colour Hex code
	var color = $('#colorpicker').val();
	hexcolor = $('#hexcolor');

	hexcolor.html(color);
	
	$('#colorpicker').on('change', function() {
		hexcolor.html(this.value);
	});


	/// Add new Text Section in Create gallery

	$('.insert-text').hide();
	$('.insert-code').hide();

	var textTemplate = $('.insert-text:first');

	var codeTemplate = $('.insert-code:first');

	// template to duplicate: 
	$('.btn-media.text').on("click", function(){
		textTemplate.clone().appendTo(".add-section").show();
	});

	$('.btn-media.code').on("click", function(){
		codeTemplate.clone().appendTo(".add-section").show();
	});

	// Audio player functionality
    if (typeof(audiojs) != 'undefined') {
	   audiojs.events.ready(function() {
           var as = audiojs.createAll();
	   });
    }

	// Reorder item in Create Gallery Settings
    if (typeof(sortable) != 'undefined') {
        $(".sortable-parent").sortable({
            placeholder: "ui-state-highlight", 
            forcePlaceholderSize : true, 
            containment: "document", 
            tolerence : "pointer", 
            connectWith: ".connectedSortable"
        });

         $(".sortable-child").sortable({
            placeholder: "ui-state-highlight", 
            forcePlaceholderSize : true, 
            connectWith: ".connectedSortable", 
            containment: "document",
            tolerence: "pointer" 
        });


        $("#sections").sortable({
            handle: ".btn-move",
            placeholder: "ui-state-highlight"
        });
    }

   

	
	$(".start-gallery").on("click", function(){
		$(".jumbotron.slideshow").fadeOut(800);
		$(".slide-carousel").show();
	});

    // Expanding Photo Captions on Slideshow

	$(".expand-photo-cap").on( "click", function() {
		$(this).find('.photo-caption').slideToggle('fast');
		$(this).find( ".button-text" ).each(function() { 
			if($(this).hasClass('hide-this')) { 
				$(this).removeClass('hide-this');
			} else { 
				$(this).addClass('hide-this');
			}
		});
	});




	//smooth scroll to top
	$(".top").on('click', function(event){
		event.preventDefault();
		$('.slide-carousel').animate({
			scrollTop: 0
		 	}
		);
		$('.timeline-carousel').animate({
			scrollTop: 0
		});
	});

	
	// Create a Slide show Gallery - Delete Thumbnail button on thumbnail hover

	$("a.thumbnail-img").on("mouseenter", function(){
		$(this).next("a.delete-thumb").show();
	});

	$("a.thumbnail-img").on("mouseleave", function(){
		$(this).next("a.delete-thumb").hide();
	});


	// Add new media to Media Library Hidden Div
	$("#add-media").on("click", function(){
		$(".add-new-media").slideToggle();
	});

	/*----------  Typer on Custom Codex homepage  ----------*/


	$(".typer").typed({
		strings: ["Students", "Visitors", "Staff", "Supporters"],
		typeSpeed: 200, 
		backSpeed: 200,
		loop: true
	});


	/*----------  Animate lines on scroll - Change these to be scrolls not timeouts ----------*/
	
	// setTimeout(function(){
	// 	$('.dot-line-1').addClass('animate');
	// },3000);

	// setTimeout(function(){
	// 	$('.dot-line-2').addClass('animate');
	// },5000);

	// setTimeout(function(){
	// 	$('.dot-line-3').addClass('animate');
	// },7000);

	$(window).scroll(function(){

		if($(this).scrollTop() >= 600 ){
			$('.dot-line-1').addClass('animate');
		}

		if($(this).scrollTop() >= 800 ){
			$('.dot-line-2').addClass('animate');
		}

		if($(this).scrollTop() >= 1000 ){
			$('.dot-line-3').addClass('animate');
		}
	});

	
});




