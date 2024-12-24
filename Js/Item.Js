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

window.addEventListener("load", () => {
  let itemInfo = JSON.parse(localStorage.getItem("item"))
  let itemImg = $.querySelector("#itemImg")
  itemImg.src = itemInfo.srcImg
  let itemName = $.querySelector("#itemName")
  itemName.innerHTML = itemInfo.nameItem
  let itemPrice = $.querySelector("#itemPrice")
  itemPrice.innerHTML = itemInfo.priceItem
})

/// color handler
let colors = $.querySelectorAll(".colorItem")
let colorFlag = false
colors.forEach(color => {
    color.addEventListener("click", e => {
        let target = e.target.id
        let targetElem = $.getElementById(target)
        colorFlag = target
        clearColors(targetElem)
        if(!color.classList.contains("active")){
            targetElem.classList.add("active")
            targetElem.style.backgroundColor = target
        }
    })
})
function clearColors(){
    colors.forEach(color => {
        color.classList.remove("active")
        color.style.backgroundColor = "#fff"
    })
}

// add cart handler

const addCartBtn = $.querySelector("#addCartBtn");
let arrayCart = [];

addCartBtn.addEventListener("click", () => {
    if(JSON.parse(localStorage.getItem("cart"))){
        arrayCart = JSON.parse(localStorage.getItem("cart"))
    }
    if(colorFlag){
        let itemInfo = JSON.parse(localStorage.getItem("item"));

        switch(colorFlag){
            case "orange":
                itemInfo.colorName = "نارنجی"
                itemInfo.colorCode = "orange"
                break;
            case "black":
                itemInfo.colorName = "سیاه"
                itemInfo.colorCode = "black"
                break;
            case "red":
                itemInfo.colorName = "قرمز"
                itemInfo.colorCode = "red"
                break;
            case "blue":
                itemInfo.colorName = "آبی"
                itemInfo.colorCode = "blue"
                break;
            case "green":
                itemInfo.colorName = "سبز"
                itemInfo.colorCode = "green"
                break;
        }

        arrayCart.push(itemInfo)
        
        localStorage.setItem("cart", JSON.stringify(arrayCart))
        
        localStorage.removeItem("item");
        console.log("yes")
        location.href = "https://sajadanjiidanii.github.io/GreenCode-Shop/Html/Home.html"
    }
});
