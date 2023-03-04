let indexNum = 0;
let positionValue = 0;
const IMAGE_WIDTH = 640;

const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const images = document.querySelector('.images');



leftArrow.addEventListener('click', () => {
    if(indexNum > 0) {
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        indexNum--;
    }
})

rightArrow.addEventListener('click', () => {
    if(indexNum < 2) {
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        indexNum++;
    }
})