window.addEventListener("load", function(event) {
  const url = "{{ '/assets/json/estabelecimentos.json' | relative_url }}";
  fetch(url)
    .then(r => r.json())
    .then(initEstabelecimentos)
    .then(initCategorias);
});
txtEstabelecimentoNome.addEventListener("change", function name(ev) {
  console.log("selected", this.value);
  const estabelecimento = estabelecimentoController.get("id", this.value);
  const text = estabelecimentoSelecionadoTpl.supplant(estabelecimento);
  divDetalhes.innerHTML = text;
});
