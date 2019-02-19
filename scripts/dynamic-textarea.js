var txt = document.getElementById("text");
hiddendiv = document.createElement("div");
content = null;
txt.className += " dynamic-textarea__noscroll";
hiddendiv.className += " dynamic-textarea__hiddendiv";
document.body.appendChild(hiddendiv);
txt.onkeyup = function(){
	content = txt.value;
	content = content.replace(/\n/g, '<br>');
	hiddendiv.innerHTML = content;
	txt.style.height = hiddendiv.offsetHeight+61+'px';
};

var event = new Event("keyup");
txt.dispatchEvent(event);
