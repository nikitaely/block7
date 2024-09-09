var button = document.querySelector(".techniq-more")

button.addEventListener('click', function () {
    const width = window.innerWidth;

    var link_1 = document.querySelector('.techniq-menu__element:nth-child(4)');
    var link_2 = document.querySelector('.techniq-menu__element:nth-child(5)');
    var more_text = document.querySelector('.techniq-more__text');
    var more_img = document.querySelector('.techniq-more__img');
    text = more_text.textContent;

    if (text == 'Показать все') {
        if (width < 1120) {
            link_1.classList.remove('hidden');
        }
        else {
            link_2.classList.remove('hidden-max');
        }

        more_text.textContent = 'Скрыть';
        more_img.classList.add('hide_img');
        button.classList.add('hide');
    }

    else {
        if (width < 1120) {
            link_1.classList.add('hidden');
            
        }
        else {
            link_2.classList.add('hidden-max');
        }
        more_text.textContent = 'Показать все';
        more_img.classList.remove('hide_img');
        button.classList.remove('hide');
    }



})