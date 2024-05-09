const checkSolicitacao = function checkSolicitacao(sol, prop = "whatsapp") {
  if (
    !sol ||
    !sol.contato ||
    !sol.contato.nome ||
    !sol.estabelecimento ||
    !sol.estabelecimento[prop] ||
    !Array.isArray(sol.itens) ||
    !sol.itens.length
  )
    throw new Error("informações faltantes");
};
