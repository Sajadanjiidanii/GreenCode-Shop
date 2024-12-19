const $ = document
const statusModule = $.querySelector(".status")
const statusText = $.querySelector(".status > h3")

// get html element tag
const userName = $.querySelector("#userName")
const userPhone = $.querySelector("#userPhone")
const userEmail = $.querySelector("#userEmail")
const userPassword = $.querySelector("#userPassword")
const submitBtn = $.querySelector("#submitBtn")

submitBtn.addEventListener("click", e => {
    e.preventDefault()
    if(userName.value && userPhone.value && userEmail.value && userPassword.value){
        let userInfo = {
            userName : userName.value,
            userPhone : userPhone.value,
            userEmail : userEmail.value,
            userPassword : userPassword.value
        }
        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`)
            .then(res => res.json())
            .then(data => {
                let users = Object.entries(data)
                users.forEach(user => {
                    if( userName == user[1].userName ){
                        showModule("این نام کاربری قبلا ثبت شده است", "skyblue")
                    }else if( userPhone == user[1].userPhone){
                        showModule("این شماره قبلا ثبت شده است", "skyblue")
                    }else if( userEmail == user[1].userEmail){
                        showModule("این ایمیل قبلا ثبت شده است", "skyblue")
                    }else{
                        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`, {
                            method: `POST`,
                            headers:{
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(userInfo)
                        })
                        .then(res => {
                            if(res.status == 200){
                                showModule("خوش امدید" , "Green")
                            }
                            else{
                                showModule("ثبت نام با مشکل برخورده است", "Red")
                            }
                        })
                        .catch(err => console.log(err))
                        
                        clearInput()
                    }
                })
            })
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }
})

// global function

function clearInput () {
    $.querySelectorAll("input").forEach(inp => {
        inp.value = ''
    })
} 

let showModule = (text , color) => {
    statusModule.style.display = "flex"
    statusModule.style.backgroundColor = color
    statusText.innerHTML = text
    setTimeout(() => {
        statusModule.style.display = "none"
    },3000)
}
