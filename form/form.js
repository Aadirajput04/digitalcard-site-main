// company logo image change


function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageElement = document.getElementById("userImage");
        imageElement.src = e.target.result;
    }

    reader.readAsDataURL(file);
}


function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageElement = document.getElementById("pImage");
        imageElement.src = e.target.result;
    }

    reader.readAsDataURL(file);
}

function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageElement = document.getElementById("gImage");
        imageElement.src = e.target.result;
    }

    reader.readAsDataURL(file);
}
function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageElement = document.getElementById("PyImage");
        imageElement.src = e.target.result;
    }

    reader.readAsDataURL(file);
}