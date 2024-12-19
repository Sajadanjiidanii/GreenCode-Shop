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

// add cart handler
const addCartBtn = document.querySelector("#addCartBtn");
let arrayCart = [];

addCartBtn.addEventListener("click", () => {
  if(JSON.parse(localStorage.getItem("cart"))){
    arrayCart = JSON.parse(localStorage.getItem("cart"))
  }
  let itemInfo = JSON.parse(localStorage.getItem("item"));

  arrayCart.push(itemInfo)

  localStorage.setItem("cart", JSON.stringify(arrayCart))

  localStorage.removeItem("item");
  location.href = "https://sajadanjiidanii.github.io/GreenCode-Shop/Html/Home.html"
});


window.addEventListener("load", () => {
  let itemInfo = JSON.parse(localStorage.getItem("item"))
  let itemImg = $.querySelector("#itemImg")
  itemImg.src = itemInfo.srcImg
  let itemName = $.querySelector("#itemName")
  itemName.innerHTML = itemInfo.nameItem
  let itemPrice = $.querySelector("#itemPrice")
  itemPrice.innerHTML = itemInfo.priceItem
})
