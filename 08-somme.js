/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
   // Vérifie que n est un nombre entier positif
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) {
    return 0;
  }

  // Formule mathématique : somme de 1 à n = n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}
console.log(somme(-3)); 
// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
