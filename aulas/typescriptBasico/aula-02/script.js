"use strict";
const frase = "Front End";
const preco2 = 500;
const condi = preco2 > 100;
// Nada de novo aqui a todos estão devidamentes tipados, o ultimo caso com a inferência automática do typescript.
console.log(typeof frase);
console.log(typeof preco2);
console.log(typeof condi);
// O typeof é um método do JavaScript bastante útil para dados primitivos com dados mais complexos como Objetos e arrays ele começa a perder sua funcionalidade.
console.log(typeof document);
console.log(typeof {});
console.log(typeof null);
console.log(typeof ["padaria", "restaurante", "cafeteria"]);
// Nos 4 exemplos acima a resposta do método é "object" e não está errado, o javascript realmente entende todos esses dados como object, porém para fazer qualquer tipo de validaçao o método typeof perde o sentido, para esse tipo de validação iremos usar o instanceof.
const frase2 = "Teste";
if (typeof frase2 === "string") {
    console.log(frase.toLowerCase());
}
else {
    console.log("frase não é uma string");
}
// O typeof é o que consideramos um Type Guard, nesse caso ele ta garantindo que dentro daquele if só vai entrar dados do tipo string, permitindo usarmos qualquer método de string dentro do escopo sem o TypeScript reclamar, mesmo a gente definindo na variável que frase2 é do tipo "any".
const frase3 = new String("Front End");
const frase4 = String("Front End");
const frase5 = "Front End";
console.log(typeof frase3);
console.log(typeof frase4);
console.log(typeof frase5);
console.log(typeof String);
// Não confundir o Contrutor String com uma string, no caso acima o primeiro console vai trazer o como 'object', pois o new String() é uma função construtora que retorna um objeto do tipo String, tanto que no ultimo caso receberemos como valor 'function'.
