(function() {

	//Init
	var winHeight  = $(window).height();
	var winWidth   = $(window).width();

	//Resize SVG

		function resizeHomeSVG(){
			winHeight = $(window).height();
			winWidth  = $(window).width();
			$(".svg-shape").width(winWidth);
			$(".svg-shape").height(winHeight);
		};

		//Init
		resizeHomeSVG();
		//OnResize
		$(window).resize(function(){
			resizeHomeSVG();
		});

	//Resize every "screen"

		//Init
		$(".content-zone").height(winHeight);
		//OnResize
		$(window).resize(function() {
			winHeight = $(window).height();
			winWidth  = $(window).width();
			$(".content-zone").height(winHeight);
		});

	//Centrage vertical Home text block

		function initHometextblock() {
			winHeight = $(window).height();
			winWidth  = $(window).width();
			boxHeight  = $("#center-presentation").height();
			boxWidth   = $("#center-presentation").width();
			marginTop  = (winHeight/2) - (boxHeight/2);
			marginLeft = (winWidth/2)  - (boxWidth/2);
			$("#center-presentation").css({
				"top":  marginTop,
				"left": marginLeft
			});
		}

		//Init
		initHometextblock();
		//OnResize
		$(window).resize(function(){
			initHometextblock();
		});

	//Menu
	$('#reveal-menu').on('click', function(e){
		e.preventDefault();

		$menu      = $("#main-menu");
		$menuopen  = $("#menu-ico");
		$menuclose = $("#menu-close-ico");

		$menu.slideToggle(
			{
				complete: function(){
					if ($menu.is(":hidden")) {
						$menuopen.removeClass("hidden").addClass("shown");
						$menuclose.removeClass("shown").addClass("hidden");
						$('#reveal-menu').css({
							backgroundSize: "100% auto"
						});

					} else {
						$menuclose.removeClass("hidden").addClass("shown");
						$menuopen.removeClass("shown").addClass("hidden");
						$('#reveal-menu').css({
							backgroundSize: "0%"
						});
					}
					$menu.animate(
						{
							"height": "100px"
						},
						150, function (){
							$("#main-menu > ul").fadeToggle(150);
						}
					);
				}
			}
		);

		//Page About
		if($("#about").css('display') !== 'none'){
			$("#about *").fadeOut(150);
			$("#about").slideUp(600);
			$("body").css({
				overflowY: 'auto'
			});
		}
	});

	//Contact - About
	$("#about-btn").on("click", function(){
		$("#about").slideDown(600, function(){
			$("#about *").fadeIn(150);
			$("body").css({
				overflowY: 'hidden'
			});
		});
	});

}());
