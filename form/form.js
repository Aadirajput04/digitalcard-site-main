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





// rating

  $(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var rating = $('input[name="rating"]:checked').val();
      // Process the rating value (e.g., send it to the server via AJAX)
      console.log("Rating: " + rating);
    });
  });

