document.getElementById("aProx").addEventListener("click", function(ev) {
  if (!form.checkValidity()) {
    ev.preventDefault();
    form.reportValidity();
    return false;
  }
  aProxHandler(ev);
}, false);
