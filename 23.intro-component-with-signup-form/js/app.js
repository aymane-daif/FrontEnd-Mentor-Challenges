const form = document.forms[0];
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const psswd = document.getElementById("psswd");
const email = document.getElementById("email");
const divs = form.querySelectorAll("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetErrors();
  addError(firstName);
  addError(lastName);
  addError(psswd);
  addError(email);
});

function addError(el) {
  if (el.value.trim() === "") {
    el.classList.add("error");
    el.parentElement.classList.add("error");
  } else if (!validateEmail(email.value)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
  }
}

function resetErrors() {
  divs.forEach((div) => {
    div.classList.remove("error");
    div.firstElementChild.classList.remove("error");
  });
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
