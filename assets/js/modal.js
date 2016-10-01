var tooltips = document.getElementsByClassName("tooltiptext");

// Get the modal
var tfsaModal = document.getElementById('tfsaModal');
var tfsaClick = document.getElementById("tfsaguideID");
tfsaClick.onclick = function() {
    tfsaModal.style.display = "block";
}

var radialModal = document.getElementById('radialModal');
var radialClick = document.getElementById("radialID");
radialClick.onclick = function() {
    radialModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tfsaModal || event.target == radialModal) {
        tfsaModal.style.display = "none";
        radialModal.style.display = "none";
    }
}