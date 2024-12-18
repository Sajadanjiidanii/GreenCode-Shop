function toggleTheme() {
    let currentTheme = $.documentElement.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    
    localStorage.setItem("theme", $.documentElement.getAttribute("data-theme"));
}
  
function loadThemeFromStorage() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

export { toggleTheme , loadThemeFromStorage }
