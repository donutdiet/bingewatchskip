/* ----------------------------------------------
Light/dark mode toggle button
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
Collapsible Sidebar Menu
- can't use "this" keyword in arrow function
- 
------------------------------------------------- */

const collapsibleMenus = document.querySelectorAll(".collapsible");

for(let i=0; i<collapsibleMenus.length; i++) {
    collapsibleMenus[i].addEventListener("click", collapseMenu);
}

function collapseMenu() {
    const tabs = this.nextElementSibling;
    const symbol = this.querySelector("span");
    if(tabs.style.display === "block") {
        tabs.style.display = "none";
        symbol.textContent = "+";
    } else {
        tabs.style.display = "block";
        symbol.textContent = "-";
    }
}