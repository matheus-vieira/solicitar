const buildContato = function(ev) {
  const data = solicitacao.getContato();
  if (data) {
    const toRemove = contatoDataHolder.querySelector(".Box-row");
    contatoDataHolder.removeChild(toRemove);
    addHtml(contatoDataHolder, contatoDataTpl, data);
  }
};
window.addEventListener("load", buildContato);
