PROJETO DEVHOUSE
====================

Inicio 
iniciar package.json => npm init -y
instalar express => npm install express
cria-se a pasta src => toda estrutura dos códigos vai aqui
dentro da pasta src cria-se app.js e server.js e routes.js


Usar o formato de classes no Back End;

Chamar o Express no App.js
----------------------------
const express = require('express');

Método construtor é chamado automaticamente quando está classe é instanciada; quando chamar a classe em algum local o metodo constructor é primeiro a ser chamado;

Dentro do class APP => foi criado o constructor puxando o express com server, em seguida o middlewares para que seja usado com json, e depois o routes para ser enviado a routes.js;

Logo em seguida chama as duas funçoes(middlewares e routes) dentro do constructor para que possa carrega-las;

depois deve-se exportar a classe para ser usada em outro local:
module.exports = (cria-se uma nova instancia e exporta) new App()

Quando for rodar a API combinada com Front-End usar as portas separadas já que o React roda na porta 3000, então usar uma porta diferente;

No arquivo de routes.js => não está sendo importado tudo o que está dentro de express porque só é resgatado a função routes do express, só vai trabalhar só com Rotas;
OBS: estudar mais as propriedades do express e o que ele trás por debaixo dos panos.

Link:
https://expressjs.com/en/api.html

Depois cria-se uma constante aonde será imortados as rotas para que sejam criadas, deve-se instanciar;

Depois deve-se testar a API para ver se está rodando, com o comando;
node ./src/server.js

Depois vai no navagedor e vcerifica pela URL
http://localhost:3333/

EM 2022 O NODEJS AINDA NÇAO SUPORTAVA FUNCIONALIDADES NOVAS COMO "EXPORT" E "IMPORT", o curso de Nodejs é de Dezembro de 2022, mais agora atualemnte em Setembro de 2023;

GOOGLE INFO:
Posso usar importação e exportação em NodeJS? 

Para usar a sintaxe de importação e exportação, você precisa informar ao Node. js para tratar seu arquivo JavaScript como um módulo ES6. Você pode fazer isso adicionando "type": "module" ao seu pacote. arquivo json.

Outra forma de se usar:
--------------------------
import express from "express";

Usado em frameworks e bibliotecas mais novas também; <=> sempre usar

Sucrase
==========
Link:
https://sucrase.io/

Sucrase: usaremos para utilizar a sintaxe do ES6 na importação e exportação de módulos, a mesma sintaxe usada no React.js ou React Native.

ESLint: nos ajuda a indentar e padronizar o código, automatizando alguns ajustes.

O sucrase pode ser instalado usando o npm ou o yarn, lembrando que esse pacote é uma dependência de desenvolvimento, não será usada na aplicação final.

Nodemon
==========
Serve para reiniciar o servidor automaticamente a cada modificação salva no código e nos ajuda a ganhar tempo.

Comando no Nodejs para instalar como dependencia de desenvolvimento:
npm install sucrase nodemon -D <=> simbolo de dependencia;

Após a instalação dessas duas dependecias deve-se trocar a variavel const no app.js, para import express from "express";

Igualmente com import routes from "./routes";

Depois em routes.js e fazer o mesmo import { Router } from "express";
Depois em server.js e fazer o mesmo import app from "./app";

Quando se trata de exports pode ser feita de mesma forma substituindo por export default new App().server;

OBS: Quando for tentar após mudar todas essas propriedades, vai haver um erro:
import app from './app';
^^^^^^^^^^^^
"SyntaxError: Cannot use import statement outside a module"

Erro ocorre devido ao app não rodar junto ao sucrase então deve-se fazer assim:


Para rodar o sucrase e nodemon juntos fui instruido pelo chatGPT, a realizar alguns procedimentos:
======================================================================================================
Passo 1: Inicialize um novo projeto Node.js (ou use um projeto existente) se você ainda não tiver feito isso. Para iniciar um novo projeto, execute o seguinte comando na pasta onde deseja criar seu projeto:
npm init -y

Isso criará um arquivo package.json com as configurações padrão.

Passo 2: Instale as dependências necessárias (Sucrase e Nodemon) usando o npm:
npm install sucrase nodemon --save-dev

Isso instalará o Sucrase e o Nodemon e adicionará as dependências ao seu arquivo package.json sob a seção "devDependencies".

Passo 3: Crie um arquivo de configuração para o Sucrase. Crie um arquivo chamado sucrase.config.js na raiz do seu projeto e configure-o para transpilar o código ES6 para CommonJS. Por exemplo:
module.exports = {
  sourceMap: true,
  transforms: ['imports'],
};

Passo 4: Configure o Nodemon no seu projeto. Crie um arquivo de configuração chamado nodemon.json na raiz do seu projeto com as seguintes configurações:
{
  "execMap": {
    "js": "node -r sucrase/register"
  },
  "ext": "js,json"
}

Isso instrui o Nodemon a usar o sucrase/register para transpilar seu código antes de executá-lo.

Passo 5: Crie um script no seu arquivo package.json para iniciar seu aplicativo usando o Nodemon. Adicione o seguinte ao seu arquivo package.json:
"scripts": {
  "dev": "nodemon seu-arquivo-principal.js"
}

Substitua "seu-arquivo-principal.js" pelo nome do arquivo JavaScript que é a entrada principal do seu aplicativo.

Passo 6: Agora você pode iniciar seu aplicativo em modo de desenvolvimento usando o seguinte comando:
npm run dev

O Nodemon iniciará o seu aplicativo e observará as mudanças nos arquivos JavaScript, reiniciando automaticamente o servidor sempre que você fizer alterações no código.

Com essas etapas, você configurou o Sucrase e o Nodemon no seu projeto Node.js sem depender do Yarn. Certifique-se de que todas as dependências necessárias estejam instaladas localmente no seu projeto, como mostrado no Passo 2.

OBS: TUDO CHATGPT ANTES MESMO DA AULA DO CURSO;

BANCO DE DADOS MONGODB
========================
O banco de dados MongoDB no plano free possui 500mb => resultado de muita coisa no BD para uso;

