const slide = document.querySelector('.slide');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

const prev = () => {
    slide.style.transform='translateX(-600px)';
}

const next = () => {
    slide.style.transform='translateX(600px)';
}

const btnOp = (btn) => {
    btn.classList.remove('btn-solid');
    btn.classList.add('btn-op');
        setTimeout(()=>{
            btn.classList.remove('btn-op');
            btn.classList.add('btn-solid');
        },300);
}

btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);
document.addEventListener('keyup', e => {
    if (e.key === "ArrowLeft") {
        prev();
        btnOp(btnPrev);
    };
    if (e.key === "ArrowRight") {
        next();
        btnOp(btnNext);
    };
});
