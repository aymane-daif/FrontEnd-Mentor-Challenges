const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    if (e.target.tagName === "P" || e.target.tagName === "IMG") {
      removeAllActive(e.target.parentElement);
      removeActive(e.target.parentElement);
    } else if (e.target.id === "quest") {
      removeAllActive(e.target);
      removeActive(e.target);
    }
  });
});

function removeActive(ques) {
  if (ques.classList.contains("active")) {
    ques.classList.remove("active");
  } else ques.classList.add("active");
}
function removeAllActive(ques) {
  faqs.forEach((faq) => {
    faq = faq.querySelector("#quest");
    if (faq !== ques) {
      if (faq.classList.contains("active")) faq.classList.remove("active");
    }
  });
}
