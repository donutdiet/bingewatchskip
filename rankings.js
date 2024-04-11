setTheme("light");

document.querySelector(".toggle-theme-button").addEventListener("click", toggleTheme);

function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.className == "dark" ? "light" : "dark";
    root.className = newTheme;

    document.querySelector(".toggle-theme-button").textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1) + " Mode";
}

function setTheme(theme) {
    const root = document.documentElement;
    root.className = theme;
    document.querySelector(".toggle-theme-button").textContent = theme.charAt(0).toUpperCase() + theme.slice(1) + " Mode";
}