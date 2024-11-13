// const km = 150.7;
// const age = 70;

const km = parseFloat(prompt("Inserire quanti km si dovranno percorrere"));
console.log("Si percorranno: " + km + "Km");

const age = parseInt(prompt("Inserire la tua età"));
console.log("Hai: " + age + " anni");

let price = km * 0.21;

if (age<18){
  price*=0.8; //20% di sconto
  console.log("Sei minorenne per cui ti viene applicato uno sconto del 20%");
} else if(age>=65) {
  price*=0.6; //40% di sconto
  console.log("Sei over65 per cui ti viene applicato uno sconto del 40%");
}

console.log("Il prezzo del tuo biglietto è: "+ price.toFixed(2) + "€");  //arrotondamento a 2 numeri decimali per i centesimi