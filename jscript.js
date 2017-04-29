function event(event, choice1, choice2, choice3){
	userChoice = prompt(event + "\n\n" +
  	"Vad vill du göra? Skriv in ditt val:" + "\n" +
	choice1 + "\n" +
	choice2 + "\n" +
	choice3 + "\n" + "\n" +
	"4. Avsluta").toLowerCase();
}

function start(){
	userChoice = "";

	while (userChoice != "stäng av tvn" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta"){
  	event("Du befinner dig hemma i vardagsrummet. Det är mörkt utomhus och TVn är påslagen. På soffbordet ser du ett tomt glas och en flaska vodka.",
		"1. Stäng av TVn",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

	if (userChoice === "stäng av tvn"){
		tvOff();
	} else if (userChoice === "gå utomhus") {
		goOut();
	} else if (userChoice === "fyll glaset med vodka") {
		pourVodka();
	} else if (userChoice === "avsluta") {
		alert("Hejdå!");
		window.close();
	}
}

function tvOff(){
	userChoice = "";

	while (userChoice != "sätt på tvn igen" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta"){
  	event("Du går fram till TVn och stänger av den. Det var den enda ljuskällan i rummet och nu är det så mörkt att du inte kan se någonting.",
		"1. Sätt på TVn igen",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

	if (userChoice === "sätt på tvn igen"){
		start();
	} else if (userChoice === "gå utomhus") {
		fallDeath();
	} else if (userChoice === "fyll glaset med vodka") {
		fallDeath();
	} else if (userChoice === "avsluta") {
		alert("Hejdå!");
		window.close();
	}
}

function goOut(){
	userChoice = "";

	while (userChoice != "gå tillbaka inomhus" && userChoice != "vandra ut i mörkret" && userChoice != "avsluta"){
  	event("Du kliver ut genom dörren. Snön glimmar i månskenet och det är tyst. Du förundras över naturen en stund men börjar snart darra av kyla.",
		"1. Gå tillbaka inomhus",
		"2. Vandra ut i mörkret", "",
		"3. Avsluta");
	}

	if (userChoice === "gå tillbaka inomhus"){
		start();
	} else if (userChoice === "vandra ut i mörkret") {
		coldDeath();
	} else if (userChoice === "avsluta") {
		alert("Hejdå!");
		window.close();
	}
}

function pourVodka(){
	userChoice = "";

	while (userChoice != "stäng av tvn" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta"){
  	event("Du fyller glaset med vodka och sveper allting på en gång. Eftersom du redan druckit lite tidigare så slår det här till rejält.",
		"1. Stäng av TVn",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

	if (userChoice === "stäng av tvn"){
		drunkDeath();
	} else if (userChoice === "gå utomhus") {
		drunkDeath();
	} else if (userChoice === "fyll glaset med vodka") {
		fallAsleep();
	} else if (userChoice === "avsluta") {
		alert("Hejdå!");
		window.close();
	}
}

function fallDeath(){
  	alert("Eftersom du inte kan se någonting så snubblar du över soffbordet, slår skallen i hyllkanten och dör. Gratulerar.");

  	start();
}

function coldDeath(){
  	alert("Du vandrar ut i den mörka kylan och vaggas långsamt till sömns av den frusna visslande vinden. Gratulerar.");

  	start();
}

function drunkDeath(){
  	alert("Du är yr som attan. Din fot fastnar i soffbordet och du slår ditt berusade huvud i hyllkanten. Gratulerar, du dog.");

  	start();
}

function fallAsleep(){
  	alert("Du sveper vodkan och nu kan du inte längre hålla dig vaken. Du däckar i soffan. Gratulerar! Du överlevde natten!");

  	start();
}

var userChoice;

start();