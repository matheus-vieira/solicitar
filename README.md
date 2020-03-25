# Solicitação de Compras

O projeto tem como objetivo manter as pessoas em quarentena. Os profissionais da saúde recomendam que fiquemos em reclusão por um período indeterminado com o intuito de achatar a curva de contágio do corona vírus (COVID 19), toda ajuda (alteração de layout, revisão de texto, adição de estabelecimento e etc) é bem vinda.

Faça seu pull request!

## Sobre a ideia

Oferecer um espaço onde estabelecimentos possam receber pedidos e as pessoas em quarentena possam solicitar sem saírem de casa.

### Fluxo da solicitação de compra

Informar dados de contato do solicitante

Selecionar o estabelecimento que se deseja pedir.

Adicionar todos os itens que deseja solicita (produtos de padarias, mercados, açougue, e qualquer outro tipo de estabelecimento)

Por fim encaminhar um email ou whatsapp para o estabelecimento.

Não há responsabilidade sobre a existência de itens pedidos.

Confirme os dados do estabelecimento.

## Pendências

- [ ] Usar localização para filtrar os estabelecimentos.
- [ ] Filtrar por categoria(s).
- [ ] Salvar o estabelecimento selecionando.
- [x] Adicionar itens.
- [X] Remover itens.
- [ ] Salvar itens na solicitação de compra
- [ ] Enviar a solicitação de compra
- [ ] Cadastrar estabelecimentos com dados reais.
- [ ] Ajustar os formulários como a página de cadastro
  - [ ] Seus dados
  - [ ] Estabelecimento
  - [X] Itens
  - [ ] Eviar solicitação de compra
- [ ] Verificar o serviço [Form Submit](https://formsubmit.co/)

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
