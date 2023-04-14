$(document).ready(function() {
    const allPosts = document.querySelectorAll('.general-wrapper .post-article ');
    const stories = document.querySelectorAll('.general-wrapper .kordekor-stories');

    const maxItems = 2;
    const length = allPosts.length;

    const difference = length - maxItems;
    
    $('.kordekor-stories-wrapper .post-article:not(".kordekor-stories")').remove();
    $(stories).slice(-difference).remove();
});