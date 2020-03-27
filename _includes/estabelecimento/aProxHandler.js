const aProxHandler = function aProxHandler(ev) {
  const selected = txtEstabelecimento.value;
  const estabelecimento = estabelecimentoController.get("id", selected);
  solicitacao.addEstabelecimento(estabelecimento);
};
