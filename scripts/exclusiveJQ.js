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



//? Language dropdown START
$(function () {
  let dropdownLang = $('.lang_dropdown');
  dropdownLang.click(() => dropdownLang.toggleClass('active'));
  hideDropdownLangByClickOut()
});


function hideDropdownLangByClickOut() {
  $(document).mouseup(function (e) {
    let dropdownLangTarget = $('.lang_dropdown');

    if (
      !dropdownLangTarget.is(e.target) &&
      dropdownLangTarget.has(e.target).length === 0
    ) {
      dropdownLangTarget.removeClass('active');
    }
  });
}

//* Lang choice by click
$(document).on('click', 'div[class="language"]', function(e) {
  $('.langDropdown_current').text($(this).html())
});
//? Language dropdown END


//? Change Category Woman Dropdown START
$(function () {
  let dropdownWomanCategory = $('.dropdownWomanCategory');
  let dropdownWomanContent = $('#dropdown-woman')
  dropdownWomanCategory.click(function () {
    dropdownWomanCategory.toggleClass('activeWomanDropdown');
    dropdownWomanCategory.hasClass('activeWomanDropdown')
      ? dropdownWomanContent.show(100)
      : dropdownWomanContent.hide(100);
  });
  hideDropdownWomanCategoryByClickOut();
});

function hideDropdownWomanCategoryByClickOut() {
  $(document).mouseup(function (e) {
    let dropdownWomanCategory = $('.dropdownWomanCategory');
    let dropdownWomanContent = $('#dropdown-woman')
    if (
      !dropdownWomanCategory.is(e.target) &&
      !dropdownWomanContent.is(e.target) &&
      dropdownWomanContent.has(e.target).length === 0 &&
      dropdownWomanCategory.has(e.target).length === 0
    ) {
      dropdownWomanContent.hide(100);
      dropdownWomanCategory.removeClass('activeWomanDropdown');
    }
  });
}
//? Change Category Woman Dropdown END

//? Change Category Man Dropdown START
$(function () {
  let dropdownManCategory = $('.dropdownManCategory');
  let dropdownManContent = $('#dropdown-man')
  dropdownManCategory.click(function () {
    dropdownManCategory.toggleClass('activeManDropdown');
    dropdownManCategory.hasClass('activeManDropdown')
      ? dropdownManContent.show(100)
      : dropdownManContent.hide(100);
  });
  hideDropdownManCategoryByClickOut();
});

function hideDropdownManCategoryByClickOut() {
  $(document).mouseup(function (e) {
    let dropdownManCategory = $('.dropdownManCategory');
    let dropdownManContent = $('#dropdown-man')
    if (
      !dropdownManCategory.is(e.target) &&
      !dropdownManContent.is(e.target) &&
      dropdownManContent.has(e.target).length === 0 &&
      dropdownManCategory.has(e.target).length === 0
    ) {
      dropdownManContent.hide(100);
      dropdownManCategory.removeClass('activeManDropdown');
    }
  });
}
//? Change Category Man Dropdown END


//?Product card color select toggle

$(document).ready(function () {
  $(document).on("click",".product_color-selector", function () {
    let clickedElem = $(this);
    if(!clickedElem.hasClass('selected')) {
      clickedElem.addClass('selected')
      clickedElem.siblings().removeClass('selected')
      let selectedProductImage = $(clickedElem.parents().filter('.product').find('.product__photo').find('img:hidden'))
      let unselectedProductImage = $(clickedElem.parents().filter('.product').find('.product__photo').find('img:visible'))
      selectedProductImage.fadeIn(200)
      unselectedProductImage.fadeOut(200)

    }
 });
})
