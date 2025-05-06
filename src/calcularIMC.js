// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  const tryNumberPeso = Number(peso);
  const tryNumberAltura = Number(altura);

  if (isNaN(tryNumberPeso) || isNaN(tryNumberAltura) || 
  tryNumberPeso == 0 || tryNumberAltura == 0) {
    return "Erro";
  }
  
  const imc = peso / (altura * altura)

  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 24.9) {
    return "Peso normal";
  } else if (imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30) {
    return "Obesidade";
  } else {
    return "Erro";
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };