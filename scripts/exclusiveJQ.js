//? Add animation - "add to wishlist". Product card
$(function () {
  $('.product__card div.product__wishlist').click(function () {
    $(this).toggleClass('product__wishlist_fix');
  });
});

//? Add animation - "add to wishlist". Product page
$(function () {
  $('.section-product-page__add-to-wishlist-btn').click(function () {
    $(this).toggleClass('section-product-page__add-to-wishlist-btn_fix');
  });
});

//? Change user icon on click, and open dropdown menu START
$(function () {
  let accModuleUser = $('.acc-module_user');
  let dropdownUser = $('#dropdown-user');
  accModuleUser.click(function () {
    accModuleUser.toggleClass('acc-module_user-bg_fix');
    accModuleUser.hasClass('acc-module_user-bg_fix')
      ? dropdownUser.show(100)
      : dropdownUser.hide(100);
  });
  hideUserDropdownByClickOut();
});

function hideUserDropdownByClickOut() {
  $(document).mouseup(function (e) {
    let accModuleUserTarget = $('.acc-module_user');
    let dropdownUserTarget = $('#dropdown-user');
    if (
      !dropdownUserTarget.is(e.target) &&
      !accModuleUserTarget.is(e.target) &&
      accModuleUserTarget.has(e.target).length === 0 &&
      dropdownUserTarget.has(e.target).length === 0
    ) {
      dropdownUserTarget.hide(100);
      accModuleUserTarget.removeClass('acc-module_user-bg_fix');
    }
  });
}
//? Change user icon on click, and open dropdown menu END

