var togglebutton = document.getElementById("toggle-interest");
var Intrest = document.getElementById("interest");
togglebutton.addEventListener("click", function () {
    if (Intrest.style.display === "none") {
        Intrest.style.display = "block";
    }
    else {
        Intrest.style.display = "none";
    }
});
