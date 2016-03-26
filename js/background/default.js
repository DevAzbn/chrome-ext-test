
var Azbn = new AzbnExt();

chrome.runtime.onConnect.addListener(function(tab) {
	var tab_arr = tab.name.split('@');
	
	if(tab_arr[0] == AzbnExtCfg.id) {
		
		Azbn.setTab(tab_arr[0], tab_arr[1], tab);
		
		tab.onMessage.addListener(function(msg) {
			background_onMessage(tab, tab_arr[1], msg);
		});
		
		tab.onDisconnect.addListener(function(){
			Azbn.unsetTab(tab_arr[0], tab_arr[1], tab);
		});
		
		tab.postMessage({action:'welcome',});
	}
});

chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.getSelected(null, function(tab){
		Azbn.notify({
			title : AzbnExtCfg.id,
			preview : tab.url,
		});
	});
});

chrome.alarms.onAlarm.addListener(function(alarm) {
	//if (alarm.name == 'noti') {}
	background_onAlarm(alarm);
});
 
chrome.alarms.create('ping', {
	delayInMinutes: 0.1,
	periodInMinutes: 1,
});

chrome.alarms.create('req2server', {
	delayInMinutes: 0.2,
	periodInMinutes: 1,
});

chrome.alarms.create('git_commits', {
	delayInMinutes: 0.2,
	periodInMinutes: 1,
});

/*
chrome.alarms.create('showActiveTab', {
	delayInMinutes: 0.3,
	periodInMinutes: 1,
});
*/




/*
код для создания скриншота
для использования удалить popup из манифеста

chrome.browserAction.onClicked.addListener(function(tab) {
	//chrome.tabs.executeScript(tab.id, {
	//	code: "(" + bg_test.toString() + ")();"
	//});
	console.log('!!!!!!!!!!!!!!!!!');
	
	chrome.tabs.captureVisibleTab(null, {format : 'png'}, function(dataUrl){
		//console.log(dataUrl);
		chrome.tabs.create({active: true, url: dataUrl});
	});
	
});






*/









/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo && changeInfo.status === 'complete' && tab.url.indexOf('://vk.com/') > -1) {
		chrome.tabs.executeScript({
			file: 'scripts/inject.js'
		});
	}
	console.log(tab);
});
*/


/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
	console.log(request);
	sendResponse({msg : 'azbn_test_response'});
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs.id, {msg : 'azbn_test'}, function(response) {
		console.log(response);
	});
});
*/


/*
chrome.contextMenus.create({
	"title" : "Rehost on vk.com",
	"type" : "normal",
	"contexts" : ["image"],
	"onclick" : getClickHandler(),
});
var getClickHandler = function() {
	
}


chrome.storage.local.set({'value': theValue}, function() {
	// Notify that we saved.
	message('Settings saved');
});
chrome.storage.local.get({\'vkaccess_token\': {}}, function(items) {});

chrome.storage.sync.get("month", function (obj) {
	if (obj.month!=null) {
		m = document.getElementById('Month');
		m.innerHTML += " "+obj.month; 
	}
});

chrome.storage.sync.set({'year': year});

chrome.storage.onChanged.addListener(function(changes, namespace) {
	for(key in changes) {
		var storageChange = changes[key];
		console.log('Storage key "%s" in namespace "%s" changed. ' +
			'Old value was "%s", new value is "%s".',
			key,
			namespace,
			storageChange.oldValue,
			storageChange.newValue);
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo && changeInfo.status === 'complete') {
		...
	}
});
*/