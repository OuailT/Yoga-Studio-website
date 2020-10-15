const playB = document.querySelector('.play');
const closeB = document.querySelector('.close');
const trailer = document.querySelector('.trailer');
const video = document.querySelector('video');
const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');


//AddEventListener

playB.addEventListener('click', () => {
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();

});

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

closeB.addEventListener('click', () => {
    trailer.classList.toggle('active');
});