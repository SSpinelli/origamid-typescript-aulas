# TypeScript - Origamid

TypeScript é uma linguagem que é uma extensão do JavaScript, que insere tipagem estática, o que trás diversas vantagens para manutenção de código, o TypeScript ele builda antes de ser executado e encontra erros que no JavaScript só veriamos em runtime (o que muitas vezes não é o ideal).

O VS Code já vem com o TypeScript instalado, por isso a intelisense para desenvolver JavaScript lá é tão boa.

Obs: por sinal podemos colocar em um arquivo JavaScript mesmo um '//ts-check', e por já rodar TypeScript por debaixo dos panos, o vscode consegue indicar alguns possíveis erros, porém quando criamos funções essa checagem não funciona para verificar possíveis erros dentro do corpo dela.

npm install typescript -g (para instalar o TypeScript de maneira global na máquina)
tsc --init (cria um arquivo inicial de configuração tsconfig.json)
tsc --watch (entra em modo de compilação, já compilando para JavaScript qualquer alteração que for escrita)
