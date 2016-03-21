
var param = {};
var Azbn = new AzbnExt();

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