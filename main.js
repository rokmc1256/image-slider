let indexNum = 0;
let positionValue = 0;
const IMAGE_WIDTH = 640;

const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const images = document.querySelector('.images');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon = document.querySelectorAll('.icon');


leftArrow.style.opacity = 0;
icon1.style.backgroundColor = '#2b2d42';
leftArrow.addEventListener('click', () => {
    if(indexNum > 0) {
        rightArrow.style.opacity = 1;
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        icon[indexNum - 1].style.backgroundColor = '#2b2d42';
        icon[indexNum].style.backgroundColor = '#e5e5e5';
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
        icon[indexNum + 1].style.backgroundColor = '#2b2d42';
        icon[indexNum].style.backgroundColor = '#e5e5e5';
        indexNum++;
    }
    
    if(indexNum === 2) {
        rightArrow.style.opacity = 0;
    }
})