/* ----------------------------------------------
LIGHT/DARK MODE TOGGLE BUTTON MODULE
- set default mode to system preferences
- edit textContent in setTheme so the text is
updated accordingly when the page loads in
- 
------------------------------------------------- */

const ThemeModule = (function() {
    // Cache DOM
    const root = document.documentElement;
    const button = root.querySelector(".toggle-theme-button");
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    // Bind Events
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

    return {
        toggleTheme,
    }
})();

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
BINGE WATCH SKIP USER RANKING FORM MODULE
- 
------------------------------------------------- */

const RankingForm = (function() {
    const rankingFormDialog = document.querySelector(".ranking-form-dialog");
    const rankingForm = rankingFormDialog.querySelector("form");
    const openFormButton = document.querySelector(".ranking-form-button");
    const closeFormButton = rankingForm.querySelector(".close-button");
    const submitFormButton = rankingForm.querySelector(".submit-button");

    openForm(); // TEMP

    openFormButton.addEventListener("click", openForm);
    closeFormButton.addEventListener("click", closeForm);

    function openForm() {
        rankingFormDialog.showModal();
    }

    function closeForm() {
        rankingForm.reset();
        rankingFormDialog.close();
    }
})();