var a,b;
function setValues() {
a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);
}

function sum() {
	setValues();
	result = a + b;
	alert("equals to "+result);
}
function rest() {
	setValues();
	result = a - b;
	alert("equals to "+result);
}
function mult() {
	setValues();
	result = a * b;
	alert("equals to "+result);
}
function div() {
	setValues();
	result = a / b;
	alert("equals to "+result);
}