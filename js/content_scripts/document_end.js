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
	
	$('#page_layout #page_body').bind("DOMSubtreeModified",function(){
		
		/*
		if($('body').attr('azbn-dom-change') == true) {
			$('body').attr('azbn-dom-change', false);
		} else {
			$('body').attr('azbn-dom-change', true);
			
			$('body').find('#ads_left').empty().remove();
			$('body').find('.feed-row .post[data-ad], .feed-row .post[data-ad-view]').closest('.feed-row').empty().remove();
			$('body').find('.feed-row .ads_ads_news_wrap').closest('.feed-row').empty().remove();
			
			$('body').attr('azbn-dom-change', true);
		}
		*/
		
		//$('#ads_left').empty().remove();
		//$('.feed-row .post[data-ad], .feed-row .post[data-ad-view]').trigger('click');
		
		
		//$('img').attr('src', 'http://entertain.teenee.com/img/09.gif');
	});
	
	/*
	bg.postMessage({
		action : 'document.ready',
	});
	*/
	
	//$('.im_editable').html('hahaha');
	//bg.Azbn.notify('Заголовок', 'Описание');
});
