let backtotop = document.querySelector(".backtotop")
let menu = document.querySelector(".menu")

let scrollingtop = () =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

backtotop.addEventListener("click",()=>{
    scrollingtop()
})

window.addEventListener("scroll",()=>{
    let scrolling = window.scrollY
    if(scrolling > 80){
        backtotop.style.display ="block"
    }else{
        backtotop.style.display ="none"
    }
    if(scrolling > 50){
        menu.classList.add("background")
    }else{
        menu.classList.remove("background")
    }
})