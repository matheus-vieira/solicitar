window.addEventListener("load", function(event) {
  fetch("assets/estabelecimentos.json")
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
