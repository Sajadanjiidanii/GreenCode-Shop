const $ = document
const statusModule = $.querySelector(".status")
const statusText = $.querySelector(".status > h3")

// get html element tag
const userNameInp = $.querySelector("#userName")
const userPhoneInp = $.querySelector("#userPhone")
const userEmailInp = $.querySelector("#userEmail")
const userPasswordInp = $.querySelector("#userPassword")
const submitBtn = $.querySelector("#submitBtn")

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (userNameInp.value && userPhoneInp.value && userEmailInp.value && userPasswordInp.value) {
        let userName = userNameInp.value;
        let userPhone = userPhoneInp.value;
        let userEmail = userEmailInp.value;
        let userPassword = userPasswordInp.value;

        let userInfo = {
            userName: userName.toLowerCase(),
            userPhone: userPhone.toLowerCase(),
            userEmail: userEmail.toLowerCase(),
            userPassword: userPassword.toLowerCase()
        };

        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`)
            .then(res => res.json())
            .then(data => {
                let users = Object.entries(data);
                let isDuplicate = false;

                for (let user of users) {
                    if (userInfo.userName === user[1].userName) {
                        showModule("این نام کاربری قبلا ثبت شده است", "skyblue");
                        isDuplicate = true;
                        break;
                    } else if (userInfo.userPhone === user[1].userPhone) {
                        showModule("این شماره قبلا ثبت شده است", "skyblue");
                        isDuplicate = true;
                        break;
                    } else if (userInfo.userEmail === user[1].userEmail) {
                        showModule("این ایمیل قبلا ثبت شده است", "skyblue");
                        isDuplicate = true;
                        break;
                    }
                }

                if (!isDuplicate) {
                    fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`, {
                        method: `POST`,
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => {
                            if (res.ok) {
                                showModule("خوش آمدید", "Green");
                            } else {
                                showModule("ثبت نام با مشکل مواجه شد", "red");
                            }
                        })
                        .catch(err => console.log(err));

                    clearInput();
                }
            })
            .catch(err => console.log(err));
    } else {
        showModule("تمام فیلدها را به درستی پر کنید", "orange");
    }
});

// global function

function clearInput() {
    $.querySelectorAll("input").forEach(inp => {
        inp.value = '';
    });
}

let showModule = (text, color) => {
    statusModule.style.display = "flex";
    statusModule.style.backgroundColor = color;
    statusText.innerHTML = text;
    setTimeout(() => {
        statusModule.style.display = "none";
        if(color === "Green"){
            location.href = "https://sajadanjiidanii.github.io/GreenCode-Shop/"
        }
    }, 3000);
};
