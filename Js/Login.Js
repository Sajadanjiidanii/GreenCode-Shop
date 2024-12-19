const $ = document

const statusModule = $.querySelector(".status")
const statusText = $.querySelector(".status > h3")

const userEmailInp = $.querySelector("#userEmail")
const userPasswordInp = $.querySelector("#userPassword")
const submitBtn = $.querySelector("#submitBtn")

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (userEmailInp.value && userPasswordInp.value) {
        let userEmail = userEmailInp.value;
        let userPassword = userPasswordInp.value;
        let loginInfo = {
            email: userEmail.toLowerCase(),
            password: userPassword.toLowerCase(),
        };
        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`)
            .then(res => res.json())
            .then(data => {
                let users = Object.entries(data);
                let userFound = false;

                users.forEach(user => {
                    if (loginInfo.email == user[1].userEmail) {
                        if (loginInfo.password == user[1].userPassword) {
                            setCookie("user-token", `${user[0]}`, 365);
                            showModule("خوش آمدید", "Green");
                        } else {
                            showModule("رمز شما اشتباه است", "red");
                        }
                        userFound = true;
                    }
                });

                if (!userFound) {
                    showModule("ابتدا ثبت نام کنید", "skyblue");
                }
            })
            .catch(err => console.log(err));
        
        clearInput();
    }
});


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// global function
let showModule = (text , color) => {
    statusModule.style.display = "flex"
    statusModule.style.backgroundColor = color
    statusText.innerHTML = text
    setTimeout(() => {
        statusModule.style.display = "none"
        if(color === "Green"){
            location.href = "https://sajadanjiidanii.github.io/GreenCode-Shop/"
        }
    },3000)
}

function clearInput () {
    $.querySelectorAll("input").forEach(inp => {
        inp.value = ''
    })
} 
