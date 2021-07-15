const hamburgerEl = document.getElementById("hamburger");
const navEl = document.getElementById("nav-mobile");
hamburgerEl.addEventListener("click", (e) => {
  navEl.classList.toggle("show");
});
