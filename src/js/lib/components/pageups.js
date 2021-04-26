import $ from '../core';

$.prototype.pageup = function () {

    for (let i = 0; i < this.length; i++) {
        // Анимация с использованием requestAnimationFrame
        let speed = 0.4;

        // Скрыть/показать кнопку UP
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 850) this[i].style.opacity = '1';
            else this[i].style.opacity = '0';
        });

        $(this[i]).click(function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(_step);

            function _step (time) {
                if (start === null) start = time;

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) requestAnimationFrame(_step);
                else location.hash = hash;
            }
        });
    }
};

$('.pageup').pageup();