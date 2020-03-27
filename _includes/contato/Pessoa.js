const Pessoa = function Pessoa(d) {
  if (!(this instanceof Pessoa)) return new Pessoa(d);
  d = d || {};
  Object.defineProperty(this, "Nome", defineProp(d.nome || ""));
  Object.defineProperty(this, "Celular", defineProp(d.celuar || ""));
  Object.defineProperty(this, "Email", defineProp(d.email || ""));
};
