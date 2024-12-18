const $ = document

function sliderHandler(){
    let imgSlider = $.querySelector("#imgSlider")
    let arraySrcImg = ["../Img/slider/sliderImg1.webp","../Img/slider/sliderImg2.jpg","../Img/slider/sliderImg3.webp","../Img/slider/sliderImg4.webp","../Img/slider/sliderImg5.jpg"]
    let cont = 0
    setInterval( () => {
        if(cont <= 4){
            imgSlider.src = arraySrcImg[cont]
            cont++;
        }else{
            cont = 0
        }
    } ,5000)
}

export { sliderHandler }