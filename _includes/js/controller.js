const controller = function controller(key, obj) {
  let list = [];
  const storage = localStorage;

  const updateStorage = function updateStorage(newList) {
    if (newList) storage.clear();
    const str = JSON.stringify(newList || list);
    storage.setItem(key, str);
  };

  const getStorage = function getStorage(newList) {
    list = storage.getItem(key);
    if (list) list = JSON.parse(list);
    list = list || [];

    list = list.map(i => new obj(i));
  };

  const change = function change(item, action) {
    if (!(item instanceof obj)) {
      alert("Ação não permitida");
      return;
    }
    action();
    updateStorage();
  };

  getStorage();

  return Object.create(null, {
    refresh: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(newList) {
        updateStorage(newList);
        getStorage();
        return list;
      }
    },
    count: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function() {
        return list.length;
      }
    },
    getAll: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(prop, value) {
        if (prop && value) return list.filter(p => p[prop] === value);
        return list;
      }
    },
    get: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(prop, value) {
        if (prop && value) return list.find(p => p[prop] === value);
      }
    },
    add: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(item) {
        change(item, function() {
          list.push(item);
        });
      }
    },
    remove: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(item) {
        change(item, function() {
          var index = list.findIndex(p => p.id === item.id);
          list.splice(index, 1);
        });
      }
    },
    update: {
      enumerable: true,
      writable: false,
      configurable: true,
      value: function(item) {
        change(item, function() {
          var p = list.find(p => p.id === item.id);
          Object.assign(p, item);
        });
      }
    }
  });
};
