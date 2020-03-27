const solicitacao = (function Solicitacao(d) {
  const storageKey = "solicitcao",
    solicitcaoObj = Object.create(null, {});

  const getSolicitacao = function getSolicitacao() {
    const solicitcaoStr = localStorage.getItem(storageKey);

    if (solicitcaoStr) Object.assign(solicitcaoObj, JSON.parse(solicitcaoStr));

    return solicitcaoObj;
  };

  const updateStorage = function updateStorage() {
    const str = JSON.stringify(solicitcaoObj);
    localStorage.setItem(storageKey, str);
  };

  const change = function change(value) {
    Object.assign(solicitcaoObj, value);
    updateStorage();
  };

  return Object.create(null, {
    addContato: defineProp(c => change({ contato: c })),
    addEstabelecimento: defineProp(e => change({ estabelecimento: e })),
    addItens: defineProp(i => change({ itens: i })),
    getSolicitacao: defineProp(getSolicitacao)
  });
})();
