/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  if ( arguments.length !==3|| (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')) {
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  return null;
}
if (a === b && b === c) {
  return "Les trois nombres sont égaux";
}
return a > b && a > c ? a : b > a && b > c ? b : c;
}
console.log(maxDeTrois(3)); // "Les trois nombres sont égaux"
// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };

