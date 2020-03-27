const setFormData = function setFormData(form, data) {
  if(!data) return;
  const formData = new FormData(form),
    keys = Object.keys(data);

  for (const key of keys) {
    document.getElementById(key).value = data[key];
  }
};
