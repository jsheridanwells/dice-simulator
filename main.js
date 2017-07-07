//select output
var out = document.getElementById('output');

//select button
var button = document.getElementById('button');


//create dice object
function roll() {
	return Math.ceil(Math.random() * 6);
}

//connect function to button
button.onclick = function() {
	out.innerText = roll();
};