var button = document.querySelector('.callback__button');

button.addEventListener('click', function () {
    
    var side_menu = document.querySelector('.side-menu');
    var feedback = document.querySelector('.callback');
    var shadow = document.querySelector('.shadow');
    const width = window.innerWidth;
    
    side_menu.classList.remove('menu-hidden');
    feedback.classList.add('callback-hidden');
    feedback.classList.remove('callback-active');

    if (width >= 1440) {
        
        shadow.classList.remove('shadow-activate')
    }


})