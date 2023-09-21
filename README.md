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

Depois vai no navagedor e verifica pela URL
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
Para criar o banco de dados no MongoDB, vai em Cluster;
Cria um Usuário e Senha;
depois cria um projeto;

Usar o driver de instalação de NodejS e última atauzalização depois é só coipar a URL do peojeto para ser integrada;

MONGOOSE
============
Ao fazer todo o procedimento de bando de dados do MongoDB, instalar a biblioteca do mongoose;
npm install mongoose

Ao final deve-se importar o mongoose instalado no nosso projeto;
No arquivo principal app.js;
import mongoose from 'mongoose';

Verificando a URL do MongoDB:
mongodb+srv://DreamHouse:DreamHouse2023@cluster0.dqagaxv.mongodb.net/    ?retryWrites=true&w=majority
^^^^           ^^^^^       ^^^^^^                                   ^^^^^^
DB             User        Senha                                    geralmente aqui vai nome do projeto


Estudar mais sobre o MONGODB Documentation:

Deve-se abrir um objeto na url que vem do projeto e criar mais 2 parametros:
useNewUrlParser: true,
useUnifiedTopology: true,

Cuidado ao conectar o MongoDB, com senha de caracteres especiais;

CRIANO ESTRUTURA DA API
--------------------------

Padrão MVC => Model View Controller

Models => representa um tabela no banco de dados; schema da aplicação;

Views => no caso de uma API Rest não é funcional pelo motivo de ser usado normalmente para front-end no caso React, Angular, ou qualquer outra tecnologia; onde representa o front-end da aplicação;

Controllers => se trata de onde será tratada a requisição e onde será feita a resposta da rota;


CRIANDO OS MODELS TABELA DE DADOS
===================================
OBS: Sempre criar o model deve ser com a primeira letra em maiuscula;
Sempre também em singular, padrão;

Criando primeiramente o user:
Verificar sempre se deve importar todo o pack do mongooose,as vezes pode se usar muito da aplicação desnecessariamente, 
Nesse caso será usado somente o Schema e o model;

Cria-se a constante e dentro do new Schema , usa-se as propriedades, que no caso se trata de nome email e senha;
Depois deve importar ao final, com o nome dessa tabela no primeiro paranetro, e no segundo a constante criada;

Controller => já no caso de controller, trata a requisição e devolve uma resposta para a rota, exemplo cria-se uma rota de login(criaria um user controller?não) seria um session controller, uma sessão para fazer login e logout, se encaixando dentro de um controller;
No caso se fosse um user controller, profile, update do profile, etc;

CRIANDO O SESSION CONTROLLER
-------------------------------
Metodos dentro de um Controller:
index, show, update, store, destroy;

index => listagem de sessoes. Ex:
store => criar uma nova sessão. Ex: criar um novo login;
show => listar uma única sessão;
update => alterar uma sessão;
destroy => deletar uma sessão. EX: excluir um usário;

Depois de usar o método store, deve-se importar o metodo, na rota;
EX: código anterior 
routes.get('/', (req, res) => {
    return res.json({ ok: "RODANDO REDONDO" });

}) ;

código atualizado
routes.post('/sessions', SessionController.store); 

Testando a URL:
http://localhost:3333/sessions

Depois vamos agora mandar o body como json, criando um novo usário no banco de dados MongoDB;
Primeiro deve importar o caminho para user.js, depois utiliza-lo;

Ex: usando mais um campo name;
const { name, email } = req.body;

// Supondo que você tenha um modelo ou classe User com um método create
const user = User.create({
  name,
  email
});

Ao mandar a requisição post criando usuário, deve-se atentar a demora do servidor do banco de dados então sua-se a função async(assíncrona) no javascript;
EX: let user = await User.create({
            name,
            email

        });

