const insertAdjacent = (function insetAdjacent() {
  const insert = (e, t, p) => e.insertAdjacentHTML(p, t);
  return {
    afterBegin: (elem, text) => insert(elem, text, "afterbegin"),
    afterEnd: (elem, text) => insert(elem, text, "afterend"),
    beforeBegin: (elem, text) => insert(elem, text, "beforebegin"),
    beforeEnd: (elem, text) => insert(elem, text, "beforeend")
  };
}());
