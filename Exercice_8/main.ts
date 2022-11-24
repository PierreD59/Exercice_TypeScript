/**
 * Fonction qui utilise deux boucle. L'une pour incrémenter, l'autre pour décrémenter. La fonction repeat est utilisée pour ajouter un caractère.
 * @param number :number
 */
function pyramide(number: number) {
  for (let index = 0; index <= number; index++) {
    console.log("*".repeat(index));
  }
  for (let index = number + 1; index > 0; index--) {
    console.log("*".repeat(index));
  }
}
pyramide(5);
