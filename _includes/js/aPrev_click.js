const aPrevClickHandler = function aPrevClickHandler(ev) {
  if (form && !form.checkValidity()) {
    ev.preventDefault();
    form.reportValidity();
    return false;
  }

  try {
    aProxHandler && aProxHandler(ev);
  } catch (error) {
    ev.preventDefault();
    console.error(error);
    return false;
  }
};
document
  .getElementById("aPrev")
  .addEventListener("click", aPrevClickHandler, false);
