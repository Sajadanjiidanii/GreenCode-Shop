let $ = document
let template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="Componets/Item/item.css">
    <link rel="stylesheet" href="Icon/css/font-awesome.min.css">
    <div class="item">
        <div class="itemImgBox">
            <img id="imgItem" src="Img/pc item/pc-item-1.png">
        </div>
        <div class="itemInfo">
            <p class="nameItem"></p>
            <div class="rateBox">
                <span class="rateItem"></span>
                <i class="fa fa-star"></i>
            </div>
            <p class="priceItem"></p>
        </div>
    </div>
`
class item extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("#imgItem").src = this.getAttribute("srcImg")
        this.shadowRoot.querySelector(".nameItem").innerHTML = this.getAttribute("nameItem")
        this.shadowRoot.querySelector(".rateItem").innerHTML = this.getAttribute("rateItem")
        this.shadowRoot.querySelector(".priceItem").innerHTML = this.getAttribute("priceItem")
    }
}

export {item}
