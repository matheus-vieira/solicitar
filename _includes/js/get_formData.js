const getFormData = function getFormData(form) {
  const formData = new FormData(form);
  const data = Object.create(null, {});
  for (const key of formData.keys()) {
    Object.defineProperty(data, key, defineProp(formData.get(key)));
  }
  return data;
};
