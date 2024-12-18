let $ = document
let template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="../Componets/option-item/option-item.css">
    <link rel="stylesheet" href="../Icon/css/font-awesome.min.css">
    <div class="option-item">
        <div class="iconBox">
            <div class="iconBgColor">
                <i id="option-icon" class="fa fa-comments-o"></i>
            </div>
        </div>
        <div class="textBox">
            <h4 id="title-option">تضمین کیفیت</h4>
            <p id="subtitle-option"></p>
        </div>
    </div>
`
class optionItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("#option-icon").className = this.getAttribute("href-icon")
        this.shadowRoot.querySelector("#option-icon").style.color = this.getAttribute("icon-color")
        this.shadowRoot.querySelector(".iconBgColor").style.background = this.getAttribute("icon-background")
        this.shadowRoot.querySelector("#title-option").innerHTML = this.getAttribute("title")
        this.shadowRoot.querySelector("#subtitle-option").innerHTML = this.getAttribute("subtitle")
    }
}

export {optionItem}