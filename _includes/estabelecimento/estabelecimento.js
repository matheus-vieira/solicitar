const Estabelecimento = function Estabelecimento(d) {
    if (!(this instanceof Estabelecimento))
      return new Estabelecimento(d);

    Object.assign(this, d || {});
    Object.defineProperty(this, "id", defineProp(uuid()));
    const end = Object.values(this["Endereço"]).join(", ");
    Object.defineProperty(this, "end", defineProp(`${end}`));
    Object.defineProperty(this, "label", defineProp(`${this.Nome}`));
  },
  estabelecimentoController = controller("estabelecimentos", Estabelecimento),
  initEstabelecimentos = function initEstabelecimentos(list) {
    estabelecimentoController.refresh(list);

    estabelecimentoController.getAll().forEach(e => {
      const text = optionTpl.supplant(e);
      txtEstabelecimentoNome.insertAdjacentHTML("beforeend", text);
    });

    return list;
  },
  txtEstabelecimentoNome = document.getElementById("txtEstabelecimentoNome");

document.getElementById("aProx").addEventListener("click", function(ev) {
  const form = document.getElementById("formDadosEstabelecimento");
  const formData = new FormData(form);
  const selected = formData.get("txtEstabelecimentoNome");
  const estabelecimento = estabelecimentoController.get("id", selected);
  try {
    estabelecimentoController.add(estabelecimento);
  } catch (error) {
    ev.preventDefault();
    console.error(error);
    return false;
  }
});
