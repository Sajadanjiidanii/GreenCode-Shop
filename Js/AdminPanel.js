const $ = document
const statusModule = $.querySelector(".status")
const statusText = $.querySelector(".status > h3")

// add user login

const userNameInp = $.querySelector("#userNameInp")
const userPhoneInp = $.querySelector("#userPhoneInp")
const userPasswordInp = $.querySelector("#userPasswordInp")
const addUserBtn = $.querySelector("#addUserBtn")

addUserBtn.addEventListener("click",() => {
    if(userNameInp.value && userPhoneInp.value && userPasswordInp.value){
        let userInfo = {
            userName : userNameInp.value,
            userPhone : userPhoneInp.value,
            userPassword : userPasswordInp.value
        }
        
        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`, {
            method: `POST`,
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => {
            if(res.status == 200){
                showModule("عملیات با موفقیت انجام شد", "Green")
            }
            else{
                showModule("عملیات با خطا رو به رو شد", "Red")
            }
        })
        .catch(err => console.log(err))
    
        clearInput()
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }
})

// add weblog

const weblogTitle = $.querySelector("#weblogTitle")
const weblogText = $.querySelector("#weblogText")
const weblogWriter = $.querySelector("#weblogWriter")
const weblogDate = $.querySelector("#weblogDate")
const addWeblogBtn = $.querySelector("#addWeblogBtn")

addWeblogBtn.addEventListener("click", () => {
    if(weblogTitle.value && weblogText.value && weblogWriter.value && weblogDate.value){
        let weblogInfo = {
            weblogTitle : weblogTitle.value,
            weblogText : weblogText.value,
            weblogWriter : weblogWriter.value,
            weblogDate : weblogDate.value
        }
        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/weblog.json`, {
            method: `POST`,
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(weblogInfo)
        })
        .then(res => {
            if(res.status == 200){
                showModule("عملیات با موفقیت انجام شد", "Green")
            }
            else{
                showModule("عملیات با خطا رو به رو شد", "Red")
            }
        })
        .catch(err => console.log(err))
        
        clearInput()
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }  
})

// add items

const ItemNameInp = $.querySelector("#ItemNameInp")
const ItemPriceInp = $.querySelector("#ItemPriceInp")
const addItemBtn = $.querySelector("#addItemBtn")
let stockChackValue , itemCategoryValue;

addItemBtn.addEventListener("click", () => {
    const selectedRadio = $.querySelector('input[name="categoryItem"]:checked');
    if ( ItemNameInp.value && ItemPriceInp.value && selectedRadio.value) {
        itemCategoryValue = selectedRadio.value;

        const stockChack = $.querySelector(".stockChack")
        if (stockChack.checked) {
            stockChackValue = true;
        } else {
            stockChackValue = false;
        }

        let itemInfo = {
            itemName : ItemNameInp.value,
            itemPrice : ItemPriceInp.value,
            itemRate : 0,
            itemCategory : itemCategoryValue,
            stock : stockChackValue
        }

        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/item.json`, {
            method: `POST`,
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(itemInfo)
        })
        .then(res => {
            if(res.status == 200){
                showModule("عملیات با موفقیت انجام شد", "Green")
            }
            else{
                showModule("عملیات با خطا رو به رو شد", "Red")
            }
        })
        .catch(err => console.log(err))

        clearInput()
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }
    
})

// remove weblog

const weblogNameRemove = $.querySelector("#weblogNameRemove")
const weblogDateRemove = $.querySelector("#weblogDateRemove")
const weblogRemoveBtn = $.querySelector("#weblogRemoveBtn")

weblogRemoveBtn.addEventListener("click" , () => {
    if(weblogNameRemove.value && weblogDateRemove.value){
        let weblogName = weblogNameRemove.value;
        let weblogDate = weblogDateRemove.value; 

        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/weblog.json`)
            .then(res => res.json())
            .then(data => {
                let weblogData = Object.entries(data)
                weblogData.forEach(weblog => {
                    if( weblogName == weblog[1].weblogTitle && weblogDate == weblog[1].weblogDate ){
                        console.log(weblog)
                        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/weblog/${weblog[0]}.json` , {
                            method: "DELETE"
                        })
                        .then(res => {
                            if(res.status == 200){
                                showModule("عملیات با موفقیت انجام شد", "Green")
                            }
                            else{
                                showModule("عملیات با خطا رو به رو شد", "Red")
                            }
                        })
                        .catch(err => console.log(err))
                    }
                })
        })
        .catch(err => console.log(err))

        clearInput()
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }
    
})

// remove item

const ItemNameRemove = $.querySelector("#ItemNameRemove")
const ItemPriceRemove = $.querySelector("#ItemPriceRemove")
const removeItemBtn = $.querySelector("#removeItemBtn")

removeItemBtn.addEventListener("click" , () => {
    if(ItemNameRemove.value && ItemPriceRemove.value){
        let itemName = ItemNameRemove.value;
        let itemPrice = ItemPriceRemove.value; 

        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/item.json`)
            .then(res => res.json())
            .then(data => {
                let itemData = Object.entries(data)

                itemData.forEach(item => {
                    if( itemName == item[1].itemName && itemPrice == item[1].itemPrice ){
                        console.log(item)
                        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/item/${item[0]}.json` , {
                            method: "DELETE"
                        })
                        .then(res => {
                            if(res.status == 200){
                                showModule("عملیات با موفقیت انجام شد", "Green")
                            }
                            else{
                                showModule("عملیات با خطا رو به رو شد", "Red")
                            }
                        })
                        .catch(err => console.log(err))
                    }
                })
        })
        .catch(err => console.log(err))

        clearInput()
    }else{
        showModule("تمام فیلد ها را به درستی پر کنید", "orange")
    }
      
})

// remove user login

const userNameRemove = $.querySelector("#userNameRemove")
const userPhoneRemove = $.querySelector("#userPhoneRemove")
const removeUserBtn = $.querySelector("#removeUserBtn")

removeUserBtn.addEventListener("click" , () => {
    if(userNameRemove.value && userPhoneRemove.value){
        let userName = userNameRemove.value;
        let userPhone = userPhoneRemove.value; 

        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login.json`)
            .then(res => res.json())
            .then(data => {
                let userData = Object.entries(data)
                userData.forEach(user => {
                    if( userName == user[1].userName && userPhone == user[1].userPhone ){
                        fetch(`https://technology-shop-databace-default-rtdb.firebaseio.com/login/${user[0]}.json` , {
                            method: "DELETE"
                        })
                        .then(res => {
                            if(res.status == 200){
                                showModule("عملیات با موفقیت انجام شد", "Green")
                            }
                            else{
                                showModule("عملیات با خطا رو به رو شد", "Red")
                            }
                        })
                        .catch(err => console.log(err))
                    }
                })
        })
        .catch(err => console.log(err))

        clearInput()
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
