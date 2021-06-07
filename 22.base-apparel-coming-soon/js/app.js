const formEl = document.getElementById("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = e.target.email.value;
  if (!validateEmail(value)) {
    formEl.classList.add("error");
  } else if (formEl.classList.contains("error"))
    formEl.classList.remove("error");
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
