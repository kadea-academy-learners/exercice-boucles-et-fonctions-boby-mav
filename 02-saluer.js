function saluer (nom) {
  if (!nom) {
    console.log("Bonjour, inconnu");
  }
  else {
    console.log("Bonjour, " + nom);
  }
}
module.exports = { saluer };