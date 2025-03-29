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


// loader
let randomTime = Math.floor(Math.random() * 3000) + 1000;
console.log(randomTime);

let loaderPage = document.querySelector('.loader');

setTimeout(() => {

    loaderPage.style.visibility = "hidden"

}, randomTime);


// cursor
let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");

window.addEventListener("mousemove", function (dets) {

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })

})