const $ = document

function menuModuleHandler(){
    let closeMoudle = $.querySelector("#closeMoudle")
    let menuModule = $.querySelector(".menu-module")
    closeMoudle.addEventListener("click" , () => {
        menuModule.style.display = "none"
    })
    let menuBtn = $.querySelector("#menu-btn")
    menuBtn.addEventListener("click" , () => {
        menuModule.style.display = "block"
    })
}

export{menuModuleHandler}