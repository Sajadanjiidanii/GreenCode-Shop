function locationCheck() {
    let locationSearch = new URLSearchParams(location.search);
    let categoryName = locationSearch.get("requst");
    let validCategorey = "login"

    if (validCategorey.includes(categoryName)) {
        console.log("yes")
    } else {
        console.warn("Invalid or missing category!");
    }
}
window.addEventListener("load" , locationCheck)