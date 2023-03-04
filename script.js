/* Get all drop-down buttons on the page */
var dropdowns = document.getElementsByClassName("dropdown");

/* Loop through the drop-down buttons */
for (var i = 0; i < dropdowns.length; i++) {
  var dropdown = dropdowns[i];
  var button = dropdown.getElementsByClassName("dropbtn")[0];
  var content = dropdown.getElementsByClassName("dropdown-content")[0];

  /* Show the drop-down menu when the button is clicked */
  button.onclick = function() {
    content.classList.toggle("show");
  }
}

