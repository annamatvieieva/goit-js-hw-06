const validationInput = document.querySelector("#validation-input");
const dataLength = +validationInput.dataset.length;

validationInput.addEventListener("blur", (event) => {
  const valueInput = validationInput.value;
  const valueLength = valueInput.length;

  if (valueLength === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
