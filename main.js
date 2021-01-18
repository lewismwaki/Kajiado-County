const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;

//slideshow
const nextSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //add current to first slide
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for prev slide
    if (current.previousElementSibling) {
        //add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last slide
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//button event listeners
next.addEventListener('click', e => {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    nextSlide();
});

prev.addEventListener('click', e => {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    prevSlide();
});

//autoslide

if (auto) {
    let slideInterval;
    //run next slide at ineterval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


//:hover