import './lib/lib';

$('button').on('click', function () {
    $('div').eq(0).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));

// console.log($('.some').closest('.findme2').addClass('test'));

// console.log($('.more').eq(0).siblings());

console.log($('.findme').siblings());