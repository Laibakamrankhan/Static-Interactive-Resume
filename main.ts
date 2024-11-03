const togglebutton = document.getElementById("toggle-interest") as HTMLButtonElement
const Intrest = document.getElementById("interest") as HTMLElement

togglebutton.addEventListener("click" ,() => {
    if(Intrest.style.display === "none"){
        Intrest.style.display = "block"
    } else{
        Intrest.style.display = "none"
    }
});