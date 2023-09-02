let total: string | number = 200;

total = "4000";

// O Union Type '|' é usado quando queremos indicar para o typescript que determinado dado pode ser mutável, usar ele solto como está acima não faz muito sentido, mas em funções são ferramentas bem úteis.

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

const button = document.querySelector("button");

// O union type é muito útil quando estamos trabalhando com o DOM pois, o TypeScript não tem acesso ao documento então ele afere sempre o tipo com um union type null, ex: HTMLElementButton | null.

if (button) {
  button.click();
}

button?.click();

// Por isso é muito comum quando se trabalha manipulando diretamente o DOM fazer verificações e as duas notações acima funcionam da mesma forma, ele só clica no button se ele existir.

// Exercícios

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "number" || typeof value === "string") {
    return Number(value);
  }

  throw new Error("value deve ser um número ou uma string");
}

// Após colocar o throw new Error() a inferencia automática do retorno da função retira o null que ficava antes.
