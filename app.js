// в переменную slides собираем все объекты с классом "slide" т.е. все картинки
const slides = document.querySelectorAll('.slide')

//  перебираем каждый слайд и добавляем на него слушателя
for(const slide of slides) {
    slide.addEventListener('click', ()=> {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

// удаляем активный класс у активного слайдера
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}