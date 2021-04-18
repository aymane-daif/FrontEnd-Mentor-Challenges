const head = document.getElementById("header");
const checkbox = document.getElementById("checkbox");
const h1 = document.getElementsByTagName("h1")[0];
const mobileNav = document.getElementById("mobile-nav");

checkbox.addEventListener("click", ischecked);

function ischecked() {
  if (checkbox.checked) {
    head.classList.add("overlay");
    h1.style.display = "none";
    mobileNav.classList.add("show");
  } else {
    head.classList.remove("overlay");
    h1.style.display = "block";
    mobileNav.classList.remove("show");
  }
}
