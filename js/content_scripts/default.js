/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(sender.tab ? "from a content script: " + sender.tab.url : "from the extension");
	console.log(request);
	sendResponse({msg : 'azbn_test_response'});
});

chrome.runtime.sendMessage({msg : 'azbn_test'}, function(response) {
	console.log(response);
});
*/

var Azbn = new AzbnExt();
var bg;

$(document).ready(function(){
	//alert('test');
	console.log('Init: ' + window.location.href);
	
	bg = chrome.runtime.connect({name : AzbnExtCfg.id + '@' + window.location.href});
	
	bg.onMessage.addListener(function(msg) {
		content_onMessage(bg, window.location.href, msg);
	});
	
	/*
	bg.postMessage({
		action : 'document.ready',
	});
	*/
	
	//$('.im_editable').html('hahaha');
	//bg.Azbn.notify('Заголовок', 'Описание');
});
