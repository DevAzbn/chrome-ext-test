var AzbnExt = function(param) {
	
	this.__tabs = {};
	
	var ctrl = this;
	
	this.setTab = function(name, url, tab) {
		ctrl.__tabs[name] = {};
		ctrl.__tabs[name][url] = tab;
	};
	
	this.getTab = function(name, url) {
		if(ctrl.__tabs[name]) {
			var _name = ctrl.__tabs[name];
			
			if(_name[url]) {
				return _name[url];
			} else {
				return null;
			}
		} else {
			return null;
		}
	};
	
	this.lenTab = function(name) {
		var c = 0;
		if(ctrl.__tabs[name]) {
			for(var k in ctrl.__tabs[name]) {
				c++;
			}
		}
		return c;
	};
	
	this.notify = function(notify) {
		var notification = webkitNotifications.createNotification(
			'img/logo.png',
			notify.title,
			notify.preview
		);
		notification.show(); //отображение уведомления
	}
	
}