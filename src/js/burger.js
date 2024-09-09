var button = document.querySelector('.burger');

button.addEventListener('click', function () {
    var main_content = document.querySelector('.main-content');
    var side_menu = document.querySelector('.side-menu');
    var shadow = document.querySelector('.shadow');
    const width = window.innerWidth;

    if (width < 768) {
        main_content.classList.add('menu-hidden');

        side_menu.classList.remove('menu-hidden')
        side_menu.classList.add('menu-activate')
    }



    if (width >= 768) {
        side_menu.classList.remove('menu-hidden')
        side_menu.classList.add('menu-activate')

        shadow.classList.remove('menu-hidden');

    }

})