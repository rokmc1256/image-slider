let indexNum = 0;
let positionValue = 0;
const IMAGE_WIDTH = 640;

const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const images = document.querySelector('.images');


leftArrow.style.opacity = 0;
leftArrow.addEventListener('click', () => {
    if(indexNum > 0) {
        rightArrow.style.opacity = 1;
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        indexNum--;
    }
    
    if(indexNum === 0) {
        leftArrow.style.opacity = 0;
    }
})

rightArrow.addEventListener('click', () => {
    if(indexNum < 2) {
        leftArrow.style.opacity = 1;
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        indexNum++;
    }
    
    if(indexNum === 2) {
        rightArrow.style.opacity = 0;
    }
})