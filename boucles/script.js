/*
for (var x = 3; x < 10000;x = x * 3) {
  console.log(x);
}
Pour une variable "x" avec une valeur de "3",
Tant que "x" est inférieur à "10.000",
"x" est égal à "x" multiplié par "3". */

/*
var animaux = ["Chat", "Poisson", "Lémurien", "Dragon de Komodo"];
for (var i = 0 ; i < animaux.length; i++) {
    console.log(animaux[i] + " Génial !");
}
Pour une variable "i" avec une valeur de 0,
Tant que "i" est inférieur au nombre d'éléments du tableau "animaux",
Alors "i" est incrémenté d'une unité. */

/*
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var chaineAleatoire = "";
var chaineLongueur = 26;
for (var i = 0; i < chaineLongueur; i++) {
  chaineAleatoire += alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(chaineAleatoire);
}
Pour une variable "i" avec une valeur de "0",
Tant que "i" est inférieur à la valeur de "chaineLongueur" (26),
Alors "i" est incrémenté d'une unité.
A la variable "chaineAleatoire", on rajoute un nombre entier aléatoire
compris dans la longueur de la valeur de la variable "alphabet".
*/

/*
var entree = "javascript, c'est super cool.";
var sortie = "";
for (var i = 0; i < entree.length; i++) {
  if (entree[i] === "a") {
    sortie += "4";
  } else if (entree[i] === "i") {
    sortie += "1";
  } else if (entree[i] === "e") {
    sortie += "3";
  } else if (entree[i] === "o") {
    sortie += "0";
  } else {
    sortie += entree[i];
  }
}
console.log(sortie);
Pour une variable "i" avec une valeur de "0",
Tant que "i" est inférieur à la longueur de la valeur de la variable "entree",
"i" est incrémenté d'une unité.
  Si la lettre de la valeur est strictement égale à "a",
  Alors elle est remplacée par "4"
  ...
*/
