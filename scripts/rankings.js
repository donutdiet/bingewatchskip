/* ----------------------------------------------
LIGHT/DARK MODE TOGGLE BUTTON
- default light mode since I think it looks 
better (will implement system default later)
- 
------------------------------------------------- */

setTheme("light");

document.querySelector(".toggle-theme-button").addEventListener("click", toggleTheme);

function toggleTheme() {
    const root = document.documentElement;
    root.className == "dark" ? setTheme("light") : setTheme("dark");

    document.querySelector(".toggle-theme-button").textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1) + " Mode";
}

function setTheme(theme) {
    const root = document.documentElement;
    root.className = theme;
    document.querySelector(".toggle-theme-button").textContent = theme.charAt(0).toUpperCase() + theme.slice(1) + " Mode";
}

/* ----------------------------------------------
COLLAPSIBLE SIDEBAR MENU
- can't use "this" keyword in arrow function
- an element's initial "display" property is always
set to "" rather than "block" even when I am
explicitly setting it to block? idk why
------------------------------------------------- */

const collapsibleMenus = document.querySelectorAll(".collapsible");

for(let i=0; i<collapsibleMenus.length; i++) {
    collapsibleMenus[i].addEventListener("click", collapseMenu);
}

function collapseMenu() {
    const tabs = this.nextElementSibling;
    const symbol = this.querySelector("span");
    if(tabs.style.display === "none") {
        tabs.style.display = "block";
        symbol.textContent = "-";
    } else {
        tabs.style.display = "none";
        symbol.textContent = "+";
    }
}

/* ----------------------------------------------
BINGE WATCH SKIP USER RANKING FORM
- 
------------------------------------------------- */
const rankingFormButton = document.querySelector(".ranking-form-button");
const rankingForm = document.querySelector(".ranking-form");

rankingFormButton.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(rankingForm);
    if(computedStyle.display === "none") {
        rankingForm.style.display = "block";
    } else {
        rankingForm.style.display = "none";
    }
});