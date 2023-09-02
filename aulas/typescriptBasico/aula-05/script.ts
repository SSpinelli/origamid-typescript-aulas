const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "20", 30, "40", 50, 3];

function maiorQue10(data: number[]) {
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

const arrayFrutas: Array<string> = ["banana", "melão", "morango"];

// Outra forma de definir o tipo de um array é usando essa notação Array<T>

// EXERCICIO

// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<Curso>) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>Nome da aula: <span style="color: ${
          curso.nivel === "iniciante" ? "blue" : "red"
        }">${curso.nome}</span></h2>
      </div>
    `;
  });
}
