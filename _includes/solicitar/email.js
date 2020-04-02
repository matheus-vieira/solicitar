const aEmailHandler = function aEmailHandler(ev) {
    ev.preventDefault();
    try {
      const sol = solicitacao.getSolicitacao();
      checkSolicitacao(sol, "Email");
      const emailObj = buildEmailObject(sol);
      formEmail.action = formEmail.action + emailObj.estabelecimentoEmail;
      email.value = emailObj.contatoEmail;
      message.value = emailObj.message;
      formEmail.submit();
      return true;
    } catch (error) {
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
  buildEmailMessage = function buildEmailMessage(sol) {
    return `Olá, me chamo {nome} e gostaria de solicitar o(s) seguinte(s) item(ns):

    {itens}
    
    Obrigado.`.supplant({
      nome: sol.contato.nome,
      itens: buildEmailItens(sol)
    });
  },
  buildEmailObject = function(sol) {
    return Object.create(null, {
      estabelecimentoEmail: defineProp(sol.estabelecimento.Email),
      contatoEmail: defineProp(sol.contato.email),
      message: defineProp(buildEmailMessage(sol))
    });
  };
aEmail.addEventListener("click", aEmailHandler, false);
