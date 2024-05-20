/* ----------------------------------------------
LIGHT/DARK MODE TOGGLE BUTTON MODULE
- set default mode to system preferences
- edit textContent in setTheme so the text is
updated on init()
- 
------------------------------------------------- */

const ThemeModule = (function() {
    const root = document.documentElement;
    const button = root.querySelector(".toggle-theme-button");
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    button.addEventListener("click", toggleTheme);
    setTheme("default");

    function toggleTheme() {
        if (root.classList.contains("default")) {
            setTheme("light");
        } else if (root.className === "light") {
            setTheme("dark");
        } else if (root.className === "dark") {
            setTheme("default");
        }
    }

    function setTheme(theme) {
        if(theme === "light" || theme === "dark") {
            root.className = theme;
            button.textContent = `${capitalize(theme)} Mode`
        } else if(theme === "default") {
            root.classList.add("default", preference);
            button.textContent = "Default Mode";
        } else {
            console.log("Error: not a valid theme");
        }
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
})();

ThemeModule.init();

/* ----------------------------------------------
COLLAPSIBLE SIDEBAR MENU MODULE
- can't use "this" keyword in arrow function
- an element's initial "display" property is 
alwaysset to "" rather than "block" even when I 
am explicitly setting it to block? idk why
------------------------------------------------- */

const SidebarModule = (function() {
    const sidebar = document.querySelectorAll(".collapsible");

    sidebar.forEach((menu) => menu.addEventListener("click", toggleMenu));

    function toggleMenu() {
        // this refers to the menu that triggers the event
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
})();

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