const themeBtn = document.getElementById("theme");
const iconMode = document.getElementById("icon-mode");
const searchIcon = document.getElementById("search-icon");
const modeEl = document.getElementById("mode");

let mainBg, headingBg, text;

themeBtn.addEventListener("click", (e) => {
  let mode = modeEl.textContent;
  if (mode === "Dark Mode") {
    iconMode.src = "./images/sunny.svg";
    searchIcon.src = "./images/search-light.svg";
    modeEl.textContent = "Light Mode";
    updateTheme(1);
    changeTheme();
    localStorage.setItem("theme", 1);
  } else {
    iconMode.src = "./images/moon.svg";
    searchIcon.src = "./images/search.svg";
    modeEl.textContent = "Dark Mode";
    updateTheme(0);
    changeTheme();
    localStorage.setItem("theme", 0);
  }
});

function updateTheme(theme) {
  if (theme === 0) {
    mainBg = "hsl(209, 23%, 22%)";
    headingBg = "hsl(207, 26%, 17%)";
    text = "hsl(0, 0%, 100%)";
    grey = "#ccc";
  } else {
    mainBg = "hsl(0, 0%, 98%)";
    headingBg = "hsl(0, 0%, 100%)";
    text = "hsl(200, 15%, 8%)";
    grey = "#111";
  }
}

function changeTheme() {
  document.documentElement.style.setProperty("--bg-main", mainBg);
  document.documentElement.style.setProperty("--bg-heading", headingBg);
  document.documentElement.style.setProperty("--text", text);
  document.documentElement.style.setProperty("--grey", grey);
}

//check local Storage if it's empty or not
//If it's empty show Dark theme
//If it's not show last theme chosen
if (localStorage.getItem("theme") !== null) {
  let item = Number(localStorage.getItem("theme"));
  if (item === 1) {
    iconMode.src = "./images/sunny.svg";
    searchIcon.src = "./images/search-light.svg";
    modeEl.textContent = "Light Mode";
  } else {
    iconMode.src = "./images/moon.svg";
    modeEl.textContent = "Dark Mode";
    searchIcon.src = "./images/search.svg";
  }
  updateTheme(item);
  changeTheme();
} else {
  iconMode.src = "./images/moon.svg";
  modeEl.textContent = "Dark Mode";
  searchIcon.src = "./images/search.svg";
  updateTheme(0);
  changeTheme();
}
