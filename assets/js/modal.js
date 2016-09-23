// Get the modal
var tfsaModal = document.getElementById('tfsaModal');

// Get the button that opens the modal
var tfsaClick = document.getElementById("tfsaguideID");



// When the user clicks on the button, open the modal 
tfsaClick.onclick = function() {
    tfsaModal.style.display = "block";
}



var radialModal = document.getElementById('radialModal');

// Get the button that opens the modal
var radialClick = document.getElementById("radialID");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal 
radialClick.onclick = function() {
    radialModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


span[0].onclick = function() {
    radialModal.style.display = "none";
    tfsaModal.style.display = "none";
}
span[1].onclick = function() {
    radialModal.style.display = "none";
    tfsaModal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tfsaModal || event.target == radialModal) {
        tfsaModal.style.display = "none"
        radialModal.style.display = "none"
    }
}