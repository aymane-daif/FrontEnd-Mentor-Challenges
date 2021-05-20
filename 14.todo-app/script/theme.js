const themeIcon = document.getElementById("theme");

let bgImg,
  bgColor,
  todosBg,
  muted,
  hoverColor,
  textPrimary,
  textSecondary,
  textDashed;

themeIcon.addEventListener("click", (e) => {
  let alt = e.target.getAttribute("alt");
  if (alt === "icon-sun") {
    updateTheme("light", e.target);
  } else {
    updateTheme("dark", e.target);
  }
  changeTheme();
});

function updateTheme(theme, img) {
  if (theme === "dark") {
    img.setAttribute("src", "./images/icon-sun.svg");
    img.setAttribute("alt", "icon-sun");
    localStorage.setItem("theme", theme);

    bgImg = "url('../images/bg-desktop-dark.jpg')";
    bgColor = "hsl(235, 21%, 11%)";
    todosBg = " hsl(235, 24%, 19%)";
    muted = "hsl(234, 11%, 52%)";
    hoverColor = "hsl(236, 33%, 92%)";
    textPrimary = "hsl(234, 39%, 85%)";
    textSecondary = " hsl(233, 11%, 84%)";
    textDashed = "hsl(234, 11%, 52%)";
  } else if (theme === "light") {
    img.setAttribute("src", "./images/icon-moon.svg");
    img.setAttribute("alt", "icon-moon");
    localStorage.setItem("theme", theme);

    bgImg = "url('../images/bg-desktop-light.jpg')";
    bgColor = " hsl(0, 0%, 98%)";
    todosBg = " hsl(0, 0%, 98%)";
    muted = "hsl(250, 3%, 63%)";
    hoverColor = " hsl(233, 14%, 35%)";
    textPrimary = " hsl(235, 19%, 35%)";
    textSecondary = " hsl(233, 11%, 84%)";
    textDashed = "hsl(233, 11%, 84%)";
  }
}

function changeTheme() {
  document.documentElement.style.setProperty("--bg-img", bgImg);
  document.documentElement.style.setProperty("--bg-color", bgColor);
  document.documentElement.style.setProperty("--todos-bg", todosBg);
  document.documentElement.style.setProperty("--muted", muted);
  document.documentElement.style.setProperty("--hover-color", hoverColor);
  document.documentElement.style.setProperty("--text-primary", textPrimary);
  document.documentElement.style.setProperty("--text-secondary", textSecondary);
  document.documentElement.style.setProperty("--text-dashed", textDashed);
}

//check local Storage if it's empty or not
//If it's empty show dark theme
//If it's not show last theme chosen
if (localStorage.getItem("theme") !== null) {
  let lastTheme = localStorage.getItem("theme");

  updateTheme(lastTheme, themeIcon);
  changeTheme();
} else {
  updateTheme("dark", themeIcon);
  changeTheme();
}
