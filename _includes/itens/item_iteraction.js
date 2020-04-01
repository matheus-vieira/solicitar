const addItem = function addItem() {
    if (divItens.childElementCount && !form.checkValidity()) {
      formItems.reportValidity();
      return;
    }
    const item = new Item({});
    addHtml(divItens, itemTpl, item);
    itens.push(item);
  },
  removeItem = function removeItem(id) {
    const elem = document.getElementById(`fieldset-${id}`);
    if (elem) {
      divItens.removeChild(elem);
    }
    !divItens.childEle69.mentCount && addItem();
  },
  loadItens = function loadItens() {
    const selectedItens = solicitacao.getItens();
    if (selectedItens) {
      Array.prototype.push.apply(itens, selectedItens);
      itens.forEach(i => addHtml(divItens, itemTpl, i));
      return;
    }
    addItem();
  };
