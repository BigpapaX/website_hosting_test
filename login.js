
// Getting variables
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets =document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");


// input field label transition effect
inputs.forEach(inp => {

    inp.addEventListener("focus", () => {

        inp.classList.add("active");
    })
    inp.addEventListener("blur", () => {
        if(inp.value !="") return;
        inp.classList.remove("active");
    });
});

// Add a sign up mode to main element to create toggle transition
toggle_btn.forEach(btn => {

    btn.addEventListener("click", () => {

        main.classList.toggle("sign-up-mode");
    });
});

// Create Carousel Bullet Effect 
function moveSlider() {

    //when Clicked bullet image move
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove ("show"));
    currentImage.classList.add("show");


    // Text Slider Creating

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;


    // Bullet Move
    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach (bullet => {

    bullet.addEventListener("click", moveSlider);
});