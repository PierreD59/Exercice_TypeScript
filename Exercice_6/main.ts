/**
 * Fonction qui additionne un nombre indéfinit de note et en fait une moyenne. Si une note est inférieur à 0 ou supérieur à 20, la note n'est pas prit en compte.
 * @param notes : number
 * @returns sum
 */
function calMoyEleve(...notes: number[]): number {
  let sum: number = 0;
  notes.forEach((note) => {
    if (note < 0 || note > 20) {
      console.log(note + "Ce n'est pas une note valide");
    } else {
      sum += note;
    }
});
return sum / notes.length;
}
/**
 * Fonction qui affiche une mention en fonction de la moyenne de l'élève.
 * @param eleve :string
 * @param notes :number
 * @returns console.log mention
 */
function mentionEleve(eleve: string, ...notes: number[]): void {
  let moy = calMoyEleve(...notes);
  switch (true) {
    case moy <= 4:
      return console.log(`${eleve}, c'est catastrophique !`);
      break;
    case moy <= 10:
      return console.log(`${eleve}, c'est insuffisant !`);
      break;
    case moy <= 14:
      return console.log(`${eleve}, c'est passable !`);
      break;
    case moy <= 18:
      return console.log(`${eleve}, c'est bien !`);
      break;
    case moy <= 20:
      return console.log(`${eleve}, c'est très bien !`);
      break;
  }
}
mentionEleve("Pierre", 15, 15, 14, 1, 16, 20);
