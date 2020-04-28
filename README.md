# DesafioFronEnd
O Projeto contempla um sistema que simula um pagamento via cartão de crédito,e que consome uma REST API que guarda os dados do pagamento.

## Tecnologias Utilizadas
* FronEnd feito com ReactJs Hooks 
* Back-End(API REST) feito em Nodejs.
* SQLite (Utilizado por ser leve , e estruturado e fica armazenado dentro da aplicação).

## Dependencias
é necessario que tenha instalado o nodeJs , caso não tenha acesse [DOWNLOAD NODE](https://nodejs.org) e instale a versão LTS.
>é recomendado que utilize um genrenciador de pacotes para instalar o nodeJs, caso não tenha um genrenciador de pacotes e deseja instalar,siga os passos acessando [aqui](https://chocolatey.org/install#individual) (esse gerenciador serve somente para Windows), depois de instalar o genrenciador execute no seu terminal de camando para instalar o nodeJs:
```
cinst nodejs-lts
```
>Finalizada a instalação feche o terminal e o abra novamentee  execute os comandos abaixo para verificar se o nodeJs foi intalado na sua maquina
```
node -v

npm -v
```
>devem retornas as versões. 

feito isso você estara pronto para executar o projeto.

## Iniciando o projeto
Abra seu terminal de comando (Ex: PowerSheel, CMD) em modo administrador e execute dentro da pasta FrontEnd do projeto o comando:
```
npm start
```

desta forma voce consegue vizualizar o sistema 

## Estrutura do Projeto e Infomações tecnicas
* BACKEND
  - abrindo o projeto no VSCode na raiz do projeto você vai encontrar a pasta **src** que é onde fica armazenado todo o código de- 
    senvolvido.  
  - na raiz do projeto exite a pasta **node_module** onde fica armazenado todas a dependenciase libs utilizadas no projeto.  
  - arquivo **Knex.js** criado a partir do packet Knex que nos fornece rastreabilidade no banco de dados Ex: quando foi gravado o regis-
    tro quem gravou ou quem criou tabela quem alterou; outra funcionalidade e permitir que façamos a querys em java assim caso troque o 
    banco de dados não será necessário trocar a liguagem; e tambem nos permite ter as conexões de Desenvolvimento, Pré produção e Pro-
    dução.
  - dentro da pasta **src** existe um arquivo que controla todas as rotas do projeto chamado **routes.js**
  - dentro da pasta **src** exite a pasta **controllers** onde fica amarzenadas as Entidades e suas solicitações do banco de dados.
  - dentro da pasta **src** exite a pasta **database** onde fica amarzenado o banco de dados e todas suas caracteristicas.
  - dentro da pasta **database** existe a pasta **migrations** que armazena os scripts de criação de tabela e drop caso ocorra algum 
    erro na criação da tabela ele a exclui para não ficar um tabela com irregularidades.
  - dentro da pasta **database** existe o arquivo **connection.js** que contem as configuração do banco de dados e nossa conexão 
    que pode ser de desenvolvimento , pré produção ou produção. 
  - dentro da pasta **database** existe o arquivo **db.sqlite** que é nosso banco de Dados.
* FRONTEND
  - abrindo o projeto no VSCode na raiz do projeto você vai encontrar a pasta **src** que é onde fica armazenado todo o código de- 
    senvolvido. 
  - na raiz do projeto exite a pasta **node_module** onde fica armazenado todas a dependenciase libs utilizadas no projeto.
  - na raiz do projeto existe a pasta **public** onde é armazenado o HTML principal do projeto no arquivo **index.js**.
  - dentro da pasta **src** existe um arquivo que controla todas as rotas do projeto chamado **routes.js**
  - dentro da pasta **src** existe um arquivo css **global.css** qu eontem os estilos que seram usados pela aplicação toda.
  - dentro da pasta **src** existe o arquivo **App.js** que importa todas a rotas das paginas.
  - dentro da pasta **src** existe o arquivo **index.js** que é responsavel por renderizar as paginas.
  - dentro da pasta **src** existe a pasta **pages** que armazena todas a paginas da aplicação e detro das pastas de cada pagina existe 
    um arquivo **index.js** que contem o HTML da pagina e suas funções e um arquivo css **styles.css** que contem os estilos par-
    ticulares da pagina.
  - dentro da pasta **src** contem a pasta **fonts** que armazena as fontes do texto utilizado nas paginas.
  - dentro da pasta **src** conte a pasta **assets** que armazena todas as imagens e icones utilizadas nas paginas.
 
  
