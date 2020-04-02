const aWhatsappHandler = function aWhatsappHandler(ev) {
    try {
      const sol = solicitacao.getSolicitacao();
      if (!sol || !sol.estabelecimento || !sol.estabelecimento.Whatsapp) return;
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
  buildWhatsappItens = function buildItens(itens) {
    if (!itens && !itens.length) {
      throw new Error("informações faltantes");
    }
    return itens
      .map((e, i) =>
        "Item {idx}: {quantidade} {unidade} de {nome}".supplant(
          Object.assign(e, { idx: i + 1 })
        )
      )
      .join("\r\n");
  },
  buildWhatsappMessage = function buildWhatsappMessage(sol) {
    if (!sol || !sol.contato || !sol.contato.nome || !sol.itens)
      throw new Error("informações faltantes");

    return encodeURI(`Olá, me chamo {nome} e gostaria de solicitar o(s) seguinte(s) item(ns):

{itens}

Obrigado.`.supplant({
      nome: sol.contato.nome,
      itens: buildWhatsappItens(sol.itens)
    }));
  },
  buildWhatsappObject = function(sol) {
    if (
      !sol ||
      !sol.contato ||
      !sol.estabelecimento ||
      !sol.estabelecimento.Whatsapp ||
      !sol.itens
    )
      throw new Error("informações faltantes");

    return Object.create(null, {
      whatsapp: defineProp(sol.estabelecimento.Whatsapp),
      message: defineProp(buildWhatsappMessage(sol))
    });
  };
document
  .getElementById("aWhatsapp")
  .addEventListener("click", aWhatsappHandler, false);
