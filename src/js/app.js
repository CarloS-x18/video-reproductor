// variables 
const video = document.querySelector('.header__video');
const btn = document.querySelector('.header__button');

btn.addEventListener('click', () => {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});