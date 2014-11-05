$(function()	{

		$(window).on("load",function() {
			$(".productsAlign").each(function()	{
				$er12 = $(this).parent().height();
				$(this).css("height",$er12+"px");
				//$(this).children(".wrap-col").css("height",$er12+"px");
				//$(this).children(".wrap-col").children(".wrapper").css("height",$er12+"px");
				$er13 = $(this).children("figure").height();	
				$(this).children("figure").css("margin-top",(($er12/2)-($er13/2))+"px");
			});
		});

	/*$(".productBox").stop(true,true).mouseenter(function()	{
		$tmpWidth = $(this).width();
		$tmpHeight = $(this).height();
		$tmpOffset = $(this).position();
		$("<div>").attr({
			'id': 'pullDownDiv'
		}).css({
			'position':'absolute',
			'top': '0px',
			'height': $tmpHeight+"px",
			'width': $tmpWidth+"px",
			'top': $tmpOffset.top+"px",
			'left': $tmpOffset.left+"px",
			'background-color': 'rgba(255,0,255,0.6)',
			'z-index': '2',
			'opacity': '0',
		}).appendTo(this).animate({	'opacity': '1'	},500);
	});
	$(".productBox").stop(true,true).mouseleave(function()	{
		$("#pullDownDiv").animate({	'opacity': '0'	},500,function()	{
			$(this).remove();
		});
	});
	$(".productBox").on("click",function()	{
		$(this).children(".col-2-3").children(".further").slideDown(500);
	});*/
	
});
