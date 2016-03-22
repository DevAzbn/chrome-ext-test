var background_onAlarm = function(alarm) {
	
	console.log(msg);
	
	if(alarm.name) {
		
		switch(alarm.name) {
			
			case 'ping':{
				
				if(Azbn.__tabs) {
					for(var name in Azbn.__tabs) {
						var _n = Azbn.__tabs[name];
						for(var tab in _n) {
							var _t = _n[tab];
							
							t.postMessage({action:'ping',});
						}
					}
				}
				
			}
			break;
			
			default: {
				
			}
			break;
			
		}
		
	}
	
}