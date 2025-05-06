// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  const tryNumberNota = Number(nota);
  if (nota < 0 || nota > 10 || isNaN(tryNumberNota)) {
    return "Nota inválida";
  } else if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }

}

module.exports = { classificarNota };