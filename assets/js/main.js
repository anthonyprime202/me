const themeToggle = document.querySelector("#theme-toggle");
const chosenTheme = localStorage.getItem("theme");


function setTheme() {
    switch (chosenTheme) {
        case "dark":
            document.documentElement.setAttribute("data-theme", "dark");
            break;
        case "light":
            document.documentElement.setAttribute("data-theme", "light");
            break;
        default:
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
            break;
    }
}

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
        localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark")
    } else {
        localStorage.setItem("theme", currentTheme === "dark"? "light" : "dark")
    }

    setTheme()
    window.location.reload()
}

if (themeToggle) {
    themeToggle.addEventListener("click", switchTheme);
}

setTheme()
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    setTheme();
    if (!chosenTheme) {
        localStorage.setItem("theme", "dark");
    }
}) 
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
    setTheme();
    if (!chosenTheme) {
        localStorage.setItem("theme", "light");
    }
}) 