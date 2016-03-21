var AzbnExt = function(param) {
	
	this.__tabs = {};
	
	this.ctrl = this;
	
	this.regAsTab = function(id, win) {
		this.__tabs[id] = win;
	};
	
	this.notify = function(title, preview) {
		var notification = webkitNotifications.createNotification(
			'img/logo.png', //название картинки, которая будет отображаться в уведолмнеии 
			title, //заголовок уведомления
			preview  //описание уведомления
			);
		notification.show(); //отображение уведомления
	}
	
}