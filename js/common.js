$(document).ready(function() {



	

	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});



	$(".rslides").responsiveSlides({
				auto: true,
				pager: true,
				speed: 300,
				maxwidth: 700,
				
	});



	$(".item").magnificPopup({
		type : "image",
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});



	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);

	});

	var $container = $(".masonry-container");
	$container.imagesLoaded(function (){
		$container.masonry({
			columnWidth: ".item_img",
			itemSelector: ".item_img"
		});
		$(".item_img").imagefill();
	});




	$("input").not("[type=submit]").jqBootstrapValidation();


	$("#callback_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

