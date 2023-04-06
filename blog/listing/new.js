$(document).ready(function() {
    $('.blog-listing .filter-list li').eq(0).addClass('active');
  
    $('.blog-listing .filter-list li').click(function() {
      $(this).toggleClass('active');
      let selectedTags = [];
  
      $('.blog-listing .filter-list li.active').each(function() {
        selectedTags.push($(this).attr('data-tag'));
      });
  
      if (selectedTags.length > 0) {
        let postColumn = $('.grid-wrapper .post-article');
        postColumn.hide();
  
        $.each(selectedTags, function(index, tag) {
          postColumn.filter('.' + tag).show();
        });
      } else {
        $('.grid-wrapper .post-article').show();
      }
    });
  
    let seen = {};
    $('.blog-listing .filter-list li').each(function() {
      let txt = $(this).text();
      if (seen[txt])
        $(this).remove();
      else
        seen[txt] = true;
    });
  
    $(document).ready(function() {
      const stories = document.querySelectorAll('.kordekor-stories');
      $(stories).hide();
      $('li[data-tag="kordekor-stories"]').hide();
    });
});  