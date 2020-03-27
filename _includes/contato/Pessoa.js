const Pessoa = function Pessoa(d) {
  if (!(this instanceof Pessoa)) return new Pessoa(d);
  d = d || {};
  Object.defineProperty(this, "nome", defineProp(d.nome || ""));
  Object.defineProperty(this, "celular", defineProp(d.celular || ""));
  Object.defineProperty(this, "email", defineProp(d.email || ""));
};
