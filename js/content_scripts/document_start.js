/*

*/

var Azbn = new AzbnExt();
var bg;

document.addEventListener('DOMContentLoaded', function(){
	
	var s;
	
	s = document.getElementsByTagName('script');
	if(s.length) {
		for(var i = 0; i < s.length; i++) {
			
			var item = s[i];
			var html = item.innerHTML;
			var src = item.getAttribute('src');
			
			if(html) {
				if(
					html.indexOf('siteheart.com/widget') > -1 ||
					html.indexOf('mc.yandex.ru/metrika') > -1
					) {
					item.remove();
				}
			}
			
			if(src) {
				if(
					src.indexOf('siteheart.com/widget') > -1
					) {
					item.remove();
				}
			}
			
		}
	}
	
	s = document.getElementsByTagName('iframe');
	if(s.length) {
		for(var i = 0; i < s.length; i++) {
			
			var item = s[i];
			var src = item.getAttribute('src');
			
			if(src) {
				if(
					src.indexOf('siteheart.com/widget') > -1
					) {
					item.remove();
				}
			}
			
		}
	}
	
	s = document.getElementsByTagName('noscript');
	if(s.length) {
		for(var i = 0; i < s.length; i++) {
			
			var item = s[i];
			var html = item.innerHTML;
			
			if(html) {
				if(html.indexOf('mc.yandex.ru/watch') > -1) {
					item.remove();
				}
			}
			
		}
	}
	
}, false);