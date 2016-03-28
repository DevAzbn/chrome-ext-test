var background_onAlarm = function(alarm) {
	
	//console.log(alarm);
	
	var last_commit = {};
	
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
			
			case 'showActiveTab':{
				
				chrome.tabs.getSelected(null, function(tab){
					Azbn.notify({
						title : AzbnExtCfg.id,
						preview : tab.url,
					});
				});
				
			}
			break;
			
			case 'git_commits':{
				
				$.getJSON('https://api.github.com/repos/dorohov/chesterpub/commits',
					{
						
					},
					function(data){
						
						//console.log('git_commits');
						
						if(data.length > 0) {
							var last = data[0];
							
							if(last_commit[last.sha]) {
								
							} else {
								
								Azbn.notify({
									title : last.commit.committer.email,
									preview : last.commit.message,
								});
								
								last_commit[last.sha] = last;
								
							}
							
						}
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