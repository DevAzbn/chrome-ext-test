
var Azbn = new AzbnExt();

chrome.runtime.onConnect.addListener(function(tab) {
	var tab_arr = tab.name.split('@');
	
	if(tab_arr[0] == AzbnExtCfg.id) {
		console.log('connected by filter ' + tab.name);
		
		Azbn.setTab(tab_arr[0], tab_arr[1], tab);
		
		tab.onMessage.addListener(function(msg) {
			background_onMessage(tab, tab_arr[1], msg);
		});
		
		tab.postMessage({action:'welcome',});
		
	}
});


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
chrome.browserAction.onClicked.addListener(function(tab) {
	
	chrome.tabs.executeScript(tab.id, {
		code: "(" + bg_test.toString() + ")();"
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