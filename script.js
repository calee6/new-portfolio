document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.bar1').classList.toggle('toggle');
    document.querySelector('.bar2').classList.toggle('toggle');
    document.querySelector('.bar3').classList.toggle('toggle');

    document.querySelector('.main-menu').classList.toggle('toggle');
    for (i=0; i < 4; i++) {
        document.querySelectorAll('.nav-link')[i].classList.toggle('toggle');
    }
    for (i=0; i < 4; i++) {
        document.querySelectorAll('.nav-item')[i].classList.toggle('toggle');
    }
});