const aProxHandler = function aProxHandler(ev) {
  const data = getFormData(form);
  itens.forEach(i => {
    i.nome = data[`nome_${i.id}`];
    i.quantidade = data[`quantidade_${i.id}`];
    i.unidade = data[`unidade_${i.id}`];
  });
  solicitacao.addItens(itens);
  console.table(itens);
};
