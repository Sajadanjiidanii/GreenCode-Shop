const $ = document

/// header ctrl

/// toggle Menu Module
import { menuModuleHandler } from "../Componets/menu-module/menu-module.js";
menuModuleHandler();

/// Change Them ///
import { changeThem } from "../Componets/change-theme/change-theme.js";
changeThem();

/// Search Handler
import { searchHandler } from "../Componets/search/search.js";
searchHandler();

/// login chack
let userAccountBtn = $.querySelector("#userAccountBtn")
let outAcountBtn = $.querySelector("#outAcountBtn")

import { hasUserTokenCookie , deleteCookie } from "../Componets/check-login/check-login.js"

userAccountBtn.addEventListener("click", hasUserTokenCookie)
outAcountBtn.addEventListener("click", deleteCookie)
