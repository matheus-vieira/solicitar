window.addEventListener("load", function(event) {
  fetch("{{ 'assets/json/estabelecimentos.json' | relative_url }}", {
    cache: "no-cache"
  })
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

  fetch("{{ 'assets/json/categorias.json' | relative_url }}", {
    cache: "no-cache"
  })
    .then(r => r.json())
    .then(categoriasController.refresh);
});
txtEstabelecimento.addEventListener("change", function name(ev) {
  const estabelecimento = estabelecimentoController.get("id", this.value);
  const text = estabelecimentoSelecionadoTpl.supplant(estabelecimento);
  divDetalhes.innerHTML = text;
});
