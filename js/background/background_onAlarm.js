var background_onAlarm = function(alarm) {
	
	//console.log(alarm);
	
	if(alarm.name != '') {
		
		switch(alarm.name) {
			
			case 'ping':{
				
				if(Azbn.__tabs) {
					for(var name in Azbn.__tabs) {
						var _n = Azbn.__tabs[name];
						for(var tab in _n) {
							var _t = _n[tab];
							
							_t.postMessage({
								action : 'ping',
							});
						}
					}
				}
				
			}
			break;
			
			case 'req2server':{
				
				$.post(AzbnExtCfg.server_api,
					{
						app_key : AzbnExtCfg.server_api_key,
						service : 'online',
						method : 'check',
						check : 'test',
					},
					function(data){
						console.log(data);
					}
				);
				
			}
			break;
			
			default: {
				
			}
			break;
			
		}
		
	}
	
}