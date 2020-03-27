const Item = function Item(d) {
  if (!(this instanceof Item)) return new Item();

  Object.assign(this, d);
  Object.defineProperty(this, "id", defineProp(uuid()));
  Object.defineProperty(this, "nome", defineProp(d.nome || ""));
  Object.defineProperty(this, "quantidade", defineProp(d.quantidade || ""));
  Object.defineProperty(this, "unidade", defineProp(d.unidade || ""));
};
