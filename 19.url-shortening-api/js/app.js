const hamburgerBtn = document.getElementById("hamburger");
const navMobile = document.getElementById("nav-mobile");
const linksEl = document.getElementById("links");
const formEl = document.getElementById("form");
const linkUrl = document.getElementById("short-link");

hamburgerBtn.addEventListener("click", (e) => {
  navMobile.classList.toggle("show");
});

const getTodos = async (url) => {
  let response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`
  );

  if (response.status !== 201) {
    throw new Error("cannot fetch the data");
  }
  let data = await response.json();
  return data;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = linkUrl.value.trim();
  linkUrl.value = "";

  getTodos(value)
    .then((data) => {
      addLink(value, data.result.short_link);

      const copyBtn = document.getElementById("copy");

      copyBtn.addEventListener("click", () => {
        copyBtn.classList.remove("copy");
        copyBtn.classList.add("copied");
        copyBtn.textContent = "Copied!";

        //copy to the clipboard
        const textarea = document.createElement("textarea");
        const shortUrl = document.getElementById("short").textContent;
        textarea.value = shortUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      });
    })
    .catch((err) => alert(err.message));
});

function addLink(url, short) {
  let html = `
  <div class="link">
    <div class="link-left">
      <h5>${url}</h5>
    </div>
    <div class="link-right">
      <h5 id="short">${short}</h5>
      <button class="btn copy" id="copy">Copy</button>
    </div>
  </div>`;
  linksEl.innerHTML += html;
}
