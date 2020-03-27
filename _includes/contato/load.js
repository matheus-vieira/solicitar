window.addEventListener("load", function(event) {
  const sol = solicitacao.getSolicitacao();
  const contato = sol.contato;
  setFormData(form, contato)
});
