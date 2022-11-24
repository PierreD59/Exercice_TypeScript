/**
 * Fonction qui retourne le plus grand nombre mit en paramètre
 * @param numb: number[]
 * @returns Math.max(numb)
 */
function whoIsBigger(...numb:number[]):number
{
    return Math.max(...numb);
}
console.log(whoIsBigger(3,6,4));