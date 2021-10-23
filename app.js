let btn = document.getElementsByClassName("menu-btn")[0]
let menu = document.getElementsByClassName("hidden-menu")[0]

btn.addEventListener('click', ()=>{
    if (menu.style.opacity === "0"){
        menu.style.opacity = "1"
    }

    else{
        menu.style.opacity = "0"
    }
})