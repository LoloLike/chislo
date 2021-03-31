let secretNumber =	getRandomInt(1,10);
let attempts = 3;

document.querySelector("input").focus();

function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".check").onclick = function() {
	let userNumber = document.querySelector("input").value;
	document.querySelector("input").focus();
	if (secretNumber == userNumber) {
		document.querySelector(".hint").innerHTML = "вы победили";
	} else if (secretNumber < userNumber) {
		document.querySelector(".hint").innerHTML = "загаданное число меньше";
	} else if (secretNumber > userNumber) {
		document.querySelector(".hint").innerHTML = "загаданное число больше";
	}; 
	attempts--;
		document.querySelector(".attempts").innerHTML = attempts;
	if (attempts == 0) {
		document.querySelector(".hint").innerHTML = "вы проиграли";
		document.querySelector(".check").disabled = true;
		document.querySelector("input").disabled = true;
	};
};

document.querySelector(".new_game").onclick = function() {
	getRandomInt(1,10); 
	attempts = 3;
	document.querySelector(".attempts").innerHTML = attempts;
	document.querySelector(".check").disabled = false;
	document.querySelector("input").disabled = false;
	document.querySelector(".hint").innerHTML = "Я буду подсказывать"
	document.querySelector("input").value = "";
	document.querySelector("input").focus();
};


// if (3 == 4) {
// 	console.log("правда")
// } else {
// 	console.log("ложь")
// }

