const aProxHandler = function aProxHandler(ev) {
  const data = getFormData(form);
  const pessoa = new Pessoa(data);
  solicitacao.addContato(pessoa);
};
