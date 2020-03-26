const emptySelect = function emptySelect(select) {
  while (select.options.length > 1) select.remove(1);
};
