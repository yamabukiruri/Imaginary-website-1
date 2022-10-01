let target = document.querySelectorAll('.fadeIn');
window.addEventListener('scroll', () => {
    for (let i = 0; i < target.length; i++){
        const rect = target[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight + 150) {
            target[i].classList.add('fadeInActive');
        }
    }
});

let header = document.querySelector('#header');
let hamburger = document.querySelector('#hamburger');
let btn = document.querySelector('#toggle-btn');
let mask = document.querySelector('#mask');
let nav = document.querySelector('#nav');

btn.onclick = () => {
    header.classList.toggle('openNav');
    hamburger.classList.toggle('openMask');
};

mask.onclick = () => {
    header.classList.toggle('openNav');
    hamburger.classList.toggle('openMask');
};

nav.onclick = () => {
    header.classList.toggle('openNav');
    hamburger.classList.toggle('openMask');
}

