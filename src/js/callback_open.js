var button = document.querySelector('.call-aside');

button.addEventListener('click', function () {

    var side_menu = document.querySelector('.side-menu');
    var callback = document.querySelector('.callback');
    const width = window.innerWidth;
    var shadow = document.querySelector('.shadow');


    side_menu.classList.add('menu-hidden');
    callback.classList.remove('callback-hidden');
    callback.classList.add('callback-active');

   if (width >= 1440) {
        
        shadow.classList.add('shadow-activate')
   }



})