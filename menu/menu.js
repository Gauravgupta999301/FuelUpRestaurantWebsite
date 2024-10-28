const toggleBtn = document.querySelector("#toggleSwitch");
const ball = document.querySelector(".ball");
const html = document.querySelector("html");

toggleBtn.addEventListener("click", ()=> {
    let themes
    ball.classList.toggle("ballShift");
    html.classList.toggle("dark")
    document.querySelector(".img1").classList.toggle("display");
    document.querySelector(".img2").classList.toggle("display");
    if(html.classList[0] === "dark"){
        themes = "dark"
    }
    else{
        themes = "light"
    }
    console.log(themes)

    //save to local storage
    localStorage.setItem("pageTheme", JSON.stringify(themes));
})

let GetTheme =JSON.parse(localStorage.getItem("pageTheme"));
if(GetTheme === "dark"){
    ball.classList.toggle("ballShift");
    html.classList.toggle("dark");
    document.querySelector(".img1").classList.toggle("display");
    document.querySelector(".img2").classList.toggle("display");
}