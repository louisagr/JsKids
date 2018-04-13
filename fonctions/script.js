/* PREMIERE FONCTION :
// DEFINITION DE LA FONCTION
var maPremiereFonction = function () {
  console.log("Bonjour tout le monde !");
};
// APPELLE LA FONCTION
maPremiereFonction();
*/

/* ANATOMIE DES ARGUMENTS DE FONCTION
function (argument) {
  console.log("Mon argument est:" + argument);
}
//
var ditBonjourA = function (nom) {
  console.log("Bonjour " + nom + " !");
};
ditBonjourA("Louis");
*/

/* EXERCICE ARGUMENT DE FONCTION
var dessinerChats = function (combienDeFois) {
  for (var i = 0; i < combienDeFois; i++) {
    console.log(i + " =^.^=");
  }
}
dessinerChats(100);
*/


/* FUNCTION AVEC PLUSIEURS ARGUMENTS
var dessinerPlusieursFois = function(combienDeFois, quoiDessiner) {
// POUR UNE VARIBALE "i" AVEC UNE VALEUR DE "0",
// TANT QUE "i" EST INFERIEUR A COMBIEN DE FOIS,
// ON INCREMENTE LA VALEUR DE LA VARIABLE "i" D'UNE UNITE
  for (var i = 0; i <= combienDeFois; i++) {
    console.log(i + " " + quoiDessiner);
  }
};
// ON DONNE A LA FONCTION UN ARGUMENT "5" AVEC UNE VALEUR "combienDeFois"
// ET UN ARGUMENT "=^.^=" AVEC UNE VALEUR QUOI DESSINER
dessinerPlusieursFois(5, "=^.^=");
*/

/*
// EXERCICE RENVOI DE VALEUR
// LA FONCTION "double" PREND UN ARGUMENT "nombre",
var double = function (nombre) {
// LA FONCTION "double" RENVOIE LE RESULTAT de "nombre" * 2,
  return nombre * 2;
};
// ON PEUT UTLISER LA FONCTION POUR MULTIPLIER PAR 2 L'ARGUMENT DE LA FONCTION
double(3);
// ON PEUT APPELLER PLUSIEURS FOIS LA FONCTION "double", PAR EXEMPLE:
double(5) + double(6); ==> CORRESPOND à 2*5 + 2*6 / 10 + 12
// RENVERRA LA VALEUR 22,
double(double(3));
// RENVERRA LA VALEUR 12
*/

/*
var choisirMotaleatoire = function(mots) {
  return mots[Math.floor(Math.random() * mots.length)];
};
var motsAleatoires = ["Planète", "Ver de terre", "Fleur", "Ordinateur"];
choisirMotaleatoire(motsAleatoires);
*/
/* EXO QUITTER UNE FONCTION AVEC RETURN
var cinquiemeLettre = function (nom) {
  if (nom.length < 5) {
    return;
  }
  return "La cinquième lettre de ton prénom est " + nom[4] + ".";
}
*/
/*
var medailleSelonScore = function (score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Argent";
  }
  return "Or";
};
*/
var double = function (nombre) {
  retun nombre * 2;
}
function double(nombre) {
  return nombre * 2;
}
