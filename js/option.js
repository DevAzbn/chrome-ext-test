var storage = chrome.storage.local;

/*
pb = {}; 
pb.addBlock = function (value) {
	storage.get('block', function (item) {
		item = item.block || [];
//тут я и попался переменная item ссылается на объект 'block' в котором будет массив, а не сам массив
		item.push(value);
//.push() на объект как раз и выкинет в следствии ту ошибку
		storage.set({block: item});
	});
	};
*/

$(document).ready(function(){
	
	//функция установки значений полей согласно сохраненным опциям в localStorage
	var restore_options = function(){
		var name = $(this).attr('name');
		if (localStorage[name] !== undefined) {
			$(this).val(localStorage[name]);
		} else {
			localStorage[name] = $(this).val()
		}
	};
	
	//устанавливаем значения полей (инпетов и селектов)
	$('input[type!="submit"]').each(restore_options);
	$('select').each(restore_options);
	
	//функция сохранения значений полей в localStorage
	var save_options = function(){
		var name = $(this).attr('name');
		localStorage[name] = $(this).val();
	};
	
	//по клику на сабмит сохраняем поля и выводим окно с сообщением OK
	$('input[type="submit"]').click(function(){
		$('input[type!=submit]').each(save_options);
		$('select').each(save_options);
		console.log('saved');
	});
	
});