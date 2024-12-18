let $ = document
let template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="../Componets/weblog-item/weblog-item.css">
    <link rel="stylesheet" href="../Icon/css/font-awesome.min.css">
    
    <div class="weblog">
        <div class="weblogCover">
            <img class="weblog-img">
        </div>
        <div class="weblogDescrip">
            <h4 class="weblog-title"></h4>
            <p class="weblog-subtitle"></p>
            <div class="group weblog-info">
                <i class="fa fa-user-o"><span class="writer"></span></i>
                <i class="fa fa-calendar"><span class="datewrite"></span></i>
            </div>
            <a class="weblog-showMore" href="#"> مطالعه مقاله  <i class="fa fa-arrow-circle-o-left"></i></a>
        </div>
    </div>
`
class weblogItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector(".weblog-img").src = this.getAttribute("srcImg")
        this.shadowRoot.querySelector(".weblog-title").innerHTML = this.getAttribute("title")
        this.shadowRoot.querySelector(".weblog-subtitle").innerHTML = this.getAttribute("subtitle")
        this.shadowRoot.querySelector(".writer").innerHTML = this.getAttribute("writer")
        this.shadowRoot.querySelector(".datewrite").innerHTML = this.getAttribute("datewrite")
    }
}

export {weblogItem}