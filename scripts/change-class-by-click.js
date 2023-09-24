document.body.addEventListener("click", function (e) {
  var elem = e.target
  if (elem.classList.contains("product__wishlist")) elem.classList.toggle("product__wishlist_fix");
  else if (elem.classList.contains("acc-module_user")) elem.classList.toggle("acc-module_user-bg_fix");
  else if (elem.classList.contains("section-product-page__add-to-wishlist-btn")) elem.classList.toggle("section-product-page__add-to-wishlist-btn_fix");
})