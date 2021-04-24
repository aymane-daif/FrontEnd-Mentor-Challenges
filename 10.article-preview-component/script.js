const share = document.getElementById("share");
const socials = document.getElementById("socials");

share.addEventListener("mouseenter", showSocials);
share.addEventListener("mouseleave", hideSocials);
share.addEventListener("click", () => {
  if (socials.classList.contains("invisible")) {
    showSocials();
  } else {
    hideSocials();
  }
});

function showSocials() {
  socials.classList.add("visible");
  socials.classList.remove("invisible");
}
function hideSocials() {
  socials.classList.add("invisible");
  socials.classList.remove("visible");
}
