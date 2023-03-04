const buildForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const submitBtn = document.createElement("button");

  submitBtn.innerHTML = "Search";

  form.appendChild(input);
  form.appendChild(submitBtn);
  document.body.appendChild(form);
};

export { buildForm };
