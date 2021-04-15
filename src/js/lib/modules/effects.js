import $ from '../core'

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

// Показать элемент
$.prototype.fadeIn = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'; //синтаксис устарел

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);

        requestAnimationFrame(ani);
    }

    return this;
};

// Скрыть элемент
$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (completion) => {
            this[i].style.opacity = 1 - completion;

            if (completion === 1) this[i].style.display = 'none';
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);

        requestAnimationFrame(ani);
    }

    return this;
};