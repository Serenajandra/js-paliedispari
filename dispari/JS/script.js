// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("scegli: pari o dispari?")
console.log (userChoice);
const userNumber = parseInt(prompt("Ora scegli un numero tra 1 e 5"));
console.log(userNumber);

let result ="";

// Genero numero random
randomNumber = Math.floor((Math.random())*5) + 1;
console.log (randomNumber); 

// function computerNumber(randomNumber) {
//     randomNumber = Math.floor((Math.random())*5) + 1;
//     alert(`il numero casuale dal computer è ${randomNumber}`);
//     console.log (randomNumber);
//     return randomNumber;
// }
// computerNumber (randomNumber);

// Sommo i due numeri
const sum = randomNumber + userNumber;
console.log(sum);

// Stabilisco se la somma è pari o dispari
if(sum % 2){
    result = "dispari"
} else{
    result = "pari"
}
console.log(result);

if(userChoice === result){
    alert("Complimenti! hai vinto")
} else{
    alert("mi dispiace, non hai vinto")
}


