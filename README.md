# DesafioFronEnd
O Projeto contempla um sistema que simula um pagamento via cartão de crédito, e que consome uma REST API que guarda os dados do pagamento.
Tendo também um layout Responsivo para Mobiles.

## Tecnologias Utilizadas
* FronEnd feito com ReactJs Hooks 
* Back-End(API REST) feito em Nodejs.
* SQLite (Utilizado por ser leve, e estruturado e fica armazenado dentro da aplicação).

## Dependências
É necessário que tenha instalado o nodeJs , caso não tenha acesse [DOWNLOAD NODE](https://nodejs.org) e instale a versão LTS.
>é recomendado que utilize um gerenciador de pacotes para instalar o nodeJs, caso não tenha um gerenciador de pacotes e deseja instalar, siga os passos acessando [aqui](https://chocolatey.org/install#individual) (esse gerenciador serve somente para Windows), depois de instalar o gerenciador execute no seu terminal de comando para instalar o nodeJs:
```
cinst nodejs-lts
```
>Finalizada a instalação feche o terminal e o abra novamente execute os comandos abaixo para verificar se o nodeJs foi instalado na sua maquina
```
node -v

npm -v
```
>devem retornas as versões. 

feito isso você estará pronto para executar o projeto.

## Iniciando o projeto
Abra seu terminal de comando (Ex: PowerShell, CMD) em modo administrador e execute o comando dentro da pasta BackEnd do projeto :
```
npm start
```
Assim o servidor da APi REST ficara no ar para que o Front possa consumir na rota http://localhost:3333/pagar .

Ainda no terminal de comando (Ex: PowerShell, CMD) em modo administrador e execute o comando dentro da pasta FrontEnd do projeto :
```
npm start
```
A aplicação vai abrir no seu Browser padrão.

## Uso da Aplicação 
1. Página Efetue o Pagamento 
   - Onde você vai digitar um valor inteiro para o pagamento
   ![Imagem Efetue Pagamento](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/EfetuaPagamento.png)
2. Página Pagamento
   - Onde será preenchido os dados do Cartão
   ![Imagem Pagamento](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/Pagamento.png)   
3. Página Pagamento Preenchido
   - Os campos do Formulario são validados
   ![Imagem Pagamento Preenchido](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/PagamentoPreenchido.png)   
4. Página Pagamento CVV
   - Onde enocontar o CVV
   ![Imagem Pagamento CVV](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/PagamentoCVV.png)
5. Página Pagamento Validação
   - O pagamento é efetuado e então o usuario aguarda a autorização.
   ![Imagem Pagamento Validacao](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/PagamentoErro.png)
6. Página Confirmação
   - O pagamento é efetuado e então o usuario aguarda a autorização podendo efetuar um novo pagamento.
   ![Imagem Pagamento Validacao](https://github.com/andreytmendes/DesafioFronEnd/blob/master/Telas%20Aplica%C3%A7%C3%A3o/Confirma%C3%A7%C3%A3o.png)


## Estrutura do Projeto e Informações técnicas
* BACKEND
  - Abrindo o projeto no VSCode na raiz do projeto você vai encontrar a pasta **src** que é onde fica armazenado todo o código de- 
    senvolvido.  
  - na raiz do projeto existe a pasta **node_module** onde fica armazenado todas a dependenciase libs utilizadas no projeto.  
  - Arquivo **Knex.js** criado a partir do packet Knex que nos fornece rastreabilidade no banco de dados Ex: quando foi gravado o regis-
    Tro, quem gravou ou quem criou a tabela, quem alterou; outra funcionalidade e permitir que façamos as querys em java assim caso troque o 
    banco de dados não será necessário trocar a linguagem; e tambem nos permite ter as conexões de Desenvolvimento, Pré produção e Pro-
    dução.
  - Dentro da pasta **src** existe um arquivo que controla todas as rotas do projeto chamado **routes.js**
  - Dentro da pasta **src** existe a pasta **controllers** onde ficam armazenadas as Entidades e suas solicitações do banco de dados.
  - Dentro da pasta **src** existe a pasta **database** onde fica armazenado o banco de dados e todas suas características.
  - Dentro da pasta **database** existe a pasta **migrations** que armazena os scripts de criação de tabela e drop caso ocorra algum 
    erro na criação da tabela ele a exclui para não ficar um tabela com irregularidades.
  - Dentro da pasta **database** existe o arquivo **connection.js** que contem as configuração do banco de dados e nossa conexão 
    que pode ser de desenvolvimento, pré produção ou produção. 
  - Dentro da pasta **database** existe o arquivo **db.sqlite** que é nosso banco de Dados.
* FRONTEND
  - Abrindo o projeto no VSCode na raiz do projeto você vai encontrar a pasta **src** que é onde fica armazenado todo o código de- 
    senvolvido. 
  - Na raiz do projeto existe a pasta **node_module** onde fica armazenado todas a dependências e libs utilizadas no projeto.
  - Na raiz do projeto existe a pasta **public** onde é armazenado o HTML principal do projeto no arquivo **index.js**.
  - Dentro da pasta **src** existe um arquivo que controla todas as rotas do projeto chamado **routes.js**
  - Dentro da pasta **src** existe um arquivo css **global.css** que contém os estilos que serão usados pela aplicação em todas as paginas.
  - Dentro da pasta **src** existe o arquivo **App.js** que importa todas a rotas das páginas.
  - Dentro da pasta **src** existe o arquivo **index.js** que é responsável por renderizar as páginas.
  - Dentro da pasta **src** existe a pasta **services** que armazena o aquivo **api.js** que contem a conexão da api para consumirmos na aplicação
  - Dentro da pasta **src** existe a pasta **pages** que armazena todas a páginas da aplicação e dentro das pastas de cada página existe 
    um arquivo **index.js** que contém o HTML da página e suas funções, e um arquivo css **styles.css** que contém os estilos par-
    ticulares da pagina.
  - Dentro da pasta **src** contem a pasta **fonts** que armazena as fontes do texto utilizado nas paginas.
  - Dentro da pasta **src** contem a pasta **assets** que armazena todas as imagens e ícones utilizadas nas páginas da aplicação.
