const $ = document
let template = $.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="../Icon/css/font-awesome.min.css">
    <link rel="stylesheet" href="../Componets/cart-item/cart-item.css">
    <link rel="stylesheet" href="../Componets/cart-item/cartItem-media.css">
    <div class="item">
        <div class="imgBox">
            <img id="imgSrc" src="">
        </div>
        <div class="infoBox">
            <h4 id="nameItem">لپتاپ لنوو</h4>
            <div class="iconBox">
                <i class="colorBox"></i>
                <span id="item-color" class="textInfo">نقره ای</span>
            </div>
            <div class="iconBox">
                <i class="fa fa-truck truck"></i>
                <span class="textInfo">ارسال فوری</span>
            </div>
            <div class="iconBox">
                <i class="fa fa-shield shield"></i>
                <span class="textInfo">گارانتی 24 ماه</span>
            </div>
        </div>
        <div class="priceBox">
            <p id="oldPrice"></p>
            <p id="newPrice"></p>
        </div>
        <div class="deletebox">
            <i class="fa fa-trash-o"></i>
        </div>
    </div>
`

class cartItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("#imgSrc").src = this.getAttribute("imgSrc")
        this.shadowRoot.querySelector("#nameItem").innerHTML = this.getAttribute("nameItem")
        this.shadowRoot.querySelector("#oldPrice").innerHTML = this.getAttribute("oldPrice")
        this.shadowRoot.querySelector("#newPrice").innerHTML = this.getAttribute("newPrice") + " تومان"
        this.shadowRoot.querySelector("#item-color").innerHTML = this.getAttribute("ItemColor")
        this.shadowRoot.querySelector(".colorBox").style.backgroundColor = this.getAttribute("colorCode")
    }
}


export {cartItem}
