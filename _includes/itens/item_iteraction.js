const addItem = function addItem() {
    if (divItens.childElementCount && !form.checkValidity()) {
      formItems.reportValidity();
      return;
    }
    const item = new Item({});
    addHtml(divItens, itemTpl, item);
    itens.push(item);
    checkRemoveBtn();
  },
  checkRemoveBtn = function () {
    document.querySelectorAll(".remove-item").forEach((btn) => {
      if (itens.length == 1) btn.classList.add("d-none");
      else btn.classList.remove("d-none");
    });
  },
  removeItem = function removeItem(id) {
    const elem = document.getElementById(`${id}`);
    if (elem) {
      divItens.removeChild(elem);
    }
    itensValid = itens.filter((i) => i.id != id);
    itens.length = 0;
    Array.prototype.push.apply(itens, itensValid);
    !divItens.childElementCount && addItem();
    checkRemoveBtn();
  },
  loadItens = function loadItens() {
    const selectedItens = solicitacao.getItens();
    if (selectedItens) {
      Array.prototype.push.apply(itens, selectedItens);
      itens.forEach((i) => addHtml(divItens, itemTpl, i));
      checkRemoveBtn();
      return;
    }
    addItem();
  };
