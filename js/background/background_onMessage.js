var background_onMessage = function(tab, url, msg) {
	
	console.log(msg);
	
	if(msg.action) {
		
		switch(msg.action) {
			
			case 'document.ready':{
				console.log('Page ' + url + ' is ready');
				//chrome.browserAction.setBadgeText({text : '' + Azbn.lenTab(AzbnExtCfg.id),});
			}
			break;
			
			default: {
				
			}
			break;
			
		}
		
	}
	
}