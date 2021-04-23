const error = document.getElementById("error");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(email.value)) {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
});

// A function that validates email -----Taken from STACKOVERFLOW-----
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
