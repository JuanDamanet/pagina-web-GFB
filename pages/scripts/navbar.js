let menuToggle = document.querySelector('.hamburguer');
let menuToggleIcon = document.querySelector('.hamburguer-button');
let menu = document.querySelector('.menu');
menuToggleIcon.addEventListener('click', e => {
    menu.classList.toggle('show');
    if(menu.classList.contains('show')){
        menuToggleIcon.setAttribute('src','../assets/close.png');
    }
    else
    {
        menuToggleIcon.setAttribute('src','../assets/hamburguer.png'); 
    }
});