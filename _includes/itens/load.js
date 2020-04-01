window.addEventListener("load", loadItens);
document.getElementById("btnAddItem").addEventListener("click", addItem, false);
document.addEventListener(
  "click",
  function(event) {
    if (event.target.matches(".remove-item")) {
      removeItem(event.target.dataset.id);
    }
  },
  false
);
