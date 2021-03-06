/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
      } else this[i].nextElementSibling.style.maxHeight = '0px';
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion('accordion-head--active', 'accordion-content--active');

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    let offset = 0,
        slideIndex = 0;
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
          slides = this[i].querySelectorAll('.carousel-items'),
          slidesField = this[i].querySelector('.carousel-slides'),
          slidesImg = this[i].querySelectorAll('.carousel-img'),
          dots = this[i].querySelectorAll('.carousel-indicators li'); // ?????????????????????????? ???????????? ???????????? ??????????????

    slidesField.style.width = 100 * slides.length + '%'; // ?????????????????????????? ???????????? ?????????????? ???????????????????? ????????????

    slidesImg.forEach(item => {
      item.style.width = width;
    }); // onClick

    let widthReplace = +width.replace(/\D/g, '');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(event => {
      event.preventDefault(); //???????????????? ??????????????

      if (offset === widthReplace * (slides.length - 1)) offset = 0;else offset += widthReplace;
      slidesField.style.transform = `translateX(-${offset}px)`; //slideIndex

      if (slideIndex == slides.length - 1) slideIndex = 0;else slideIndex++; //dots

      dots.forEach(item => item.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(event => {
      event.preventDefault(); //???????????????? ??????????????

      if (offset === 0) offset = widthReplace * (slides.length - 1);else offset -= widthReplace;
      slidesField.style.transform = `translateX(-${offset}px)`; //slideIndex

      if (slideIndex == 0) slideIndex = slides.length - 1;else slideIndex--; //dots

      dots.forEach(item => item.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    const sliderId = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(event => {
      const slideTo = event.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = widthReplace * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`; //dots

      dots.forEach(item => item.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
}; // ??????????????????????????


Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/mask.js":
/*!***************************************!*\
  !*** ./src/js/lib/components/mask.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.mask = function () {
  for (let i = 0; i < this.length; i++) {
    // ???????????????????????????? values on input
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('input', event => {
      let target = event.target,
          numbersValue = _getInputNumberValue(target.value),
          formattedInputValue = '',
          selectionStarts = target.selectionStart;

      if (!numbersValue) return target.value = '';

      if (target.value.length !== selectionStarts) {
        if (event.data && /\D/g.test(event.data)) target.value = numbersValue;
        return;
      }

      if (['7', '8', '9'].indexOf(numbersValue[0]) > -1) {
        // Russian phone number
        if (numbersValue[0] == '9') numbersValue = '7' + numbersValue;
        formattedInputValue = numbersValue[0] == '8' ? '8' : '+7';
        if (numbersValue.length > 0) formattedInputValue += ' (' + numbersValue.substring(1, 4);
        if (numbersValue.length >= 5) formattedInputValue += ') ' + numbersValue.substring(4, 7);
        if (numbersValue.length >= 8) formattedInputValue += '-' + numbersValue.substring(7, 9);
        if (numbersValue.length >= 10) formattedInputValue += '-' + numbersValue.substring(9, 11);
      } else formattedInputValue = '+' + numbersValue.substring(0, 16); // Not Russian phone number


      target.value = formattedInputValue;
    }); // ???????????????? ?????????????????????? ????????????????

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('keydown', event => {
      let target = event.target,
          keyCode = event.keyCode;
      if (keyCode === 8 && _getInputNumberValue(target.value).length === 1) target.value = '';
    }); // Paste

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('paste', event => {
      let target = event.target,
          numbersValue = _getInputNumberValue(target.value),
          pasted = event.clipboardData || window.clipboardData;

      if (pasted) {
        let pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) target.value = numbersValue;
      }
    });
  } // ??????????????????????
  // ???????????? ?????????? .replace()


  function _getInputNumberValue(input) {
    return input.replace(/\D/g, '');
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tel-input]').mask();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ?????? ????????, ?????????? ?????????????????????? ?? html

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  const scroll = _calcScroll(); // ???????????????? ?????????????????? ????????


  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(event => {
      event.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden'; // ?????????????????? margin ?????????? ???? ???????????????? ???????????? ?? ???????????????????? ????????

      document.body.style.marginRight = `${scroll}px`;
    }); // ?????????????? ?????????????????? ???????? ???? ?????????? ???? ?????????????? ?? ????????????

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(item => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(item).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = ''; // ?????????????? margin ?????????? ???? ???????????????? ???????????? ?? ???????????????????? ????????

        document.body.style.marginRight = `0px`; //???????????????????? ?????? ?????????????????????? ???????????????????? ???????????????????? ????????

        if (created) document.querySelector(target).remove();
      });
    }); // ?????????????? ?????????????????? ???????? ???? ?????????? ???? ????????????????

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(event => {
      if (event.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = ''; // ?????????????? margin ?????????? ???? ???????????????? ???????????? ?? ???????????????????? ????????

        document.body.style.marginRight = `0px`; //???????????????????? ?????? ?????????????????????? ???????????????????? ???????????????????? ????????

        if (created) document.querySelector(target).remove();
      }
    });
  } // ??????????????????????
  // ?????????????? ???????????????? ??????????????


  function _calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div); // offsetWidth - ???????????? ?????????? ????????
    // clientWidth - ???????????? ???????? ?????? ??????????????
    // offsetWidth - clientWidth = ???????????? ???????????? ??????????????

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
}; // ?????????????????????????? ?????????????????? ?????????????????? ????????


Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal(); // ?????????????????????? ?????????????????????? ????????

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  const {
    title,
    body
  } = text; // ???????????????????????????????? ???????????????? text ?? btns

  const {
    count,
    settings
  } = btns; // btns = {count: num, settings: [[title, [className, className], close, callback], ...]}

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // ?????????????? ?????????????????? ???????????????????????????? ???????????? ?????? ????????
    // btns = {count: num, settings: [[title, [className, className], close, callback], ...]}

    const buttons = [];

    for (let j = 0; j < count; j++) {
      let btn = document.createElement('button');
      btn.textContent = settings[j][0];
      btn.classList.add('btn', ...settings[j][1]);
      if (settings[j][2]) btn.setAttribute('data-close', 'true');
      if (settings[j][3] && typeof settings[j][3] === 'function') btn.addEventListener('click', settings[j][3]);
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/pageups.js":
/*!******************************************!*\
  !*** ./src/js/lib/components/pageups.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.pageup = function () {
  for (let i = 0; i < this.length; i++) {
    // ???????????????? ?? ???????????????????????????? requestAnimationFrame
    let speed = 0.4; // ????????????/???????????????? ???????????? UP

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 850) this[i].style.opacity = '1';else this[i].style.opacity = '0';
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(_step);

      function _step(time) {
        if (start === null) start = time;
        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) requestAnimationFrame(_step);else location.hash = hash;
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup').pageup();

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  // ???????????? ?????????? ???????????????? ?????????????? $
  return new $.prototype.init(selector);
}; // ?????????? init() ?????? ?????????????? $


$.prototype.init = function (selector) {
  if (!selector) {
    return this; // ???????? selector ????????????, ???? ???????????? ???????????? ???????????? {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  } // ???????????????? ?? ???????????????????????? ???????????? ?????????? ????????????????
  // assign(??????????????????????????????????????, ????????????????????????????????????????????????)


  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
}; //???????????? ???????????????? ?????????????? init()


$.prototype.init.prototype = $.prototype; // ???????????? $ ???????????????????? ????????????????!

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mask */ "./src/js/lib/components/mask.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _components_pageups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pageups */ "./src/js/lib/components/pageups.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");














/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ???????? ?????????????????? ??????, ???? ???????????????? ???????????????????? ???????? html
// ???????? ???????????????? ?????? ??????????????, ???? ???????????????????????????? ???????????????????? ???????? ???????????????????? ????????????????????

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) this[i].innerHTML = content;else return this[i].innerHTML;
  }

  return this;
}; // ???????????? ?? ?????????????????? ???? ?????????????????? ??????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (index) {
  const swap = this[index],
        objLength = Object.keys(this).length; // ?????????????? ???????????? ???? ??????????????????

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  } // ?????????????????? ?? ???????????? ???????????????????????? ??????????????


  this[0] = swap;
  this.length = 1;
  return this;
}; // ?????????????????? ???????????? ???????????????? ???? ??????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode,
        childs = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
}; // ?????????? ?????? ???????????????? ???? ???????????????????? ??????????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0,
      counter = 0;
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0,
      counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) continue;
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.add(...className);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.remove(...className);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.showElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    if (this[i].style.display === 'none') this[i].style.display = '';else this[i].style.display = 'none';
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ???????????????? ??????????????

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display = 'block', fin) {
  for (let i = 0; i < this.length; i++) {
    this.showDisplayBlock(i, dur, fin, display);
  }

  return this;
}; // ???????????? ??????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    this.hideDisplayBlock(i, dur, fin);
  }

  return this;
}; // ???????????????????????? ????????????/???????????????? ??????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display = 'block', fin) {
  for (let i = 0; i < this.length; i++) {
    // ?????????????? ???????????????? ???? Computed ?????????????????????????????? ?? ????????????????
    // ?????????????????????? ???? ???????????????? ?????????? ?????????? window.getComputedStyle()
    if (window.getComputedStyle(this[i]).display === 'none') {
      this.showDisplayBlock(i, dur, fin, display);
    } else {
      for (let i = 0; i < this.length; i++) {
        this.hideDisplayBlock(i, dur, fin);
      }
    }
  }

  return this;
}; // ??????????????????????
// ?????????????????????? ?????????????? ???? ???????????? ???? ?????????? ????????????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, final) {
  let timeStart; // ?????????????????????? ?????????????? ?????? RequestAnimationFrame

  function _animateOverTime(time) {
    if (!timeStart) timeStart = time;
    let timeElapsed = time - timeStart;
    let completion = Math.min(timeElapsed / duration, 1);
    callback(completion);
    if (timeElapsed < duration) requestAnimationFrame(_animateOverTime);else {
      if (typeof final === 'function') final();
    }
  }

  return _animateOverTime;
}; // ?????? ???????????? ????????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.showDisplayBlock = function (item, dur, fin, display) {
  this[item].style.display = display;

  const _fadeAction = completion => {
    this[item].style.opacity = completion;
  };

  const ani = this.animateOverTime(dur, _fadeAction, fin);
  requestAnimationFrame(ani);
}; // ?????? ?????????????? ??????????????


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideDisplayBlock = function (item, dur, fin) {
  const _fadeAction = completion => {
    this[item].style.opacity = 1 - completion;
    if (completion === 1) this[item].style.display = 'none';
  };

  const ani = this.animateOverTime(dur, _fadeAction, fin);
  requestAnimationFrame(ani);
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callback) return this;
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callback) return this;
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) this[i].addEventListener('click', handler);else this[i].click();
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/parser.js":
/*!***************************************!*\
  !*** ./src/js/lib/services/parser.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const parser = () => {
  const bodyElem = document.querySelector('body'),
        textNode = [];

  function recursion(elem) {
    elem.childNodes.forEach(item => {
      if (item.nodeName.match(/^H\d/)) {
        const obj = {
          header: item.nodeName,
          content: item.textContent
        };
        textNode.push(obj);
      } else recursion(item);
    });
  }

  recursion(bodyElem); //???????????????????? ???????????? ???? ????????????

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(textNode)
  }).then(response => response.json()).then(data => console.log(data));
};

/* harmony default export */ __webpack_exports__["default"] = (parser);

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url, dataTypeAnswer = 'json') {
  let result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await result.json();

    case 'text':
      return await result.text();

    case 'blob':
      return await result.blob();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data, dataTypeAnswer = 'text') {
  let result = await fetch(url, {
    method: 'POST',
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await result.json();

    case 'text':
      return await result.text();

    case 'blob':
      return await result.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core */ "./src/js/lib/core.js");
/* harmony import */ var _lib_services_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/parser */ "./src/js/lib/services/parser.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict'; // ???????????????????????? ???????????????? ?????????????????? ????????

  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('#triggerDynamicModal').click(() => Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('#triggerDynamicModal').createModal({
    text: {
      title: 'Dynamic create modal',
      body: '3/Lorem ipsum dolor sit amet/3'
    },
    btns: {
      count: 3,
      settings: [['Close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
        alert('Data saved...');
      }], ['Another btn', ['btn-warning', 'ml-10'], false, () => {
        alert('Hello, World!');
      }]]
    }
  })); // ???????????????????????? ?????????????? for DROPDOWN

  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('.wrap').html(`
    <div class="dropdown mt-20">
            <button class="btn btn-success dropdown-toggle2" id="dropdownMenuButton3">Dropdown dynamic</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton3">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
    `);
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('.dropdown-toggle2').dropdown(); // ???????????? ??????????

  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('#first').on('click', () => {
    Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('.w-500').eq(0).fadeToggle(800);
  });
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-count="second"]').on('click', () => {
    Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('.w-500').eq(1).fadeToggle(800);
  });
  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('#third').on('click', () => {
    Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])('.w-500').fadeToggle(800);
  }); //?????????????????? GET-??????????????

  Object(_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"])().get('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)); // $('button').on('click', function () {
  //     $('div').eq(0).toggleClass('active');
  // });
  //
  // $('div').click(function () {
  //     console.log($(this).index());
  // });
  // console.log($('div').eq(2).find('.more'));
  // console.log($('.some').closest('.findme2').addClass('test'));
  // console.log($('.more').eq(0).siblings());
  // console.log($('.findme').siblings());
  // $('button').fadeOut(1800);
  // ???????????? parse / ??????????????????

  Object(_lib_services_parser__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map