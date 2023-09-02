"use strict";
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "20", 30, "40", 50, 3];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));
// console.log(maiorQue10(valores));
// O typescript já faz define o tipo do dado array usando o union type entre todos os tipos que estão dentro do array.
// no segundo caso vai estar como (number | string)[] os Colchetes indica que é de fato um array.
const dados = [
    ["O Senhor dos Anéis", 80],
    ["A Guerra dos Tronos", 120],
];
// A inferencia automática vai funcionar e o tipo dela vai ser (number | string)[][].
const arrayFrutas = ["banana", "melão", "morango"];
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>Nome da aula: <span style="color: ${curso.nivel === "iniciante" ? "blue" : "red"}">${curso.nome}</span></h2>
      </div>
    `;
    });
}
