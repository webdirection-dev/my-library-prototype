import $ from '../core'

// Показать элемент
$.prototype.fadeIn = function (dur, display='block', fin) {
    for (let i = 0; i < this.length; i++) {
        this.showDisplayBlock(i, dur, fin, display);
    }
    return this;
};

// Скрыть элемент
$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {
        this.hideDisplayBlock(i, dur, fin);
    }
    return this;
};

// Автоматичеси скрыть/показать элемент
$.prototype.fadeToggle = function (dur, display='block', fin) {
    for (let i = 0; i < this.length; i++) {
        // Достать значение из Computed сформированного в Браузере
        // Достучаться до значений можно через window.getComputedStyle()
        if (window.getComputedStyle(this[i]).display === 'none') {
            this.showDisplayBlock(i, dur, fin, display);
        } else {
            for (let i = 0; i < this.length; i++) {
                this.hideDisplayBlock(i, dur, fin);
            }
        }
    }
    return this;
};

// Технические
// Техническая функция по работе со всеми анимациями
$.prototype.animateOverTime = function (duration, callback, final) {
    let timeStart;

    // Техническая функция для RequestAnimationFrame
    function _animateOverTime (time) {
        if (!timeStart) timeStart = time;

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / duration, 1);

        callback(completion);

        if (timeElapsed < duration) requestAnimationFrame(_animateOverTime);
        else {
            if (typeof final === 'function') final();
        }
    }
    return _animateOverTime;
};

// Для Показа элемента
$.prototype.showDisplayBlock = function (item, dur, fin, display) {
    this[item].style.display = display;

    const _fadeAction = (completion) => {
        this[item].style.opacity = completion;
    };

    const ani = this.animateOverTime(dur, _fadeAction, fin);
    requestAnimationFrame(ani);
};

// Для Скрытия элемент
$.prototype.hideDisplayBlock = function (item, dur, fin) {
    const _fadeAction = (completion) => {
        this[item].style.opacity = 1 - completion;
        if (completion === 1) this[item].style.display = 'none';
    };

    const ani = this.animateOverTime(dur, _fadeAction, fin);
    requestAnimationFrame(ani);
};