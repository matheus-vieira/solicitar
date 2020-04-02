window.addEventListener("load", function(event) {
  const url = "{{ 'assets/json/estabelecimentos.json' | relative_url }}";
  fetch(url, { cache: "no-cache" })
    .then(r => r.json())
    .then(r => {
      const list = [];
      for (const key in r) {
        if (r.hasOwnProperty(key)) {
          list.push(r[key]);
        }
      }
      return list;
    })
    .then(list => {
      estabelecimentoController.refresh(list).forEach(e => {
        const text = optionTpl.supplant(e);
        insertAdjacent.beforeEnd(txtEstabelecimento, text);
      });
      return list;
    })
    .then(list => {
      const categs = Array.from(new Set(list.flatMap(e => e.Categoria)));
      categoriasController.refresh(categs);
      return list;
    })
    .then(list => {
      const estabelecimento = solicitacao.getEstabelecimento();
      if (estabelecimento) {
        const filtrado = estabelecimentoController.getAll(
          "Nome",
          estabelecimento.Nome
        );
        const selecionado = filtrado[0];
        selecionado && (txtEstabelecimento.value = selecionado.id);
      }
    });
});
txtEstabelecimento.addEventListener("change", function name(ev) {
  const estabelecimento = estabelecimentoController.get("id", this.value);
  const text = estabelecimentoSelecionadoTpl.supplant(estabelecimento);
  divDetalhes.innerHTML = text;
});
