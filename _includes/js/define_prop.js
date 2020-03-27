const defineProp = function(val) {
  return {
    enumerable: true, /* não enumerável */
    configurable: true, /* não configurável */
    writable: true, /* não gravável */
    value: val
  };
};
