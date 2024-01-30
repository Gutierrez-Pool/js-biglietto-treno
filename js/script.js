let kmNumber = Number (prompt(`Quanti km devi percorrere?`));

kmNumber = Number (kmNumber);



let age = Number (prompt("Quanti anni hai?"));

age = Number (age);



const basePrice = 0.21 * kmNumber;

let finalPrice = basePrice;


if (age < 18) {

    finalPrice = basePrice * 0.2;

} else if (age >= 65) {

    finalPrice = basePrice - basePrice * 0.4;
}


document.getElementById("result").innerHTML = 

    "Il prezzo del tuo biglietto è di € " + finalPrice.toFixed(2) + ".";