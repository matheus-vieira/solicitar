const aProxClickHandler = function aProxClickHandler(ev) {
  if (form && !form.checkValidity()) {
    ev.preventDefault();
    form.reportValidity();
    return false;
  }

  try {
    aProxHandler(ev);
  } catch (error) {
    ev.preventDefault();
    console.error(error);
    return false;
  }
};
document
  .getElementById("aProx")
  .addEventListener("click", aProxClickHandler, false);
