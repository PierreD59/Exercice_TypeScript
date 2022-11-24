/**
 * Fonction qui retourne une perte ou un gain en fonction des nombres mit en paramètre
 * @param manufacturingCost: number
 * @param soldCost: number
 * @returns result
 */
function gainOrLoss(manufacturingCost:number, soldCost:number):string
{
    let result:number = Math.abs(manufacturingCost - soldCost);
    if(manufacturingCost > soldCost)
    {
        return `Perte de ${result}€`;
    } else if (manufacturingCost < soldCost)
    {
        return `Gain de ${result}€`;
    } else {
        return `Vous avez rien perdu ni gagné`;
    }
}
console.log(gainOrLoss(15, 25));