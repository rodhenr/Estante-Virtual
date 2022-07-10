## :ledger: Descrição do Projeto

Esta é uma aplicação na qual se faz o controle de informações de uma lista de livros. As informações estão divididas entre as tabelas EDITORAS, AUTORES e LIVROS.
Esta aplicação possui 3 rotas, todas elas são acessadas usando-se o método GET. São elas:

1. "/" = Rota mais básica na qual retorna todas informações dos livros cadastrados no banco de dados.

2. "/order" = Rota na qual se é possível filtrar a ordem dos itens através de 2 queries, a primeira sendo o filtro(titulo, ano_lancamento, num_paginas) e a segunda sendo orderBy(ASC ou DESC).

3. "/search" = Rota na qual é possível pesquisar por um termo com aquery com a key "termo" e o value desejado. Caso exista correspondência(s) desse termo no titulo ou autor, serão retornadas as informações para o usuário.


## :man_technologist: Tecnologias

Para este projeto foram utilizadas as seguintes tecnologias:

- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## :dvd: Como replicar este projeto

Antes de tudo você deve possuir o MySQL instalado na sua máquina (neste projeto utilizei a versão 8.0).

```
1. Execute o comando npm i para instalar as dependências do projeto
2. Execute o comando "npx sequelize-cli db:create" para que o banco de dados seja criado
3. Execute o comando "npx sequelize-cli db:migrate" para executar as migrations e as tabelas serem criadas
4. Execute o comando "npx sequelize-cli db:seed:all" para que as tablas sejam populadas pelas informações padrão
5. Execute o comando npm run dev para rodar o servidor localmente
```

_OBS: Arquivos .env podem possuir informações sensíveis e caso você queira subir seu projeto para o github é aconselhável que o .env seja acrescentado no seu arquivo .gitignore_

## :grin: Dúvidas ou sugestões?

Caso tenha alguma dúvida ou alguma sugestão fico no aguardo da sua mensagem!