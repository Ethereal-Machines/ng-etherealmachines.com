$(function() {
	//INFORMATION FOR CAPTIONS
	/*
		IMPORTANT FOR IMAGE STORAGE AND USAGE:
		ALL IMAGES MUST BE STORED AS INSTRUCTIONS IN THE "Gallery.html" PAGE
		NOTE: THE CAPTION TEXT FOR ANY IMAGE MUST BE ENTERED HERE WITH THE FOLLOWING FORMAT:
		
		$filename$ --> File name must be entered instead of the, $filename$ word
		$caption$ --> The caption corresponding to that image must be entered instead of the, $caption$ word
	THE FORMAT IS:-
		
	info["$filename$"] = "$caption$";
	
	IMPORTANT: The above line of code must always be entered after the line "var info = {};" and before "//END OF INFORMATION FOR CAPTIONS"
	*/
	var info = {};
	info["getyourhearton.jpg"] = "Simple Plan album :)";
	
	//END OF INFORMATION FOR CAPTIONS
	$("body").stop(true,true).on("click", "figure", function(e) {
		$srcValue = $(e.target).attr('src')	||	$(e.target).children(".thumb").attr('src');
		$srcHtml = '<img id="expImg" src="L' + $srcValue + '" alt="' + $srcValue + '" />';
		var srcVal = $srcValue.split("images/");
		//$(this).html(srcVal[1]);
		var dynDiv2 = document.createElement("div");
		dynDiv2.setAttribute("id", "hidDiv");
		$("body").append(dynDiv2);
		$("#hidDiv").css({
			'z-index': '3',
			'position': 'fixed',
			'width': '100%',
			'top' : '0px',
			'left': '0px',
			'height': '100%',
			'display': 'none',
			'background-color': 'rgba(0,0,0,0.6)'
		}).fadeIn(500, function() {
			$("body").stop(true,true).on("click", "#hidDiv", function(e)	{
				e.stopPropagation();
				e.preventDefault();
				$("#expDiv").fadeOut(500, function() { 
					$("#expDiv").remove();
				});
				$("#infoDiv").fadeOut(500, function() { 
					$("#infoDiv").remove();
				});
				$("#hidDiv").fadeOut(501, function() {
					$("#hidDiv").remove();
				});
				$("#helpDiv").remove();
				enableScrolling();
				
			});
			disableScrolling();
			
		});
		//var dynDiv = document.createElement("div");
		//dynDiv.setAttribute("id", "expDiv");
		$("<div>").attr({
			'id': 'expDiv',
		}).css({
			'z-index': '4',
			'position': 'fixed',
			'width': 'auto',
			'top' : '50%',
			'left': '50%',
			'height': 'auto',
			//'max-height': '30%',
			'display': 'none',
			'background-color': '#999'
		}).html($srcHtml).appendTo("body").fadeIn(500);
		$("#expImg").on("load",function() {
		
			$expWidth = $("#expDiv").outerWidth()/2;
			$expHeight = $("#expDiv").outerHeight()/2;
			$("#expDiv").css({
				'margin-left': (-1*$expWidth)+'px',
				'margin-top': (-1*$expHeight)+'px',
			});
		
		});
		
		var dynDiv3 = document.createElement("div");
		dynDiv3.setAttribute("id", "helpDiv");
		$("body").append(dynDiv3);
		$("#helpDiv").css({
			'z-index': '4',
			'position': 'fixed',
			'width': '200px',
			'margin-left': '-100px',
			'top' : '0%',
			'left': '50%',
			'height': 'auto',
			'display': 'none',
			'background-color': '#999'
		}).html("<center>Click outside the image to exit<center>").fadeIn(500);
		
		if(!info[srcVal[1]])
		{
			infoTxt = "";
		}
		else
		{
			infoTxt = info[srcVal[1]];
		}
		$("<div>").attr({
			'id': 'infoDiv'
		}).css({
			'z-index': '4',
			'position': 'fixed',
			'margin-left': '-100px',
			'top' : '90%',
			'min-width': '200px',
			'max-width': '80%',
			'left': '50%',
			'color': '#fff',
			'background-color': 'rgba(0,0,0,0.5)',
			'height': 'auto',
			'display': 'none',
			//'background-color': '#999'
		}).html("<center>"+infoTxt+"</center>").appendTo("body").fadeIn(500);
		$tada1 = $("#infoDiv").outerWidth()/2;
		$("#infoDiv").css('margin-left',(-1*$tada1)+"px");
	});
	
	
	//PREVENT SCROLLING
		var keys = [37, 38, 39, 40];

		function disableScrolling() {
		  if (window.addEventListener) {
			  window.addEventListener('DOMMouseScroll', scrollingWheel, false);
		  }
		  window.onmousewheel = document.onmousewheel = scrollingWheel;
		  document.onkeydown = keydown;
		}

		function enableScrolling() {
			if (window.removeEventListener) {
				window.removeEventListener('DOMMouseScroll', scrollingWheel, false);
			}
			window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
		}
		
		function preventDefault(event) {
		  event = event || window.event;
		  if (event.preventDefault)
			  event.preventDefault();
		  event.returnValue = false;  
		}

		function keydown(event) {
			for (var i = keys.length; i--;) {
				if (event.keyCode === keys[i]) {
					preventDefault(event);
					return;
				}
			}
		}

		function scrollingWheel(e) {
		  preventDefault(e);
		}
	//END OF PREVENT SCROLLING
	//Gallery Edits
	$(".galleryAlign").append(function()	{
		$er12 = $(this).parent().height();
		$(this).css("height",$er12+"px");
		$(this).children(".wrap-col").css("height",$er12+"px");
		$(this).children(".wrap-col").children(".wrapper").css("height",$er12+"px");
		$er13 = $(this).children(".wrap-col").children(".wrapper").children("figure").height();	
		$(this).children(".wrap-col").children(".wrapper").children("figure").css("margin-top",(($er12/2)-($er13/2))+"px");
	});
	
	
	
	
	
	
});