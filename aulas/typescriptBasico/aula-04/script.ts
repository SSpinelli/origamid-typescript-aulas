function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}

preencherDados({
  nome: "Computador",
  preco: 3700,
  teclado: true,
});

preencherDados({
  nome: "Notebook",
  preco: 5700,
  teclado: false,
});

// Usando o typescript conseuimos definir exatamente quais chaves um objeto precisa ter para evitar erros desnecessários.

type NumberOrString = number | string;

let totalAula4: NumberOrString = 20;

// O type funciona para definirmos o tipo de uma variável, faz mais sentido com dados complexos.

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados2(dados: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}

const computador2: Produto = {
  nome: "Macbook",
  preco: 10990,
  teclado: false,
};

// Simplificando a sintaxe da função e separando as coisas, fazendo o código ficar mais fácil de ler, além de poder ser reutilizavel em qualquer lugar.

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(category: Categorias) {
  return category;
}

// console.log(pintarCategoria("banana"));

// O tipo não precisa ser um tipo de dado, pode ser uma string definida, um número, ou qualuqer coisa, o typescript vai saber o que esperar e vai gerar um erro se tentar passar qualquer coisa do que foi definido.

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

// Outra forma de definir o tipo de um dado é usando interface, por padrão iremos usar interface para dados complexos e type para tipos primitivos e aferição direta como 'type Categorias = "design" | "codigo" | "descod"' nesse caso.

// EXERCICIO

// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

interface iCompany {
  fundacao: number;
  nome: string;
  pais: string;
}

interface iProduct {
  descricao: string;
  garantia: string;
  nome: string;
  preco: number;
  seguroAcidente: boolean;
  empresaMontadora: iCompany;
  empresaFabricante: iCompany;
}

async function fetchProduct() {
  const res = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await res.json();

  showProduct(data);
}

fetchProduct();

function showProduct(data: iProduct) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.descricao}</p>
      <p>R$ ${data.preco},00</p>
      <p>${data.garantia} anos de garantia</p>
      <p>Seguro acidente: ${data.seguroAcidente ? "Sim" : "Não"}</p>
      <br>
      Empresa Montadora:
      <p>${data.empresaMontadora.nome}<p/>
      <p>Fundada em: ${data.empresaMontadora.fundacao}<p/>
      <p>Montado na: ${data.empresaMontadora.pais}<p/>
      <br>
      Empresa Fabricante:
      <p>${data.empresaFabricante.nome}<p/>
      <p>Fundada em: ${data.empresaFabricante.fundacao}<p/>
      <p>Montado na: ${data.empresaFabricante.pais}<p/>
    </div>
  `;
}
