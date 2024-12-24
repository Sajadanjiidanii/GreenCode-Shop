import { item } from "../Componets/Item/item.js"
import { optionItem } from "../Componets/option-item/option-item.js"
import { weblogItem } from "../Componets/weblog-item/weblog-item.js"

window.customElements.define("item-box", item)
window.customElements.define("option-item", optionItem)
window.customElements.define("weblog-item", weblogItem)

const $ = document

/// crate custome tag

/// header ctrl

/// toggle Menu Module
import { menuModuleHandler } from "../Componets/menu-module/menu-module.js";
menuModuleHandler();

/// Change Them ///
import { toggleTheme, loadThemeFromStorage } from '../Componets/change-theme/change-theme.js';

const themeModeBtn = document.querySelector("#themModeBtn");
const themeModeBtnHeader = document.querySelector("#themModeBtnHeader");

themeModeBtn.addEventListener("click", toggleTheme);
themeModeBtnHeader.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  loadThemeFromStorage();
});

/// login chack
let userAccountBtn = $.querySelector("#userAccountBtn")
let outAcountBtn = $.querySelector("#outAcountBtn")

import { hasUserTokenCookie , deleteCookie } from "../Componets/check-login/check-login.js"

userAccountBtn.addEventListener("click", hasUserTokenCookie)
outAcountBtn.addEventListener("click", deleteCookie)

/// Search Handler
import { searchHandler } from "../Componets/search/search.js";
searchHandler()

/// slider handling
import { sliderHandler } from "../Componets/slider/slider.js";
sliderHandler();
/// scroll handler

const listItems = document.querySelectorAll('.listItem');

listItems.forEach((listItem) => {
  let startX = 0; 
  let scrollLeft = 0; 
  let isMouseDown = false; 

  // رویداد برای لمس (گوشی‌ها)
  listItem.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; 
    scrollLeft = listItem.scrollLeft; 
  });

  listItem.addEventListener('touchmove', (e) => {
    const deltaX = e.touches[0].clientX - startX;
    const speedFactor = 1.5;
    listItem.scrollLeft = scrollLeft - deltaX * speedFactor;
  });
  

  // رویداد برای ماوس (دسکتاپ)
  listItem.addEventListener('mousedown', (e) => {
    isMouseDown = true; 
    startX = e.clientX; 
    scrollLeft = listItem.scrollLeft; 
    listItem.style.cursor = 'grabbing'; 
    e.preventDefault(); 
  });

  document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - startX;
    listItem.scrollLeft = scrollLeft - deltaX;
  });

  document.addEventListener('mouseup', () => {
    isMouseDown = false; 
    listItem.style.cursor = 'default';
  });
});

/// img drag handler
$.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});
  

/// global function
let clear = (inputTarget) => {
    inputTarget.value = "";
}

window.addEventListener("DOMContentLoaded" , hasUserTokenCookie)

/// select item handler

function clickItembox(e){
  let target = e.target
  let infoForward = {
    srcImg: target.getAttribute("srcImg"),
    nameItem: target.getAttribute("nameItem"),
    priceItem: target.getAttribute("priceItem"),
  }
  localStorage.setItem("item" , JSON.stringify(infoForward))
  location.href = "https://sajadanjiidanii.github.io/GreenCode-Shop/Html/Item.Html"
}

let itemboxs = $.querySelectorAll("item-box")
itemboxs.forEach(itembox => {
  itembox.addEventListener("click" , clickItembox)
})
