# Solicitação de Compras

Projeto para ajudar a manter as pessoas em sua quarentena

Este projeto tem como objetivo manter as pessoas em casa o máximo possível.

Você desenvolvedor, nesse momento, pode ajudar no desenvolvimento.

Novo layout, revisão de textos, adição de estabelecimentos, enfim todas as ideias são bem vindas.

Faça o seu pull request.

A ideia é fazer um formulário tipo "wizard", salvando informações em storage e no final encaminhando um e-mail ao estabelecimento.


## Rodar localmente

Para executar esse projeto primeiro tenha certeza de ter o Jekyll instalado

[Jekyll installation](https://jekyllrb.com/docs/installation/)

Após instalar faça um clone do repositório

```bash
git clone https://github.com/matheus-vieira/solicitacao-compra.git
```

Na sequencia instale as dependências do Jekyl com o seguinte comando

```bash
bundle install
```

Agora estará pronto para executar o projeto localmente

```bash
bundle exec jekyll serve --host=0.0.0.0
```

Obs.: A opção --host é para fazer o bind no seu endereço ip, dessa forma consegue acessar na sua rede local e testar no seu celular, por exemplo.
