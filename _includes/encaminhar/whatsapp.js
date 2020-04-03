const aWhatsappHandler = function aWhatsappHandler(ev) {
    try {
      const sol = solicitacao.getSolicitacao();
      checkSolicitacao(sol);
      this.target = "_blank";
      this.href = `https://api.whatsapp.com/send?phone={whatsapp}&text={message}`.supplant(
        buildWhatsappObject(sol)
      );
    } catch (error) {
      ev.preventDefault();
      console.error(error);
      return false;
    }
  },
  buildWhatsappItens = function buildItens(sol) {
    return sol.itens
      .map((e, i) =>
        "Item {idx}: {quantidade} {unidade} de {nome}".supplant(
          Object.assign(e, { idx: i + 1 })
        )
      )
      .join("\r\n");
  },
  buildWhatsappMessage = function buildWhatsappMessage(sol) {
    return encodeURI(
      `Olá, me chamo {nome} e gostaria de solicitar o(s) seguinte(s) item(ns):

{itens}

Obrigado.`.supplant({
        nome: sol.contato.nome,
        itens: buildWhatsappItens(sol)
      })
    );
  },
  buildWhatsappObject = function(sol) {
    return Object.create(null, {
      whatsapp: defineProp(sol.estabelecimento.Whatsapp),
      message: defineProp(buildWhatsappMessage(sol))
    });
  };

aWhatsapp.addEventListener("click", aWhatsappHandler, false);
