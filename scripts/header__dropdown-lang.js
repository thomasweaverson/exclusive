function show(value) {
  document.querySelector(".lang_text-box").value = value;
}

let dropdown = document.querySelector(".lang_dropdown")
dropdown.onclick = function () {
  dropdown.classList.toggle("active")
}