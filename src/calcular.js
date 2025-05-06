// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). 
// A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  const tryNumber1 = Number(num1);
  const tryNumber2 = Number(num2);
  if (isNaN(tryNumber1) || isNaN(tryNumber2)) {
    return "Erro: parâmetros inválidos";
  }
  switch(operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return "Erro: divisão por zero";
      } 
      return num1 / num2;
    default:
      return "Erro: operação inválida";
  }
}

module.exports = { calcular };