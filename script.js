
function openForm() {
  document.getElementById("myModal").style.display = "block";
}

function closeForm() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeForm();
  }
}

var modal = document.getElementById("formModal");

// Get the <h1> element that opens the modal
var h1 = document.getElementById("openFormModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the <h1>, open the modal
h1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function closeForm() {
    document.getElementById("myModal").style.display = "none";
  }

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeForm();
    }
  }

  