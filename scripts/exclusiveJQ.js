//? Add animation - "add to wishlist". Product card
$(function() {
  $('.product__card div.product__wishlist').click(function() {
    $(this).toggleClass('product__wishlist_fix');
  });
});

//? Add animation - "add to wishlist". Product page
$(function () {
  $('.section-product-page__add-to-wishlist-btn').click(function () {
    $(this).toggleClass('section-product-page__add-to-wishlist-btn_fix');
  });
});

//? Change user icon on click, when open dropdown menu
$(function () {
  $('.acc-module_user').click(function () {
    $(this).toggleClass('acc-module_user-bg_fix');
  });
});