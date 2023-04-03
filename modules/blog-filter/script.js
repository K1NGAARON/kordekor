$(document).ready(function() {
    $('.blog-listing .filter-list li').eq(0).addClass('active');
    
    $('.blog-listing .filter-list li').click(function() {
      $(this).toggleClass('active');
      let tagCode = $(this).attr('data-tag');

      let postColumn = $('.grid-wrapper .post-article');
      let filterValue = postColumn.filter('.'+tagCode);

      const selectedItems = [];
      selectedItems.push(filterValue);

      console.log(selectedItems);

      postColumn.not(filterValue).hide();
      filterValue.show();



    });
    
    let seen = {};
    $('.blog-listing .filter-list li').each(function() {
      let txt = $(this).text();
      if (seen[txt])
        $(this).remove();
      else
        seen[txt] = true;
    });
  });