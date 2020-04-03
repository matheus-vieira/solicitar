const Estabelecimento = function Estabelecimento(d) {
    if (!(this instanceof Estabelecimento)) return new Estabelecimento(d);

    Object.assign(this, d || {});
    Object.defineProperty(this, "id", defineProp(uuid()));
    const end = Object.values(this["endereco"]).join(", ");
    Object.defineProperty(this, "end", defineProp(`${end}`));
    Object.defineProperty(this, "label", defineProp(`${this.nome}`));
    const categorias = Object.values(this["categoria"]).join(", ");
    Object.defineProperty(this, "categorias", defineProp(`${categorias}`));
  };
