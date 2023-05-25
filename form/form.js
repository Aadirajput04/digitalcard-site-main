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






  // next and prev button






$(document).ready(function() {
    var currentStep = 1;
    var totalSteps = $('.container').length;

    $('.container').hide(); // Hide all containers initially
    $('.container:first').show(); // Show the first container

    $('.btn-next').click(function() {
      if (currentStep < totalSteps) {
        $('.container').hide(); // Hide all containers
        $('.container:eq(' + currentStep + ')').show(); // Show the next container
        currentStep++;
      }
    });

    $('.btn-prev').click(function() {
      if (currentStep > 1) {
        $('.container').hide(); // Hide all containers
        $('.container:eq(' + (currentStep - 2) + ')').show(); // Show the previous container
        currentStep--;
      }
    });
  });
