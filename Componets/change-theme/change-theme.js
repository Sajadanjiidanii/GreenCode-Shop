const $ = document
function toggleTheme() {
    let currentTheme = $.documentElement.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
      $.documentElement.setAttribute("data-theme", "light");
    } else {
      $.documentElement.setAttribute("data-theme", "dark");
    }
    
    localStorage.setItem("theme", $.documentElement.getAttribute("data-theme"));
}
  
function loadThemeFromStorage() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        $.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        $.documentElement.setAttribute("data-theme", "light");
    }
}

export { toggleTheme , loadThemeFromStorage }
