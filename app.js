const slide = document.querySelector('.slide');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

btnPrev.addEventListener('click', () => {
    slide.style.transform='translateX(-600px)';
});

btnNext.addEventListener('click', () => {
    slide.style.transform='translateX(600px)';
});
