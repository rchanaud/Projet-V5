(function() {
	var wineight  = $(window).height();
	var boxHeight = $("#center-presentation").height();
	var marginTop = (wineight/2) - (boxHeight/2);
	$("#center-presentation").css({
		"margin-top": marginTop
	});
}());
