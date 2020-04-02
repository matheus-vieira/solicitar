const checkSolicitacao = function checkSolicitacao(sol, prop = "Whatsapp") {
  if (
    !sol ||
    !sol.contato ||
    !sol.contato.nome ||
    !sol.estabelecimento ||
    !sol.estabelecimento[prop] ||
    !sol.itens ||
    !sol.itens.length
  )
    throw new Error("informações faltantes");
};
