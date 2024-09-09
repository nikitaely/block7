var button = document.querySelector('.chat-aside');

button.addEventListener('click', function () {
    
    var side_menu = document.querySelector('.side-menu');
    var feedback = document.querySelector('.feedback');
    const width = window.innerWidth;
    var shadow = document.querySelector('.shadow');


    side_menu.classList.add('menu-hidden');
    feedback.classList.remove('feedback-hidden');
    feedback.classList.add('feedback-active');

    if (width >= 1440) {
        
        shadow.classList.add('shadow-activate')
   }

})