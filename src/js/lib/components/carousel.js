import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        let offset = 0,
            slideIndex = 0;
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
            slides = this[i].querySelectorAll('.carousel-items'),
            slidesField = this[i].querySelector('.carousel-slides'),
            slidesImg = this[i].querySelectorAll('.carousel-img'),
            dots = this[i].querySelectorAll('.carousel-indicators li');

        // устанавливаем ширину группе слайдов
        slidesField.style.width = 100 * slides.length + '%';
        // устанавливаем ширину каждому отдельному слайду
        slidesImg.forEach(item => {
            item.style.width = width;
        });

        // onClick
        let widthReplace = +width.replace(/\D/g, '');

        $(this[i].querySelector('[data-slide="next"]')).click((event) => {
            event.preventDefault();

            //Движение слайдов
            if (offset === widthReplace * (slides.length -1)) offset = 0;
            else offset += widthReplace;
            slidesField.style.transform = `translateX(-${offset}px)`;

            //slideIndex
            if (slideIndex == slides.length -1) slideIndex = 0;
            else slideIndex++;

            //dots
            dots.forEach(item => item.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((event) => {
            event.preventDefault();

            //Движение слайдов
            if (offset === 0) offset = widthReplace * (slides.length -1);
            else offset -= widthReplace;
            slidesField.style.transform = `translateX(-${offset}px)`;

            //slideIndex
            if (slideIndex == 0) slideIndex = slides.length -1;
            else slideIndex--;

            //dots
            dots.forEach(item => item.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(event => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = widthReplace * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            //dots
            dots.forEach(item => item.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel();