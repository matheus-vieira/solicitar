const Estabelecimento = function Estabelecimento(d) {
    if (!(this instanceof Estabelecimento)) return new Estabelecimento(d);

    Object.assign(this, d || {});
    Object.defineProperty(this, "id", defineProp(uuid()));
    const end = Object.values(this["Endereço"]).join(", ");
    Object.defineProperty(this, "end", defineProp(`${end}`));
    Object.defineProperty(this, "label", defineProp(`${this.Nome}`));
  };
