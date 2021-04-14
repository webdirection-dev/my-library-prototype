import $ from '../core';

$.prototype.showElem = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;
        this[i].style.display = '';
    }
    return this;
}

$.prototype.hideElem = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;
        this[i].style.display = 'none';
    }
    return this;
}

$.prototype.toggleDisplay = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;
        if (this[i].style.display === 'none') this[i].style.display = '';
        else this[i].style.display = 'none';
    }
    return this;
}