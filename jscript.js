//Denna funktion visar en prompt där användaren kan skriva in sitt val. Funktionen tar 4 parametrar, händelsen och de olika val användaren har.
function event(event, choice1, choice2, choice3){
	userChoice = prompt(event + "\n\n" +
  	"Vad vill du göra? Skriv in ditt val:" + "\n" +
	choice1 + "\n" +
	choice2 + "\n" +
	choice3 + "\n" + "\n" +
	"4. Avsluta").toLowerCase();//Konverterar det användaren skriver till gemener.
}

//Första dialogen för spelet
function start(){
	userChoice = ""; //Återställer userChoice så att tidigare val inte påverkar den kommande while-loopen.

//Repeterar prompten tills användaren har skrivit in ett korrekt val
	while (userChoice != "stäng av tvn" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta" &&
		userChoice != "1" && userChoice != "2" && userChoice != "3" && userChoice != "4"){
  	event("Du befinner dig hemma i vardagsrummet. Det är mörkt utomhus och TVn är påslagen. På soffbordet ser du ett tomt glas och en flaska vodka.",
		"1. Stäng av TVn",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

//Använder användarens val för att bestämma vilken dialog som ska komma härnäst. Kallar sedan på den funktion som håller i dialogen.
	if (userChoice === "stäng av tvn" || userChoice === "1"){
		tvOff();
	} else if (userChoice === "gå utomhus" || userChoice === "2") {
		goOut();
	} else if (userChoice === "fyll glaset med vodka" || userChoice === "3") {
		pourVodka();
	} else if (userChoice === "avsluta" || userChoice === "4") {
		alert("Hejdå!");
		window.close();
	}
}

//Fungerar likadant som funktionen start();
function tvOff(){
	userChoice = "";

	while (userChoice != "sätt på tvn igen" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta" &&
		userChoice != "1" && userChoice != "2" && userChoice != "3" && userChoice != "4"){
  	event("Du går fram till TVn och stänger av den. Det var den enda ljuskällan i rummet och nu är det så mörkt att du inte kan se någonting.",
		"1. Sätt på TVn igen",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

	if (userChoice === "sätt på tvn igen" || userChoice === "1"){
		start();
	} else if (userChoice === "gå utomhus" || userChoice === "2") {
		fallDeath();
	} else if (userChoice === "fyll glaset med vodka" || userChoice === "3") {
		fallDeath();
	} else if (userChoice === "avsluta" || userChoice === "4") {
		alert("Hejdå!");
		window.close();
	}
}

//Fungerar likadant som funktionen start();
function goOut(){
	userChoice = "";

	while (userChoice != "gå tillbaka inomhus" && userChoice != "vandra ut i mörkret" && userChoice != "avsluta" &&
		userChoice != "1" && userChoice != "2" && userChoice != "3"){
  	event("Du kliver ut genom dörren. Snön glimmar i månskenet och det är tyst. Du förundras över naturen en stund men börjar snart darra av kyla.",
		"1. Gå tillbaka inomhus",
		"2. Vandra ut i mörkret", "",
		"3. Avsluta");
	}

	if (userChoice === "gå tillbaka inomhus" || userChoice === "1"){
		start();
	} else if (userChoice === "vandra ut i mörkret" || userChoice === "2") {
		coldDeath();
	} else if (userChoice === "avsluta" || userChoice === "3") {
		alert("Hejdå!");
		window.close();
	}
}

//Fungerar likadant som funktionen start();
function pourVodka(){
	userChoice = "";

	while (userChoice != "stäng av tvn" && userChoice != "gå utomhus" && userChoice != "fyll glaset med vodka" && userChoice != "avsluta" &&
		userChoice != "1" && userChoice != "2" && userChoice != "3" && userChoice != "4"){
  	event("Du fyller glaset med vodka och sveper allting på en gång. Eftersom du redan druckit lite tidigare så slår det här till rejält.",
		"1. Stäng av TVn",
		"2. Gå utomhus",
		"3. Fyll glaset med vodka");
	}

	if (userChoice === "stäng av tvn" || userChoice === "1"){
		drunkDeath();
	} else if (userChoice === "gå utomhus" || userChoice === "2") {
		drunkDeath();
	} else if (userChoice === "fyll glaset med vodka" || userChoice === "3") {
		fallAsleep();
	} else if (userChoice === "avsluta" || userChoice === "4") {
		alert("Hejdå!");
		window.close();
	}
}

//Alla följande funktioner är "endgame-screens" så de visar bara upp en alert med infomation om vad som har hänt.
//Därefter kallas funktionen start() och spelet börjar från första dialogrutan igen.
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

var userChoice; //Variabel som håller i användarens val.

start();//Kallar på funktionen med den första dialogen och startar alltså spelet.