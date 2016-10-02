var tooltips = document.getElementsByClassName("tooltiptext");

var cherrypickerModal = document.getElementById('cherrypickerModal');
var cherrypickerClick = document.getElementById("cherrypickerID");
cherrypickerClick.onclick = function() {
    cherrypickerModal.style.display = "block";
}

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

var friendmapModal = document.getElementById('friendmapModal');
var friendmapClick = document.getElementById("friendmapID");
friendmapClick.onclick = function() {
    friendmapModal.style.display = "block";
}

var compressionModal = document.getElementById('compressionModal');
var compressionClick = document.getElementById("compressionID");
compressionClick.onclick = function() {
    compressionModal.style.display = "block";
}

var districtModal = document.getElementById('districtModal');
var districtClick = document.getElementById("districtID");
districtClick.onclick = function() {
    districtModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tfsaModal || event.target == radialModal || event.target == cherrypickerModal || event.target == friendmapModal || event.target == compressionModal || event.target == districtModal) {
        tfsaModal.style.display = "none";
        radialModal.style.display = "none";
        cherrypickerModal.style.display = "none";
        friendmapModal.style.display = "none";
        compressionModal.style.display = "none";
        districtModal.style.display = "none";
    }
}