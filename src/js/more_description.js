var button = document.querySelector(".description-more")

button.addEventListener('click', function () {
    const width = window.innerWidth;

    var p2 = document.querySelector('.description-text__p2')
    var p2_hidden = document.querySelector('.description-text__p2_hidden')
    var p3 = document.querySelector('.description-text__p3')
    var more_text = document.querySelector('.description-more__text')
    var more_img = document.querySelector('.description-more__img')
    var text = more_text.textContent;

    if (text == 'Читать далее') {
        p2.classList.add('active-text');
        p2_hidden.classList.add('active-text');
        p3.classList.add('active-text');
        more_img.classList.add('hide_img')
        more_text.textContent = 'Скрыть';
    }

    else {
        p2.classList.remove('active-text');
        p2_hidden.classList.remove('active-text');
        p3.classList.remove('active-text');
        more_img.classList.remove('hide_img')
        more_text.textContent = 'Читать далее';
    }



})