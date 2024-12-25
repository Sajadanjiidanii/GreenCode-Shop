const $ = document

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

/// Search Handler
import { searchHandler } from "../Componets/search/search.js";
searchHandler();

/// login chack
let userAccountBtn = $.querySelector("#userAccountBtn")
let outAcountBtn = $.querySelector("#outAcountBtn")

import { hasUserTokenCookie , deleteCookie } from "../Componets/check-login/check-login.js"

userAccountBtn.addEventListener("click", hasUserTokenCookie)
outAcountBtn.addEventListener("click", deleteCookie)

// Cart Item Handler
import { cartItem } from "../Componets/cart-item/cart-item.js";
window.customElements.define("item-cart", cartItem)

/// Item Cart Handler
window.addEventListener("load",() => {
    let cartItems = JSON.parse(localStorage.getItem("cart"))
    cartItems.forEach(item => {
        console.log(item)
        $.querySelector(".listItem").insertAdjacentHTML("beforeend",`
                <item-cart imgSrc="${item.imgSrc}" nameItem="${item.nameItem}" oldPrice="${item.oldPrice}" newPrice="${item.newPrice}" ItemColor="${item.colorName}" colorCode="${item.colorCode}"></item-cart>
            `)
    })
})
