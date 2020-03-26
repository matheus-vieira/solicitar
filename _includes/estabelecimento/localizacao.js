(function() {
  const url = "{{ '/assets/json/localizacao.json' | relative_url }}",
    estados = [],
    insert = function insert(list, select) {
      emptySelect(select);
      if (!list) return;
      list.forEach((e, i) => {
        const getLabel = x => typeof(x) === "object" ? Object.keys(e)[0] : x;
        const obj = { id: i, label:  getLabel(e)};
        const txt = optionTpl.supplant(obj);
        insertAdjacent.beforeEnd(select, txt);
      });
    };

  fetch(url)
    .then(r => r.json())
    .then(j => Array.prototype.push.apply(estados, j))
    .then(() => insert(estados, txtEstado));

  txtEstado.addEventListener("change", function name(ev) {
    let obj = estados[this.value];
    if (obj) obj = obj[Object.keys(obj)[0]];

    const list = (obj || {}).cidades;

    emptySelect(txtBairro);
    insert(list, txtCidade);
  });

  txtCidade.addEventListener("change", function name(ev) {
    let obj = estados[txtEstado.value];
    if (obj) obj = obj[Object.keys(obj)[0]];
    if (obj) obj = obj.cidades[this.value];
    if (obj) obj = obj[Object.keys(obj)[0]];

    const list = (obj || {}).bairros;
    insert(list, txtBairro);
  });
})();
