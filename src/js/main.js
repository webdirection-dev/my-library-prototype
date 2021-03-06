import './lib/lib';
import $ from "./lib/core";
import parser from "./lib/services/parser";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Динамическое создание модальных окон
    $('#triggerDynamicModal').click(() => $('#triggerDynamicModal').createModal({
        text: {
            title: 'Dynamic create modal',
            body: '3/Lorem ipsum dolor sit amet/3'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Data saved...');
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello, World!');
                    }
                ]
            ]
        }
    }));

    // Динамическая верстка for DROPDOWN
    $('.wrap').html(`
    <div class="dropdown mt-20">
            <button class="btn btn-success dropdown-toggle2" id="dropdownMenuButton3">Dropdown dynamic</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton3">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
    `);

    $('.dropdown-toggle2').dropdown();

    // Скрыть текст
    $('#first').on('click', () => {
        $('.w-500').eq(0).fadeToggle(800);
    });

    $('[data-count="second"]').on('click', () => {
        $('.w-500').eq(1).fadeToggle(800);
    });

    $('#third').on('click', () => {
        $('.w-500').fadeToggle(800);
    });

    //Тестируем GET-запросы
    $().get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => console.log(response))

    // $('button').on('click', function () {
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

    // Тестим parse / Распарсим
    parser();
});