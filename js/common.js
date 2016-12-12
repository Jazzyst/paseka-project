$(document).ready(function() {

	$(".rslides").responsiveSlides({
				auto: true,
				pager: true,
				speed: 300,
				maxwidth: 700
	});
	

	$('#portfolio_grid').mixItUp();

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});



	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".top_text img").animated("fadeInDown", "fadeOutUp");
	$(".top_text h1, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".left .news_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .news_item").animated("fadeInRight", "fadeOutRight");

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function(){
		// $(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

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

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});