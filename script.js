var dropdown = document.getElementById("dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});
