import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid commodi quod accusamus eaque nemo nulla officia voluptatum animi dolor?'
    },
    btns: {
        count: 3,
        settings: [
            [
                'close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'save changes',
                ['btn-success'],
                false,
                () => {
                    alert('данные сохранены');
                }
            ],
            [
                'another button',
                ['btn-dark', 'ml-10'],
                false,
                () => {
                    alert('hello world!');
                }
            ]
        ]
    }
}));

$().get('https://gorest.co.in/public/v2/comments')
    .then(res => console.log(res));