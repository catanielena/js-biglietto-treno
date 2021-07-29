// Stazione di partenza
var departureStation = prompt('Inserisci la stazione di partenza');
document.getElementById('from').innerHTML = departureStation;
// Stazione di arrivo
var departureStation = prompt('Inserisci la stazione di arrivo');
document.getElementById('to').innerHTML = departureStation;
// Numero km che si vuole percorrere
var kmToTravel = parseInt( prompt('Inserisci i km da percorrere'));
document.getElementById('km-To-Travel').innerHTML = kmToTravel;
// Nome passeggero
var passengerFirstname = prompt('Inserisci il nome del passeggero');
document.getElementById('passenger-Firstname').innerHTML = passengerFirstname;
// Cognome passeggero
var passengerLastname = prompt('Inserisci il cognome del passeggero');
document.getElementById('passenger-Lastname').innerHTML = passengerLastname;

// Età del passeggero
// var passengerAge = parseInt(prompt('Inserisci l\'età del passeggero'));
var passengerBirthday = new Date(prompt('Inserisci la data di nascita del passeggero (ex. 23 October 1996)'));
var data = new Date();
var curreantY = data.getFullYear();
var passengerAge = (curreantY - passengerBirthday.getFullYear());

var m = data.getMonth() - passengerBirthday.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
{
    passengerAge--;
}

document.getElementById('passenger-Birthday').innerHTML = passengerBirthday;
console.log(passengerAge)
// Prezzo del biglietto in base ai km (0.21 € al km)
var fare = kmToTravel * 0.21;
// Condizioni di sconto (20% per i minorenni, 40% per gli over 65)
if (passengerAge < 18) {
    fare -= fare * 0.2;
} else if (passengerAge > 65) {
    fare -= fare * 0.4;
}
// Output
fare = fare.toFixed(2) + "€";
document.getElementById('fare').innerHTML = fare;
