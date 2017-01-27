$(document).ready(function() {



	

	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});


// 	$(function() {
//     //here you have the control over the body of the iframe document
//     var iBody = $("#frame").contents().find("body");
//     //here you have the control over any element (#myContent)
//     var myContent = iBody.find("#myContent");

// });


	$(".rslides").responsiveSlides({
				auto: true,
				pager: true,
				speed: 300,
				maxwidth: 700,
				

	});
		$(".button").magnificPopup();
		$(".registration").magnificPopup();

		$("#form").submit(function() { //Change
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за  Вашу заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 500);
		});
		return false;
	});

		$("#form-reg").submit(function() { //Change
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("В ближайшее время мы с Вами свяжемся!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 500);
		});
		return false;
	});

	// $('#portfolio_grid').mixItUp();

	// $(".s_portfolio li").click(function(){
	// 	$(".s_portfolio li").removeClass("active");
	// 	$(this).addClass("active");
	// });
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


	// $(".animation_1").animated("flipInY", "flipOutY");
	// $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	// $(".animation_3").animated("fadeInRight", "fadeOutRight");

	// $(".top_text img").animated("fadeInDown", "fadeOutUp");
	// $(".top_text h1, .section_header").animated("fadeInUp", "fadeOutDown");

	// $(".left .news_item").animated("fadeInLeft", "fadeOutLeft");
	// $(".right .news_item").animated("fadeInRight", "fadeOutRight");

	// function heightDetect(){
	// 	$(".main_head").css("height", $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function(){
	// 	heightDetect();
	// });

	// $(".toggle_mnu").click(function() {
	// 	$(".sandwich").toggleClass("active");
	// });

	// $(".top_mnu ul a").click(function(){
	// 	// $(".top_mnu").fadeOut(600);
	// 	$(".sandwich").toggleClass("active");
	// });

	// $(".toggle_mnu").click(function(){
	// 	if ($(".top_mnu").is(":visible")){
	// 		$(".top_text").removeClass("h_opasity");
	// 		$(".top_mnu").fadeOut(600);
	// 		$(".top_mnu li a").removeClass("fadeInUp animated");
	// 	}else{
	// 		$(".top_text").addClass("h_opasity");
	// 		$(".top_mnu").fadeIn(600);
	// 		$(".top_mnu li a").addClass("fadeInUp animated");
	// 	};
	// });

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);

	});

// 	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

// 	$(".top_mnu ul a").mPageScroll2id();

	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item_img",
			itemSelector: ".item_img"
		});
		$(".item_img").imagefill();
	});

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

