let darkMode = localStorage.getItem("dark-mode");
var element = document.body;
if (darkMode == "disabled") {
    element.classList.remove("dark-mode");
}

function toggleDarkMode() {
    element.classList.toggle("dark-mode");
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
        element.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        element.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
} 