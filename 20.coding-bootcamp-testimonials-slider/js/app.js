const paragraphEl = document.getElementById("paragraph");
const nameEl = document.getElementById("name");
const jobEl = document.getElementById("job");
const avatarEl = document.getElementById("avatar");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

const paragraphs = [
  ` “ I’ve been interested in coding for a while but never taken the jump,
until now. I couldn’t recommend this course enough. I’m now in the job
of my dreams and so excited about the future. ”`,
  `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
];
const names = ["Tanya Sinclair", "John Tarkpor"];
const jobs = ["UX Engineer", "Junior Front-end Developer"];
const images = ["./images/image-tanya.jpg", "./images/image-john.jpg"];

const content = {
  p: paragraphs,
  name: names,
  job: jobs,
  image: images,
};
let i = 0;
prevEl.addEventListener("click", (e) => {
  i--;
  if (i === -1) {
    i = 1;
  }

  paragraphEl.textContent = content.p[i];
  nameEl.textContent = content.name[i];
  jobEl.textContent = content.job[i];
  avatarEl.src = content.image[i];
  document.body.classList.add("fade");
  setTimeout(() => document.body.classList.remove("fade"), 300);
});
nextEl.addEventListener("click", (e) => {
  i++;
  if (i === 2) {
    i = 0;
  }

  paragraphEl.textContent = content.p[i];
  nameEl.textContent = content.name[i];
  jobEl.textContent = content.job[i];
  avatarEl.src = content.image[i];
  document.body.classList.add("fade");
  setTimeout(() => document.body.classList.remove("fade"), 300);
});
