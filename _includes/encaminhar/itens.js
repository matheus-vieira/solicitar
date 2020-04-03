const buildItens = function(ev) {
  const data = solicitacao.getItens();
  if (data && data.length) {
    const toRemove = itensDataHolder.querySelector(".Box-row");
    itensDataHolder.removeChild(toRemove);
    data.forEach((i, idx) =>
      addHtml(itensDataHolder, itensDataTpl, Object.assign(i, { idx: idx + 1 }))
    );
  }
};
window.addEventListener("load", buildItens);
