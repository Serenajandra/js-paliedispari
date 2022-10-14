// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


const userWord =prompt("Per favore, inserisci una parola");
console.log(userWord);
let userWordRight = ""
let userWordLeft = ""

// Scompongo la parola in un Array composto dalle sue sillabe
for (let i = 0; i < userWord.length; i++){
    console.log(userWord[i]);
    userWordRight = userWord[i];
}

// Creo un altro array con la stessa parola ma composto dalle sillabe in senso inverso
for (let j = userWord.length - 1; j>=0; j--) {
    console.log(userWord[j]);
    userWordLeft = userWord[j];
}

// Confronto i due nuovi array creati

if (userWordRight === userWordLeft){
    alert("hai scelto una parola palindroma!")
} else{
    alert("Peccato, speravo scegliessi una parola palindroma.")
};
