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
  };
