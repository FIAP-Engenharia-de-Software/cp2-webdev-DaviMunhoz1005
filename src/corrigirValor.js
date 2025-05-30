// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. 
// Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  const tryNumber = Number(valor);
  if (isNaN(tryNumber) || tryNumber == undefined) {
    return "Valor inválido";
  }
  return tryNumber;
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };