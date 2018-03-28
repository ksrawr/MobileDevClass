function SaveItem() {
	//localStorage.setItem(name, data);
	var name = document.forms.ShoppingList.name.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	ShowAll();
}

function ModifyItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.getItem(name);
	//localStorage.getItem(name);
	localStorage.getItem(name);
	ShowAll();
}

function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	//localStorage.removeItem(name);
	localStorage.removeItem(name);
	ShowAll();
}

function ClearAll() {
	localStorage.clear();
	ShowAll();
}

function ShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>";
			//list += key + localStorage.getItem(key);
		}
		document.getElementById('list').innerHTML = list;
	}
	else {
		alert("Cannot store shopping list. Your browser does not support local storage")
	}
}

function CheckBrowser() {
	if('localStorage' in window && window ['localStorage'] !== null) {
		// we can use local storage
		console.log('local storage works');
		return true;
	}
	else {
		return false;
	}
}