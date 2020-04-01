const emailFormTpl = `<form method="POST" action="https://formsubmit.co/{estabelecimento.email}">
<input type="hidden" name="_subject" value="Solicitação de Compra!">
<input type="hidden" name="_cc" value="{{ author.email }}">
<input type="hidden" name="_next" value="{{ '/obrigado/' | absolute_url }}">
<input type="hidden" name="_template" value="box">
<input type="email" name="email" placeholder="{contato.em-mail}">
<textarea name="message">{message}</textarea>
</form>`;
const aEmailHandler = function aEmailHandler(ev) {
  try {
    console.log("email handler");
    const sol = solicitacao.getSolicitacao();
    if (!sol || !sol.contato || !sol.estabelecimento || !sol.itens)
        throw new Error("informações faltantes");
    
    
    throw new Error("email");
  } catch (error) {
    ev.preventDefault();
    console.error(error);
    return false;
  }
};
document
  .getElementById("aEmail")
  .addEventListener("click", aEmailHandler, false);
