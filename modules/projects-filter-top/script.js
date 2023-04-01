$(document).ready(function() {
    $('.blog-listing .filter-list li').eq(0).addClass('active');
    
    $('.blog-listing .filter-list li').click(function() {
      $('.blog-listing .filter-list li').removeClass('active');
      $(this).addClass('active');

      var tagCode = $(this).attr('data-tag');
      var postColumn = $('.grid-wrapper .post-article');
      var filterValue = postColumn.filter('.'+tagCode);

      if(tagCode == 'all') {
        postColumn.show();
      } else {
        postColumn.not(filterValue).hide();
        filterValue.show();
      }
    });
    
    var seen = {};
    $('.blog-listing .filter-list li').each(function() {
      var txt = $(this).text();

      if (seen[txt]) {
        $(this).remove();
      } else {
        seen[txt] = true;
      }
    });
  });