let ham = document.querySelector(".hamBurger");
let nav = document.querySelector(".navLinks");
let check = 0;

ham.addEventListener("click", () => {

    if (check == 0) {
        nav.style.visibility = "visible"
        nav.style.opacity = 1;
        check = 1;
    } else {
        nav.style.visibility = "hidden"
        nav.style.opacity = 0;
        check = 0;
    }

})