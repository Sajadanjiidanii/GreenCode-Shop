const $ = document

/// crate custome tag
import { item } from "../Componets/Item/item.js";
window.customElements.define("item-box" , item)

/// change Theme handler
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

/// slider handler
import { sliderHandler } from "../Componets/slider/slider.js";
sliderHandler();

/// search handler
import { searchHandler } from "../Componets/search/search.js";
searchHandler();

/// toggle Menu Module
import { menuModuleHandler } from "../Componets/menu-module/menu-module.js";
menuModuleHandler();

// db

const laptopArray = ["../Img/pc item/pc-item-1.png","../Img/pc item/pc-item-2.png","../Img/pc item/pc-item-3.png","../Img/pc item/pc-item-4.png","../Img/pc item/pc-item-5.png","../Img/pc item/pc-item-6.png","../Img/pc item/pc-item-7.png","../Img/pc item/pc-item-8.png","../Img/pc item/pc-item-9.png","../Img/pc item/pc-item-10.png","../Img/pc item/pc-item-11.png","../Img/pc item/pc-item-12.png"]

const pcArray = ["../Img/laptop item/laptop-item-1.png","../Img/laptop item/laptop-item-2.png","../Img/laptop item/laptop-item-3.png","../Img/laptop item/laptop-item-4.png","../Img/laptop item/laptop-item-5.png","../Img/laptop item/laptop-item-6.png","../Img/laptop item/laptop-item-7.png","../Img/laptop item/laptop-item-8.png","../Img/laptop item/laptop-item-9.png","../Img/laptop item/laptop-item-10.png","../Img/laptop item/laptop-item-11.png","../Img/laptop item/laptop-item-12.png"]

const mobileArray = ["../Img/mobile item/mobile-item-1.png","../Img/mobile item/mobile-item-2.png","../Img/mobile item/mobile-item-3.png","../Img/mobile item/mobile-item-4.png","../Img/mobile item/mobile-item-5.png","../Img/mobile item/mobile-item-6.png","../Img/mobile item/mobile-item-7.png","../Img/mobile item/mobile-item-8.png","../Img/mobile item/mobile-item-9.png","../Img/mobile item/mobile-item-10.png","../Img/mobile item/mobile-item-11.png","../Img/mobile item/mobile-item-12.png"]

const consoleArray = ["../Img/console item/console-item-1.png","../Img/console item/console-item-2.png","../Img/console item/console-item-3.png","../Img/console item/console-item-4.png","../Img/console item/console-item-5.png","../Img/console item/console-item-6.png","../Img/console item/console-item-7.png","../Img/console item/console-item-8.png","../Img/console item/console-item-9.png","../Img/console item/console-item-10.png","../Img/console item/console-item-11.png","../Img/console item/console-item-12.png"]

const weblogArray = ["../Img/weblog img/weblog-item-1.jpg","../Img/weblog img/weblog-item-2.jpg","../Img/weblog img/weblog-item-3.jpg","../Img/weblog img/weblog-item-4.jpg","../Img/weblog img/weblog-item-1.jpg","../Img/weblog img/weblog-item-2.jpg","../Img/weblog img/weblog-item-3.jpg","../Img/weblog img/weblog-item-4.jpg","../Img/weblog img/weblog-item-1.jpg","../Img/weblog img/weblog-item-2.jpg","../Img/weblog img/weblog-item-3.jpg","../Img/weblog img/weblog-item-4.jpg"]

const stockarray = ["../Img/stock item/stock-item-1.jpg","../Img/stock item/stock-item-2.jpg","../Img/stock item/stock-item-3.jpg","../Img/stock item/stock-item-4.jpg","../Img/stock item/stock-item-5.jpg","../Img/stock item/stock-item-6.jpg","../Img/stock item/stock-item-7.jpg","../Img/stock item/stock-item-8.jpg","../Img/stock item/stock-item-9.jpg","../Img/stock item/stock-item-10.jpg","../Img/stock item/stock-item-11.jpg","../Img/stock item/stock-item-12.jpg"]



//

const itemContainer = $.querySelector(".listItem")
function locationCheck() {
    let locationSearch = new URLSearchParams(location.search);
    let categoryName = locationSearch.get("Product");
    const validCategories = ["laptop", "pc", "mobile", "stock", "console"];
    
    if (validCategories.includes(categoryName)) {
        register(categoryName);
    } else {
        console.warn("Invalid or missing category!");
    }
}
function register(catName){
    for(let cont = 1; cont <= 12; cont++){
        itemContainer.insertAdjacentHTML("beforeend" , `<item-box srcImg="../Img/${catName} item/${catName}-item-${cont}.png" nameItem="کنسول بازی سونی مدل PlayStation 5" rateItem="5" priceItem="55.000.000"></item-box>`)
    }
}

window.addEventListener("load" , locationCheck)
