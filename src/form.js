const buildForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const submitBtn = document.createElement("button");
  const main = document.querySelector("main");

  submitBtn.innerHTML = "Search";

  form.appendChild(input);
  form.appendChild(submitBtn);
  main.appendChild(form);
};

export { buildForm };
