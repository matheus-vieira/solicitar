const Pessoa = function Pessoa(formData) {
  if (!(this instanceof Pessoa)) return new Pessoa(formData);
  Object.defineProperty(this, "Nome", defineProp(formData.get("txtNome")));
  Object.defineProperty(this, "Celular", defineProp(formData.get("txtCelular")));
  Object.defineProperty(this, "Email", defineProp(formData.get("txtEmail")));
};
