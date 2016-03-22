var content_onMessage = function(bg, url, msg) {
	
	console.log(msg);
	
	if(msg.action) {
		
		switch(msg.action) {
			
			case 'welcome':{
				bg.postMessage({
					action : 'document.ready',
				});
			}
			break;
			
			default: {
				
			}
			break;
			
		}
		
	}
	
}