var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("subscribe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//validate subscribe form
function validate(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if(name == '' || email == ''){
    alert('Please fill out the field');
    return false;
  }else{
    return true;
  }
}
