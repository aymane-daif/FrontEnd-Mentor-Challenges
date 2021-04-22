const header = document.getElementsByTagName("header")[0];
const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

const content = [
  {
    heading: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: "url(./images/desktop-image-hero-1.jpg)",
  },
  {
    heading: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: "url(./images/desktop-image-hero-2.jpg)",
  },
  {
    heading: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "url(./images/desktop-image-hero-3.jpg)",
  },
];
//Left Arrow
let counter = 0;
rightArrow.addEventListener("click", rightSlide);
function rightSlide() {
  counter++;
  if (counter == 3) {
    counter = 0;
  }
  h1.innerText = content[counter].heading;
  p.innerText = content[counter].paragraph;
  header.style.backgroundImage = content[counter].image;
}
//Right Arrow
leftArrow.addEventListener("click", leftSlide);
function leftSlide() {
  counter--;
  if (counter == -1) {
    counter = 2;
  }
  h1.innerText = content[counter].heading;
  p.innerText = content[counter].paragraph;
  header.style.backgroundImage = content[counter].image;
}

/*----------------------------------------------------*/
const checkbox = document.getElementById("checkbox");
const openBtn = document.getElementsByClassName("open")[0];
const closeBtn = document.getElementsByClassName("close")[0];
const heading = document.getElementsByClassName("heading")[0];

checkbox.addEventListener("click", isChecked);
function isChecked() {
  if (checkbox.checked) {
    closeBtn.classList.add("show");
    closeBtn.classList.remove("hide");
    openBtn.classList.add("hide");
    openBtn.classList.remove("show");
    heading.classList.add("show-nav");
  } else {
    closeBtn.classList.add("hide");
    closeBtn.classList.remove("show");
    openBtn.classList.add("show");
    openBtn.classList.remove("hide");
    heading.classList.remove("show-nav");
  }
}
