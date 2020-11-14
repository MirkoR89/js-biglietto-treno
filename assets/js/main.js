// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere.
var numberKm = prompt("Quanti kilometri hai indenzione di percorrere?");

// Il programma dovrà chiedere all’utente l’età del passeggero.
var age = prompt("Quanti anni hai?");

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto  definito in base ai km (0.21 € al km).
var priceTrip = numberKm * 0.21

// Applicare uno sconto del 20% per i minorenni e del 40% per gli over 65.
var dicountUnder18 = (priceTrip - (priceTrip * 20)/ 100);
var diocountOver65 = (priceTrip - (priceTrip * 40)/ 100);

if (age < 18) {
  alert("Il costo del tuo bigglietto è di Eur" + " " + dicountUnder18);
} else if (age > 65) {
   alert("Il costo del tuo bigglietto è di Eur" + " " + diocountOver65);
} else {
   alert("Il costo del tuo bigglietto è di Eur" + " " + priceTrip);
}

//console.log(numberKm, age, priceTrip, dicountUnder18, diocountOver65);
