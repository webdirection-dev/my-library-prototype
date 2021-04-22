import $ from '../core';

// Для окон, ранее сверстанных в html
$.prototype.modal = function (created) {
    const scroll = _calcScroll();

    // Показать модальное окно
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click(event => {
            event.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            // добавляем margin чтобы не дергался скролл у модального окна
            document.body.style.marginRight = `${scroll}px`;
        });

        // Закрыть модальное окно по клике на крестик и кнопку
        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(item => {
            $(item).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';

                // убираем margin чтобы не дергался скролл у модального окна
                document.body.style.marginRight = `0px`;

                //функционал для динамически созданного модального окна
                if (created) document.querySelector(target).remove();
            });
        });

        // Закрыть модальное окно по клике на подложку
        $(target).click(event => {
            if (event.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';

                // убираем margin чтобы не дергался скролл у модального окна
                document.body.style.marginRight = `0px`;

                //функционал для динамически созданного модального окна
                if (created) document.querySelector(target).remove();
            }
        });
    }

    // Технические
    // Убираем дёргание скролла
    function _calcScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        // offsetWidth - ширина всего окна
        // clientWidth - ширина окна без скролла
        // offsetWidth - clientWidth = ширина самого скролла
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

// Инициализация статичных модальных окон
$('[data-toggle="modal"]').modal();

// Динамически создаваемые окна
$.prototype.createModal = function ({text, btns} = {}) {
    const { title, body } = text; // Деструктурицация объектов text и btns
    const { count, settings } = btns; // btns = {count: num, settings: [[title, [className, className], close, callback], ...]}

    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // Создать правильно отрабатывающие кнопки для окна
        // btns = {count: num, settings: [[title, [className, className], close, callback], ...]}
        const buttons = [];
        for (let j = 0; j < count; j++) {
            let btn = document.createElement('button');
            btn.textContent = settings[j][0];
            btn.classList.add('btn', ...settings[j][1]);
            if (settings[j][2]) btn.setAttribute('data-close', 'true');
            if (settings[j][3] && typeof(settings[j][3]) === 'function') btn.addEventListener('click', settings[j][3]);

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            ${body}
                        </p>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};