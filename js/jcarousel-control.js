$(function() {
  // Инициализация слайдера
  $('.jcarousel').jcarousel({
    // Базовые настройки скрипта пишутся здесь
  });

    $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

});
