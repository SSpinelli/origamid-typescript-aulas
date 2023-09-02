const produto: string = "Livro";

let preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

// Para variávei diretas como as acima, o TypeScript já faz uma inferencia automática, então essa sintaxe de :TipoDoDado nesses casos são desnecessários, vide exemplo abaixo.

const barato = 600 < 400 ? true : "produto caro";

// mesmo no caso da constante barato que o resultado nunca vai cair na string "produto caro", o typescript da mesma forma vai inferir como boolean | "produto caro", e mesmo sem inferirmos de forma explicita poderemos contar com o intelisense para ajudar nos autocomplete.

function somar(a: number, b: number) {
  return a + b;
}

// Como colocamos o typescript no modo strict, precisamos explicitamente indicar os tipos dos parâmetros, o retorno o typescript consegue inferir automáticamente.

somar(4, 6);
// somar("5", "8");

// com isso o TypeScript não deixa a segunda forma, e trava o nosso código já na hora de compilar.

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

const nintendoSemPreco = {
  nome: "Nintendo",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$" + produto.preco;

  return produto;
}

const produtoNovo1 = transformarPreco(nintendo);
// const produtoNovo2 = transformarPreco(nintendoSemPreco);

// O segundo caso vai dar erro pois explicitamos que a função transformarPreco recebe um Objeto como parâmetro que possui 2 chaves 'nome' e 'preco'.

/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Exercicio -> Arrume os erros desta função a seguir.

/* function normalizarTexto(texto) {
  return texto.trims().toLowercase()
} */

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}
