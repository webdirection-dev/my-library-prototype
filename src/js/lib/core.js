const $ = function (selector) {
    // Вернем новый прототип функции $
    return new $.prototype.init(selector);
};

// Метод init() для функции $
$.prototype.init = function (selector) {
    if (!selector) {
        return this; // если selector пустой, то вернем пустой объект {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    // Добавить в существующий объект Новые Свойства
    // assign(объектКудаДобавляем, свойтсвоКотороеДобовляем)
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

//Меняем Прототип функции init()
$.prototype.init.prototype = $.prototype;

// Делаем $ глобальной функцией!
window.$ = $;

export default $;