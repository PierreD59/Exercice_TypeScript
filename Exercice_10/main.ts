/**
 * Retourne la valeur la plus proche de zero avec Math.min
 * @param degrees : number[]
 */
function celcius(...degrees:number[])
{
    console.log(`La température la plus proche de 0 est de ${Math.min(...degrees)} degrès`);
}

celcius(10,5,3, 4, 0);