/**
 * Fonction qui calcule le nombre de billets et pièce dans un nombre mit en paramètre
 * @param money : number
 */
function countMoney(money:number):void
{
    let moneyTable:number[] = [500,200,100,50,20,10,5,2,1,.5,.2,.1,.05, .02,.01];
    let result:number = money;
    let count:number = 0;

    for (let index = 0; index < moneyTable.length; index++) {
        while(result - moneyTable[index] >= 0)
        {
            result = Math.floor((result - moneyTable[index]) * 100) / 100;
            count++;
        }
        if (moneyTable[index] > 2)
        {
            console.log(`Billets de ${moneyTable[index]} : ${count}`);  
        } else {
            console.log(`Pièces de ${moneyTable[index]} : ${count}`);  
        }
    }
}
countMoney(2132.23);
