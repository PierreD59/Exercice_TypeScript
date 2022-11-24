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
