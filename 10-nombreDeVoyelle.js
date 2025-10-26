/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  if (typeof phrase !== 'string') {
    return 0;
  }

  const voyelles = ['a', 'e', 'i', 'o', 'u']; // sans 'y'
  let compteur = 0;
  const phraseMin = phrase.toLowerCase(); // <-- correction ici

  for (let char of phraseMin) {
    if (voyelles.includes(char)) {
      compteur++;
    }
  }
  return compteur;
}

console.log(nombreDeVoyelles("Bonjour")); 
module.exports = { nombreDeVoyelles };

