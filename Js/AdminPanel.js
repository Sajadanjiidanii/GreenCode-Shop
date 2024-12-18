const $ = document
/// add user handler
const userNameInp = $.querySelector("#userNameInp")
const userFamilyInp = $.querySelector("#userFamilyInp")
const userPasswordInp = $.querySelector("#userPasswordInp")
const addUserBtn = $.querySelector("#addUserBtn")

addUserBtn.addEventListener("click" , () => {
        
    let userData = {
        userName : userNameInp.value,
        userFamilyInp : userFamilyInp.value,
        userPassword : userPasswordInp.value
    }

    fetch('https://technology-shop-databace-default-rtdb.firebaseio.com/users.json' , {
        method: `POST`,
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})