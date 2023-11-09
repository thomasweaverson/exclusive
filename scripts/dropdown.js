/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function dropdownWoman() {
  document.getElementById("dropdown-woman").classList.toggle("dropdown-show");
}

function dropdownMan() {
  document.getElementById("dropdown-man").classList.toggle("dropdown-show");
}


// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropdown')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('dropdown-show')) {
//         openDropdown.classList.remove('dropdown-show');
//       }
//     }
//   }
// }