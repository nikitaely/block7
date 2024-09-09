var button = document.querySelector('.feedback__button');

button.addEventListener('click', function () {
    
    var side_menu = document.querySelector('.side-menu');
    var feedback = document.querySelector('.feedback');
    const width = window.innerWidth;
    var shadow = document.querySelector('.shadow');
    
    
    side_menu.classList.remove('menu-hidden');
    feedback.classList.add('feedback-hidden');
    feedback.classList.remove('feedback-active');

    if (width >= 1440) {
        
        shadow.classList.remove('shadow-activate')
   }


})