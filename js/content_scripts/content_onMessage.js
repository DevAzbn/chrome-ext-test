var content_onMessage = function(bg, url, msg) {
	
	console.log(msg);
	
	if(msg.action) {
		
		/*
		Azbn.notify({
			title : AzbnExtCfg.id,
			preview : msg.action,
		});
		*/
		
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