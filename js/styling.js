$(document).ready(function() {
	tabs.init();
	$.fn.preload = function() {
		this.each(function(){
			$('<img/>')[0].src = this;
		});
	}	
	$(['../images/menu_icon1_active.gif','../images/menu_icon3_active.gif','../images/menu_icon4_active.gif','../images/menu_icon5_active.gif']).preload();
	//MENU ICONS PRELOADED HERE
})