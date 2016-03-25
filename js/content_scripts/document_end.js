var Azbn = new AzbnExt();
var bg;

$(document).ready(function(){
	//alert('test');
	console.log('Init: ' + window.location.href);
	
	bg = chrome.runtime.connect({name : AzbnExtCfg.id + '@' + window.location.href});
	
	bg.onMessage.addListener(function(msg) {
		content_onMessage(bg, window.location.href, msg);
	});
	
	$('#page_layout #page_body').bind("DOMSubtreeModified",function(){
		
	});
	
});
