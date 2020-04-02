const buildEstabelecimento = function(ev) {
  const data = solicitacao.getEstabelecimento();
  if (data) {
    const toRemove = estabelecimentoDataHolder.querySelector(".Box-row");
    estabelecimentoDataHolder.removeChild(toRemove);
    addHtml(estabelecimentoDataHolder, estabelecimentoDataTpl, data);
  }
};
window.addEventListener("load", buildEstabelecimento);
