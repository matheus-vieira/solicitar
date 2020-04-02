const checkSolicitacao = function checkSolicitacao(sol) {
  if (
    !sol ||
    !sol.contato ||
    !sol.contato.nome ||
    !sol.estabelecimento ||
    !sol.estabelecimento.Whatsapp ||
    !sol.itens ||
    !sol.itens.length
  )
    throw new Error("informações faltantes");
};