Logo em seguida deve passar que se trata de uma função assincrona(assync);
Ex: async store(req, res){
        // const email = req.body.email; => parecido quando resgato uma propriedade em foreach de uma requisição;
        // usando a descontrução
        const { name, email } = req.body;

        // criado uma variavel user, e depois chamando metodo create, criado pela propriedade email;
        // no caso como na tabela foi colocado email, pode se usar somente email, porque não está resgtando nenhum elemento a mais;
        // Ex: email : email 
        let user = await User.create({
            name,
            email

        });

        return res.json({ message: 'Usuário criado com sucesso!' });
    }

    OBS: também deve se colocar a resposta de criar usuário;
    EX: return res.json({
            user, 
            message: 'Usuário criado com sucesso!' 
        });


Resposta do CREATE
--------------------
{
	"user": {
		"name": "Teste 2", => nome do usuário
		"email": "teste2@gmail.com", => email criado do usuário para login
		"_id": "65085f92716b701516df4e7e", => unique ID do usuário
		"__v": 0 => mongoDB cria esse campo para numero de vezes de atualização do usuário
	},
	"message": "Usuário criado com sucesso!" => mensagem criada para status OK
}


CRiando verificação se existe um usuário já cadastrado
--------------------------------------------------------
findOne => função de utilização para procurar registro no banco de dados no caso me parece que somente um na pesquisa;
EX: class SessionController{
    async store(req, res){
        const { name, email } = req.body;

        let user = await User.findOne({ => verifica se o email já existe
            email

        });

        if(!user){ => se não existe cria um usuário com estas propriedades
            user = await User.create({ 
                name,
                email
    
            });

        }else{ => se existe retorna essa mensagem
            return res.json({
                message: 'Usuário já cadastrado!' 
            });

        }

        return res.json({
            user, 
            message: 'Usuário criado com sucesso!' 
        });
    }
}


CADASTRANDO CASAS NA API
---------------------------
Vai em models pasta e cria um novo model, no caso se trata de criar uma casa na aplicação;
Cria-se as proprieades do model casa, como, foto de capa, etc:
Thumbnail => String caminho de foto no banco de dados;

Exemplo de propriedade criada como Objeto:
thumbnail: String, => propriedade
description: String,
price: Number,
location: String,
status: Boolean,
user:{ => propriedade referenciada neste caso pelo ID do usuário;
    type: Schema.Types.ObjectId,
    ref: 'User'
}

CRIANDO O CONTROLLER DE CASAS
-------------------------------
Depois deve-se criar o controller de casas, vai na pasta controller:
No mesmo esquema cria com a função store no controller;

Depois importa no routes.js, de mesmo modo que foi feito o user;
E cria a rota de forma como post já que é para criar uma casa!

Para que seja enviado um arquivo no Insominia, se utiliza de ao inves de body.json, usa o Multipart para fazer a requisição;
thumbnail => choose file;
demais campos normalmente string;

já o ID deve ser mandado pelo header(cabeçalho) justamente porque quando o susuário esta logado ele já cadastra o imovel sendo resgatado o ID do usuário;

Por se tratar de formato json no body da requisição não adianta usar o multipart formas do Insominia, que não vai funcionar então deve se instalar uma biblioteca chamada Multer;
npm install multer

Para poder trabalhar com multipart formas do insominia;

Logo após a instalação da biblioteca cria-se um arquivo de importação de imagens, ns pasta src/;

