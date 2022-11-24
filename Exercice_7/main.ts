/**
 *  Fonction qui prend en paramètre deux nombres et un opérateur et fait un calcul en fonction de l'opérateur
 * @param num1 :number
 * @param operator :string
 * @param num2 :number
 * @returns num1 operator num2
 */
function calculNumbers(num1: number, operator: string, num2: number): number|string {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*")
  {
    return num1 * num2;
  } else if (operator == "/")
  {
    return num1 / num2;
  } else
  {
    return "Pas le bon opérateur !";
  }
}
console.log(calculNumbers(5, "ti", 6));

