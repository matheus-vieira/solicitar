const aEmailHandler = function aEmailHandler(ev) {
    try {
      const sol = solicitacao.getSolicitacao();
      checkSolicitacao(sol, "Email");
      const emailObj = buildEmailObject(sol);

      fetch(emailObj.link, { method: "post", body: emailObj.body });
    } catch (error) {
      ev.preventDefault();
      console.error(error);
      return false;
    }
  },
  buildEmailItens = function buildEmailItens(sol) {
    return sol.itens
      .map((e, i) =>
        "Item {idx}: {quantidade} {unidade} de {nome}".supplant(
          Object.assign(e, { idx: i + 1 })
        )
      )
      .join("\r\n");
  },
  buildEmailbody = function buildEmailMessage(sol) {
    return {
      _subject: "Solicitação de Compra",
      _cc: "{{ site.author.email }}",
/*{% if jekyll.environment == "production" %}*/
      _next: "{{ '/obrigado/' | absolute_url }}",
/*{% else %}*/
      _next: "http://localhost:8081/obrigado/",
/*{% endif %}*/
      _template: "box",
      email: sol.contato.email,
      message: `Olá, me chamo {nome} e gostaria de solicitar o(s) seguinte(s) item(ns):

{itens}

Obrigado.`.supplant({
        nome: sol.contato.nome,
        itens: buildEmailItens(sol)
      })
    };
  };
buildEmailObject = function(sol) {
  return Object.create(null, {
    link: defineProp(`https://formsubmit.co/` + sol.estabelecimento.Email),
    body: defineProp(buildEmailbody(sol))
  });
};
aEmail.addEventListener("click", aEmailHandler, false);
