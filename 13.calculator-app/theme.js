const toggleWrapper = document.querySelector(".toggle-wrapper");
const inputs = document.querySelectorAll(".toggle-wrapper input");
const themes = document.querySelectorAll(".theme");

let mainBg,
  keypadBg,
  screenBg,
  keyBg,
  keyShadow,
  keyBgSecondary,
  shadowKeySecondary,
  keyToggle,
  keyToggleShadow,
  textPrimary,
  textSecondary,
  textKey;

toggleWrapper.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    showToggle(e.target); //change theme based on clicking inside toggle bg
  }
});

themes.forEach((theme, idx) => {
  theme.addEventListener("click", () => {
    //change theme based on clicking on numbers
    showToggle(inputs[idx]);
    updateTheme(idx);
    changeTheme();
  });
});

function showToggle(checkedInput) {
  inputs.forEach((input, idx) => {
    if (input === checkedInput) {
      if (!input.previousElementSibling.classList.contains("show")) {
        input.previousElementSibling.classList.add("show"); //show toggle ball
        themes[idx].classList.add("active"); // give the active state to the corresponding number
        updateTheme(idx); // change color's variables to the new ones
        changeTheme(); // change root variable to the new theme
        localStorage.setItem("theme", idx); //set Local Storage to the current theme
      }
    } else {
      input.previousElementSibling.classList.remove("show");
      themes[idx].classList.remove("active");
    }
  });
}

function updateTheme(theme) {
  if (theme === 0) {
    mainBg = "hsl(222, 26%, 31%)";
    keypadBg = "hsl(223, 31%, 20%)";
    screenBg = "hsl(224, 36%, 15%)";
    keyBg = "hsl(30, 25%, 89%)";
    keyShadow = "hsl(28, 16%, 65%)";
    keyBgSecondary = "hsl(225, 21%, 49%)";
    shadowKeySecondary = "hsl(224, 28%, 35%)";
    keyToggle = "hsl(6, 63%, 50%)";
    keyToggleShadow = "hsl(6, 70%, 34%)";
    textPrimary = " #fff";
    textSecondary = "#fff";
    textKey = "hsl(221, 14%, 31%)";
  } else if (theme === 1) {
    mainBg = "hsl(0, 0%, 90%)";
    keypadBg = "hsl(0, 5%, 81%)";
    screenBg = " hsl(0, 0%, 93%)";
    keyBg = " hsl(45, 7%, 89%)";
    keyShadow = "hsl(35, 11%, 61%)";
    keyBgSecondary = "hsl(185, 42%, 37%)";
    shadowKeySecondary = "hsl(185, 58%, 25%)";
    keyToggle = "hsl(25, 98%, 40%)";
    keyToggleShadow = "hsl(25, 99%, 27%)";
    textPrimary = "#fff";
    textSecondary = "hsl(0, 0, 100%)";
    textKey = "hsl(60,10%,19%)";
  } else {
    mainBg = "hsl(268, 75%, 9%)";
    keypadBg = "hsl(268, 71%, 12%)";
    screenBg = "hsl(268, 71%, 12%)";
    keyBg = " hsl(268, 47%, 21%)";
    keyShadow = "hsl(290, 70%, 36%)";
    keyBgSecondary = "hsl(281, 89%, 26%)";
    shadowKeySecondary = "hsl(285, 91%, 52%)";
    keyToggle = "hsl(176, 100%, 44%)";
    keyToggleShadow = " hsl(177, 92%, 70%)";
    textPrimary = "#fff";
    textSecondary = "hsl(52, 100%, 62%)";
    textKey = "hsl(52, 100%, 62%)";
  }
}

function changeTheme() {
  document.documentElement.style.setProperty("--main-bg", mainBg);
  document.documentElement.style.setProperty("--keypad-bg", keypadBg);
  document.documentElement.style.setProperty("--screen-bg", screenBg);
  document.documentElement.style.setProperty("--key-bg", keyBg);
  document.documentElement.style.setProperty("--key-shadow", keyShadow);
  document.documentElement.style.setProperty(
    "--key-bg-secondary",
    keyBgSecondary
  );
  document.documentElement.style.setProperty(
    "--shadow-key-secondary",
    shadowKeySecondary
  );
  document.documentElement.style.setProperty("--key-toggle", keyToggle);
  document.documentElement.style.setProperty(
    "--key-toggle-shadow",
    keyToggleShadow
  );
  document.documentElement.style.setProperty("--text-primary", textPrimary);
  document.documentElement.style.setProperty("--text-secondary", textSecondary);
  document.documentElement.style.setProperty("--text-key", textKey);
}

//check local Storage if it's empty or not
//If it's empty show theme based on default app mode(dark or light)
//If it's not show last theme chosen
if (localStorage.getItem("theme") !== null) {
  let item = Number(localStorage.getItem("theme"));
  showToggle(inputs[item]);
  updateTheme(item);
  changeTheme();
} else {
  //show theme based on default app mode(dark or light)
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    showToggle(inputs[0]);
    updateTheme(0);
    changeTheme();
  } else {
    showToggle(inputs[1]);
    updateTheme(1);
    changeTheme();
  }
}
