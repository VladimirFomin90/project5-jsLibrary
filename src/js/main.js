import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});


// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findme'));

// $('button').fadeIn(2000);

// console.log($('button').html('hello'));
