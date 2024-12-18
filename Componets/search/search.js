const $ = document

function searchHandler(){
    let inputHeader = $.querySelector("#inputHeader")
    let openSearchBtnHeader = $.querySelector("#openSearchBtnHeader")
    openSearchBtnHeader.addEventListener("click" , () => {
        inputHeader.style.display = "block";
        openSearchBtnHeader.style.display = "none";
    })
    let searchBtnHeader = $.querySelector("#searchBtnHeader")
    searchBtnHeader.addEventListener("click" , e => {
        if ( window.innerWidth <= 940 ){
            inputHeader.style.display = "none";
            openSearchBtnHeader.style.display = "block";
        } 
        let inputTarget = e.target.parentElement.previousElementSibling;
        clear(inputTarget);
    })
    let searchBtnModule = $.querySelector("#searchBtnModule")
    searchBtnModule.addEventListener("click" , e => {
        let inputTarget = e.target.parentElement.previousElementSibling;
        clear(inputTarget);
    })
}

let clear = (inputTarget) => {
    inputTarget.value = "";
}

export { searchHandler }