const addHtml = function addHtml(elem, tpl, obj) {
  const text = tpl.supplant(obj);
  insertAdjacent.beforeEnd(elem, text);
};
