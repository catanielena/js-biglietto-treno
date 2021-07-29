// 1. Numero km che si vuole percorrere
var kmToTravel = parseInt( prompt('Inserisci i km da percorrere'));
// 2. Età del passeggero
var passengerAge = parseInt(prompt('Inserisci l\'età del passeggero'));
// 3. Prezzo del biglietto in base ai km (0.21 € al km)
var fare = kmToTravel * 0.21;
// 4. Condizioni di sconto (20% per i minorenni, 40% per gli over 65)
if (passengerAge < 18) {
    fare -= fare * 0.2;
} else if (passengerAge > 65) {
    fare -= fare * 0.4;
}
// 5. Output
fare = fare.toFixed(2) + "€";
// document.getElementById('fare').innerHTML += fare;
alert("Costo totale del biglietto: " + fare);