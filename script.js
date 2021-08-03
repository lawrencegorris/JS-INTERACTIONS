Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

/* CUSTOM JS, NOT PROVIDED NY ASSIGNMENT */

// Color mode switch

const body = document.querySelector('body')
const switchMode = document.querySelector('.mode');

switchMode.addEventListener('click', toggleMode);
function toggleMode(){
    if(body.className === 'lightMode'){
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
    }else {
        body.classList.remove('darkMode');
        body.classList.add('lightMode')
    }
}

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

// Collage

const collageImages = document.getElementsByClassName('image');
for(let i = 0; i < collageImages.length; i++){
    collageImages[i].addEventListener('click', imageClicked);
    collageImages[i].addEventListener('mouseout', imageLeave)
    function imageClicked(){
        collageImages[i].innerHTML = 'Lorem Ipsum something something Latin, stab Caesar many times'
        collageImages[i].style.transform = 'scale(1.1)'
    }
    function imageLeave(){
        collageImages[i].innerHTML = '';
        collageImages[i].style.transform = 'scale(1)'
    }
}

// CHASER

const chaser =  document.querySelector('.chaser');
const chaserBox = document.querySelector('#chaserBox')

chaserBox.addEventListener('mouseover', startChase)
chaserBox.addEventListener('mousemove', chase);
chaserBox.addEventListener('mouseout', stopChase);

function startChase(){
    chaser.style.display = 'block';
}

function chase(e){
    chaser.style.position = 'fixed';
    chaser.style.left = e.clientX + 'px';
    chaser.style.top = e.clientY + 'px';
}

function stopChase(){
    chaser.style.display = 'none'
}

// RUNNER

/*const runner = document.querySelector('.runner')
const runnerBox = document.querySelector('#runnerBox')

runner.addEventListener('mouseenter', runPokemon)

// Client mouse position

runnerBox.addEventListener('mousemove', userPosition)

let userX = '';
let userY = '';
let runnerPositionTop = '';
let runnerPositionLeft = '';

function userPosition(e){
    userX  = e.clientX;
    userY = e.clientY;
    runnerPosition = runner.getBoundingClientRect();
    runnerPositionTop = Math.round(runnerPosition.top);
    runnerPositionLeft = Math.round(runnerPosition.left);
    //console.log(userX + ',' + userY)
    //console.log(runnerPosition.top + 'px')
    return;
}

//const xPos = Math.floor(Math.random() * runnerBox.clientWidth - 100);
//const yPos = Math.floor(Math.random() * runnerBox.clientHeight - 100);

function runPokemon(){
    if(userY - 100 == runnerPositionLeft){
        console.log('same')
    }
    console.log(userX + '')
    //runner.style.left = xPos + 'px';
    //runner.style.top = yPos + 'px';
    //console.log(xPos + ',' + yPos);
    console.log(runnerPositionTop + ',' +runnerPositionLeft)

}*/

// Dark mode switch