const loginForm = document.querySelector(".login-form");
const inputsForm = document.querySelectorAll("input");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields are mandatory");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    loginForm.reset();
  }
});
