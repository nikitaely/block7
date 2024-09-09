var button = document.querySelector('.escape');

button.addEventListener('click', function () {
    
    var main_content = document.querySelector('.main-content');
    var side_menu = document.querySelector('.side-menu');

    main_content.classList.remove('menu-hidden');

    side_menu.classList.add('menu-hidden')
    side_menu.classList.remove('menu-activate')

    const width = window.innerWidth;

    if (width >= 768 && width < 1440) {
        var shadow = document.querySelector('.shadow');
        shadow.classList.add('menu-hidden');

    }

})