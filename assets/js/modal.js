var tooltips = document.getElementsByClassName("tooltiptext");

// Get the modal
var tfsaModal = document.getElementById('tfsaModal');
var tfsaClick = document.getElementById("tfsaguideID");
tfsaClick.onclick = function() {
    tfsaModal.style.display = "block";
    // tooltips[1].style.visibility = "hidden";
}

var radialModal = document.getElementById('radialModal');
var radialClick = document.getElementById("radialID");
radialClick.onclick = function() {
    radialModal.style.display = "block";
    // tooltips[2].style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tfsaModal || event.target == radialModal) {
        tfsaModal.style.display = "none";
        radialModal.style.display = "none";
    }
}