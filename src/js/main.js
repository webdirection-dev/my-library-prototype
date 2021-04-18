import './lib/lib';
import $ from "./lib/core";

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