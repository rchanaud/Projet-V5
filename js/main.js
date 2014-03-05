(function() {

	//Init
	var winHeight  = $(window).height();
	var winWidth   = $(window).width();

	//Resize SVG
	$(".svg-shape").width(winWidth);
	$(".svg-shape").height(winHeight);

	//Centrage vertical
	var boxHeight  = $("#center-presentation").height();
	var boxWidth   = $("#center-presentation").width();
	var marginTop  = (winHeight/2) - (boxHeight/2);
	var marginLeft = (winWidth/2)  - (boxWidth/2);
	$("#center-presentation").css({
		"top":  marginTop,
		"left": marginLeft
	});

}());
