const aWhatsappHandler = function aWhatsappHandler(ev) {
  try {
      console.log("whatsapp handler");
      throw new Error("whatsapp");
  } catch (error) {
    ev.preventDefault();
    console.error(error);
    return false;
  }
};
document
  .getElementById("aWhatsapp")
  .addEventListener("click", aWhatsappHandler, false);