Construindo um arquivo upload.js => 
Cria a pasta config dentro de src e depois o arquivo uploads.js;
Depois criqa o código de export;
EX: export default {
    storage: multer.diskStorage({ => armazena a foto em local de disco, na prórpai aplicação;
      destination: path.resolve(__dirname, '..', '..', '/uploads') => indica para o nodejs onde se localiza o diretório; e deve se usar o caminho separado para evitar erro "..";
      filename: (req, file, cb) => { => chama um a função para trabalhar os reqs
            const ext = path.extname(file.originalname); 
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}}`) => função callback;
        },
    
    });
};

Cria uma pasta com todas as fotos das casas cadastradas, em uploads na raiz do projeto;

Ao final deve importar para routes.js, o que foi feito logo acima, junto com a biblioteca do multer;
import multer from 'multer';
import uploadConfig from './config/upload';

Depois chama uma variavel com as configurações da imagem feita em uploads.js;
const upload = multer(uploadConfig);

Em seguida vai em routes e inclui como parametro, tem que passar a propriedade também como parametro dentro da função single();
routes.post('/houses', upload.single('thumbnail), HouseController.store); 

upload.single() => para uma imagem somente;
upload.array() => para varias imagens;

RESULTADO DO CÓDIGO PARA TESTE
===================================
// import House from "../models/House";

class HouseController{
    async store(req, res){
        console.log(req.body);
        console.log(req.file); //acesso ao file agora depois de criado;


        return res.json({
            message: "Tudo Certo!"
        })
    }


}

export default new HouseController();


RESULTADO
---------------
Depois de feito tudo certinho este será o resultado:
[Object: null prototype] {
  description: 'Casa na planta estrutura totalmente atualizada!',
  price: '2.000',
  location: 'Cônego , Rua Wenceslau Braz, n927, Vila Lúcia',
  status: 'true'
}
{
  fieldname: 'thumbnail',
  originalname: '02.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'C:\\uploads',
  filename: '02-1695068335022.jpg}',
  path: 'C:\\uploads\\02-1695068335022.jpg}',
  size: 130143
}

OBS: ACIMA O CÓDIGO COM ERRO DEVIDO AS CHAVES A MAIS E A BARRA USADA NO "__dirname" Cuidado!
ERRO 1 => cb(null, `${name}-${Date.now()}${ext}}`)
ERRO 2 =>  destination: path.resolve(__dirname, '..', '..', '/uploads'),

CERTO 1 => cb(null, `${name}-${Date.now()}${ext}`)
CERTO 2 => destination: path.resolve(__dirname, '..', '..', 'uploads'),


CADASTRAR NO BANCO DE DADOS
=============================
Importar model House;
import House from "../models/House";


CRIANDO A URL DA IMAGEM PARA PODER TER ACESSO
===============================================
Tuso é criado em models House e o passo a passo está lá;

Quando criar tudo ao fazer a requisição, retorna com a url da imagem mas, o caminho não existe, então deve ser criado também este caminho;

Criando o caminho:
Cria em middlewares  a rota para acesso ao arquivo;
this.server.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'uploads')) => aqui indica o caminho
)

Em seguida deve ser importado o path, no app.js;
import path from 'path';

E o caminho fica pronto da imagem, testando pelo Insominia;

Desta forma no front-end pode ser acessada a URL da imagem para se usada de várias formas no front-end;


CRIANDO FILTRO DE CASAS COM SEU STATUS
===========================================
Deve ser utilizado o metodo index para criar esta função, vai puxar como forma de listagem;
Em HouseController.js cria-se o metodo index resgatando a listagem de casas, abaixo um exemplo de funcionamento da função;
EX:  async index(req, res){
        return res.json({
            ok: true
        })
    }

Depois em routes.js cria-se uma rota que no caso exemplo abaixo usando GET;
routes.get('/houses', HouseController.index);

NO Insominia pode-se utilizar o query params, para enviar um parametro, no caso o status da casa para alugar true ou false;
No projeto usei uma condição para caso o array houses esteja vazio;
ver projeto!!


ATUALIZANDO CASAS 
========================
Como todos os outros metodos vai em HouseController e cria o metodo put(update), que logo em seguida vou em routes e também crio a rota (não esquecer);

Como teste usei este código:
routes.put('/houses', HouseController.update);

Mas em seguida o código exato é:
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);

Porque deve se pegar o unique ID para atualizar a devida casa, junto com o upload de imagem já que o mesmo pode querer trocar as imagem da casa, e no final o metodo update do Node;

Ao constuir o código sozinho observei dois erros meus:
EX:
const house = await House.updateOne({ _id: house_id }, {
    user: user_id,
    thumbnail: filename,
    description,
    price,
    location,
    status,
})

Acima usei o update, está errado porque é para atualizar somente um ou seja updateOne, depois não chamei o _id, que é a propriedade que quando faço a requisição no Insominia, acho ela lá, em seguida sim coloco todas as propriedades em um novo objeto a seguir;

{
	"house": {
		"acknowledged": true,
		"modifiedCount": 1,
		"upsertedId": null,
		"upsertedCount": 0,
		"matchedCount": 1
	},
	"message": "Casa atualizada com sucesso!"
}

vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
PAREI NA AULA DE ATUALIZAÇÃO DAS CASAS => Verificar porque o retorno não está veindo certo como na aula, apesar de fazer as atualizações certinhas no banco de dados;


A DEVOLUÇÃO DO OBJETO AO ATUALIZAR ALGO NO BANCO DE DADOS E TOTALMENTE COMUM JÁ QUE ME PARECE SER DO PRÓPRIO MONGODB:
{
	"house": {
		"acknowledged": true,
		"modifiedCount": 1,
		"upsertedId": null,
		"upsertedCount": 0,
		"matchedCount": 1
	},
	"message": "Casa atualizada com sucesso!"
}

No caso o professor colocou no projeto ao invés de retornar um objeto, colocou:
return res.send();

mas utilizei pelo menos uma resposta de sucesso;


BLOQUEANDO USUÁRIO QUE NÃO É O QUE ESTÁ LOGADO PARA NÃO EDITAR A CASA
========================================================================
Deve-se importar primeiro o model de user;

Depois como se tem acesso dentro de update ao user_id e house_id, será relacionado ao usuário que cadastrou a casa; se no caso o user._id(como pode ser na requisição de cadastro de usuário) não corresponder ao house.user(que pode ser visto na requisição de cadastro da casa), então não vai poder editar;
EX:
const { user_id } = req.headers; => aqui posso resgatar o id do usuário;

Resgato aqui tanto o id do usuário com a função findByID, quanto o ID de casa, com isso consigo comparar e criar a condição logo abaixo;
const user = await User.findById(user_id);
const houses = await House.findById(house_id);

if(String(user.id) !== String(houses.user)){
    return res.status(401).json({
        error: "Não autorizado!",
    });
}

CRIANDO O DESTROY
===================
De mesma forma vai em HouseController e cria o metodo que no caso é "destroy"(delete), configurando a resposta para ver se o metodo está sendo requisitado.
Depois vai em routes.js, e inseri o route(rota) do metodo lá criado.
Para fazer o teste de requisição no Insominia, uso o metodo "delete", e logo em seguida verifico se houve retorno da message.

Lá no Insominia para requisição deve ser colocado no Headers o "user_id", já quem vai deletar a acsa e o suuário que está logado;

Explicando o código de delete:

async destroy(req, res){ => usa o metodo destroy(delete)
    const { house_id } = req.body; => resgata o id da casa para ser deletada
    const { user_id } = req.headers; => resgata o id do usuário e manda pelo header da requisição

await House.findByIdAndDelete({ => função de achar e deletar
    _id: house_id
});

return res.json({
    message: "Casa excluída com sucesso!",
})
}

Reaproveitando o código de verificação de usuário para que não exclua uma casa que não é dele;
EX:
Variaveis que devem ser resgatadas para criar a condição;
const user = await User.findById(user_id);
const houses = await House.findById(house_id);

Retorno de erro mais mensagem caso o usuário não seja quem cadstrou a casa;
if(String(user.id) !== String(houses.user)){
    return res.status(401).json({
        error: "Não autorizado!",
    });
}

CRIANDO DASHBOARD
===================
Cria-se um controller;
DashboardController.js

Importa o House para o arquivo, cria uma class, e usa o metodo show para listar a sessão;

Deve importar para routes.js não esquecer;
import DashboardController from './controllers/DashboardController';

Depois vai em routes.js e verifica se está funcionando;
Lembrar sempre de criar a URL para cada rota especifica(dashboard);
routes.get('/dashboard', DashboardController.show);


ADICIONANDO O CORS
====================
O CORS pode limitar, a API pode ser consumida por determinado dominio se quiser, ou ainda liberar a API como pública;
cors(): cors é um pacote npm popular (Compartilhamento de Recursos de Origem Cruzada) que simplifica o processo de permitir ou restringir solicitações HTTP de origens diferentes em sua aplicação Node.js ou Express.js. Ao chamar cors() como middleware, você habilita o tratamento de CORS em sua aplicação.

OBS: VERIFICAR A DOCUMENTAÇÃO DE CORS:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

Para adicionar o cors no nodejs usa o comando:
npm instal cors

Agora deve importar após a intalação do cors no app.js;
depois aplicar ele dentro do midllewares;

Desta forma a API se torna pública;
this.server.use(cors());


CRIAR RESERVA
================
Vai na pasta de models e cria um novo Model, depois de criar vai em Controller e cria também um arquivo para a reserva no caso;

Depois de importar o "Reserve models" e construido a class no novo arquivo ReserveController, deve ir routes e criar a nova rota;
Não esquecer de importar ;

Para que em seguida possa fazer o teste no Insominia dessa nova rota;
Usar chamado de rota encadeada(ou seja indica o que usuário quer fazer);
routes.post('/houses/:house_id/reserve', ReserveController.store);

OBSERVAÇÃO NAS REQUISIÇÕES DO INSOMINIA NÃO USAR "," SE OUVER UMA ÚNICA PROPRIEDADE;
MAIS UMA COISA CUIDADO AO MUDAR O HEADERS DO INSMONIA PORQUE MUDA O CONTENT-TYPE(JSON) E NÃO MANDA A REQUISIÇÃO DE FORMA CORRETA O BODY;

POPULATE + EXEC
=================
Para enviar mais informações no json usa essas duas propriedades chamadas populate e execPopulate que junta o json, como no exemplo abaixo;

const populateExec = await Reserve.findOne({ _id: reserve._id}) .populate('user') .populate('house') .exec();
 
return res.json({
   populateExec,
   message: "Casa alocada com sucesso!"
})
O código que você forneceu parece corrigir o erro "TypeError: reserve.populate(...).populate is not a function".

Em vez de chamar .populate() diretamente no objeto reserve, você está usando Reserve.findOne({ _id: reserve._id }) para encontrar o documento no banco de dados e, em seguida, chamar .populate('user').populate('house').exec() nesse documento.

Essa abordagem é a maneira correta de usar a função .populate() com o Mongoose para carregar as referências associadas ao documento reserve. Isso garante que o Mongoose possa buscar os dados relacionados no banco de dados e popula o documento reserve com os detalhes completos do usuário e da casa.

Portanto, com este código, você deve conseguir carregar com sucesso os dados associados ao reserve, incluindo as informações do usuário e da casa, sem o erro que você mencionou anteriormente. Certifique-se de que o Reserve modelo Mongoose esteja corretamente definido e que a conexão com o banco de dados esteja funcionando conforme o esperado.

CRIANDO UMA CONDIÇÃO PARA QUE O USUÁRIO NÃO FAÇA A MESMA RESERVA DUAS VEZES, OU QUE NÃO MANDE O ID PARA RESERVA DA CASA, OU AINDA O USUÁRIO NÃO FAÇA RESERVA EM UMA CASA QUE ELE MESMO CRIOU!

CRIAR CONDIÇÃO QUE NÃO PODE FAZER RESEVAR EM UMA CASA INDISPONIVEL, TANTO NO FRONT COMO NO BACK

ERRO VAGABUNDO!!!!! SyntaxError: Unexpected token } in JSON at position 29
Quando coloca "," em apenas uma propriedade na porra do Insominia em Json Body;

Importar o modo de usuário User, e depois importa o modo de casas House;
Em seguida cria as variaveis que irão resgatar os IDS de User e House, e atraves deles cria a condição de verificação;






