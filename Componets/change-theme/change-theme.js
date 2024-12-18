const $ = document
let changeThem = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        $.documentElement.setAttribute('data-theme', 'light');
    }

    const currentTheme = $.documentElement.getAttribute('data-theme');
  
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    $.documentElement.setAttribute('data-theme', newTheme);
  
    localStorage.setItem('theme', newTheme);
};
let themModeBtn = $.querySelector("#themModeBtn")
let themModeBtnHeader = $.querySelector("#themModeBtnHeader")
themModeBtn.addEventListener("click" , changeThem)
themModeBtnHeader.addEventListener("click" , changeThem)

export {changeThem}