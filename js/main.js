(function() {

	//Init
	var winHeight  = $(window).height();
	var winWidth   = $(window).width();

	//Resize SVG
	$(".svg-shape").width(winWidth);
	$(".svg-shape").height(winHeight);

	//Resize every "screen"
	$(".content-zone").height(winHeight);
	//TODO: onresize

	//Centrage vertical home
	var boxHeight  = $("#center-presentation").height();
	var boxWidth   = $("#center-presentation").width();
	var marginTop  = (winHeight/2) - (boxHeight/2);
	var marginLeft = (winWidth/2)  - (boxWidth/2);
	$("#center-presentation").css({
		"top":  marginTop,
		"left": marginLeft
	});

	//Menu
	$('#reveal-menu').on('click', function(e){
		e.preventDefault();
		$menu = $("#main-menu");
		console.log($menu.height());
		$menu.slideToggle(
			function(){
				$menu.animate({
					"height": "0"
				}, 150);
			},
			function(){
				$menu.animate({
					"height": "100px"
				}, 150);
			}
		);
	});

}());
