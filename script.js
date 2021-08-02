Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

/* CUSTOM JS, NOT PROVIDED NY ASSIGNMENT */

// CAROUSEL

const carouselPrev = document.querySelector('#carousel-prev');
const carouselNext = document.querySelector('#carousel-next');

let currentImage = 0;
let carouselImages = document.querySelectorAll('.carousel-img');
const slides = carouselImages.length;

carouselPrev.addEventListener('click', showPrevious);
carouselNext.addEventListener('click', showNext);

function calculateSlide(){
    for (let img of carouselImages){
        img.classList.remove('show-carousel-img');
    }
    carouselImages[currentImage].classList.add('show-carousel-img')
}

function showPrevious(){
    if(currentImage == 0){
        currentImage = slides - 1;
    }else {
        currentImage --
    }
    calculateSlide();

}

function showNext(){
    if(currentImage == slides - 1){
        currentImage = 0;
    }else {
        currentImage ++
    }
    calculateSlide();

}