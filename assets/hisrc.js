/*
 * Hisrc jQuery Plugin
 *
 * Copyright (c) 2011 "@1marc" Marc Grabanski
 * Licensed under the MIT license.
 * 
 */

(function($){
	$.hisrc = {
		els: $(),
		init: false
	}
	
	$.hisrc.defaults = {
		// change minimum width, if you wish
		minwidth: 640
	}


	$.fn.hisrc = function(options) {
		var settings = $.extend({}, $.hisrc.defaults, options);

		// check bandwidth via @Modernizr's network-connection.js 
		var connection = navigator.connection || { type: 0 }; // polyfill
		if (connection.type == 3 
			|| connection.type == 4 
			|| /^[23]g$/.test(connection.type) ) {
				connection = 1;
		}
			
		$.hisrc.els = $.hisrc.els.add(this);
		
		if (!$.hisrc.init) {
			$(window).on('resize.hisrc', function(){
				$.hisrc.els.trigger('swapres.hisrc');
			});
		}
		
		return this.each(function(){
			$(this).data('lowsrc', $(this).attr('src'));
			
			$(this)
				.on('swapres.hisrc', function(){
					if (connection == 1) {
						$(this).attr('src', $(this).data('lowsrc'));
					} else if ($(window).width() > settings.minwidth) {
						$(this).attr('src', $(this).data('hisrc'))
					} else {
						$(this).attr('src', $(this).data('lowsrc'));
					}
				})
				.trigger('swapres.hisrc');
		})
			
	}
})(jQuery);


