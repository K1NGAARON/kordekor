$(document).ready(function() {
    $('.wrapper .box').click(function() {
        $(this).toggleClass('active');
        console.log(this);


        const activeItems = $('.box.active');
        const content = $('.grid-wrapper .post-article');


        const tagCode = activeItems.attr('data-tag');


        if (!tagCode) {
            
        } else {

        }

    });


});