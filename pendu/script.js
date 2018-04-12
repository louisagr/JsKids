/*
var nom = prompt("Quel est ton nom ?");
console.log("Bonjour " + nom) ;

var aimeLesChats = confirm("Aimes-tu les chats ?");
if (aimeLesChats) {
  console.log("┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴");
} else {
  console.log("ᕙ(⇀‸↼‶)ᕗ");
}

---> PSEUDO CODE <---
Choisir un mot au hasard
while le mot n'a pas été deviné {
Afficher la progression du joueur
Récupérer un essai du joueur

if le joueur veut quitter la partie {
Quitter la partie
}
else if la réponse du joueur contient plus d'une lettre {
Demander au joueur de saisir une seule lettre
}
else {
if la réponse du joueur est dans le mot secret {
Mettre à jour le tableau de réponses avec la nouvelle réponse
}
}
}
Féliciter le joueur pour avoir deviné le mot secret
*/


var nom = prompt("Nom ou Pseudo");
console.log("Coucou " + nom);
// TABLEAU DE MOTS
var mots = ["arinfo", "javascript", "chaton", "bonjour", "développement", "pasteque", "violon", "rachitique", "puzzle"];
// CHOISIR UN MOT AU HASARD
var motSecret = mots[Math.floor(Math.random() * mots.length)];
// TABLEAU DE REPONSES
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
  tableauReponses[i] = "_";
}
var nombreLettresManquantes = motSecret.length;
var essais = 15;
// BOUCLE DE JEU
while (nombreLettresManquantes > 0 && essais > 0 ) {
// AFICHER LA PROGRESSION DU JOUEUR
  alert(tableauReponses.join(" "));
// RECUPERER UN ESSAI DU JOUEUR
  var reponse = prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.");
  if(reponse === null) {
// QUITTER LA BOUCLE DE JEU
    break;
  } else if (reponse.length !== 1) {
    alert("Tu ne dois saisir qu'une seule lettre.");
  } else {
    essais--;
    reponse = reponse.toLowerCase();
// METTRE A JOUR L'ETAT DE LA PARTIE
    for (var j = 0; j < motSecret.length; j++) {
      if (motSecret[j] === reponse) {
        tableauReponses[j] = reponse;
        nombreLettresManquantes--;
      }
    }
  }
// FIN DE LA BOUCLE DE JEU
}
// AFFICHER LE MOT SECRET ET FELICITER LE JOUEUR GAGNANT
alert(tableauReponses.join(" "));
if (essais > 0) {
alert("Bravo " + nom + " ! Le mot à trouver est bien " + motSecret);
} else {
  alert("Dommage " + nom + " !" + " Le mot à trouver était " + motSecret);
}
