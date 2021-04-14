import $ from '../core';

// Если аргумента нет, то получаем содержимое тэга html
// Если аргумент был передан, то перезаписываем содержимое тэга переданным аргументом
$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) this[i].innerHTML = content;
        else return this[i].innerHTML;
    }
    return this;
};

// Работа с элементом по заданному индексу
$.prototype.eq = function (index) {
    const swap = this[index],
        objLength = Object.keys(this).length;

    // Очищаем объект от элементов
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    // Добавляем в объект единственный элемент
    this[0] = swap;
    this.length = 1;
    return this;
};

// Получение номера элемента по порядку
$.prototype.index = function () {
    const parent = this[0].parentNode,
        childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// Найти все элементы по указанному Селектору
$.prototype.find = function (selector) {
    let numberOfItems = 0, counter = 0;
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length === 0) continue;

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function (selector) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) === null) return this;
        this[i] = this[i].closest(selector);
        counter++;
    }

    for (; counter < Object.keys(this).length; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function () {
    let numberOfItems = 0, counter = 0;
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) continue;

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length -1;
    }

    this.length = numberOfItems;

    for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};