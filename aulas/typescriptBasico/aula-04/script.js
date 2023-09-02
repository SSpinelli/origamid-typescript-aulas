"use strict";
function preencherDados(dados) {
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
let totalAula4 = 20;
function preencherDados2(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}
const computador2 = {
    nome: "Macbook",
    preco: 10990,
    teclado: false,
};
function pintarCategoria(category) {
    return category;
}
async function fetchProduct() {
    const res = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await res.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
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
