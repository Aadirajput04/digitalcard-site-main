// company logo image change


document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementById("userImage");
            if (file) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});






document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementById("Pro-Image");
            if (file) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});






document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementById("G-Image");
            if (file) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementById("Qr-Image");
            if (file) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementsByClassName("Pro2-Image")[0];
            if (e.target.result) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var uploadImageInput = document.getElementById("uploadImage");
    uploadImageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.getElementsByClassName("rew-Img")[0];
            if (e.target.result) {
                imageElement.src = e.target.result;
            } else {
                imageElement.src = "/card tamplate/img/7309681.jpg";
            }
        }

        reader.readAsDataURL(file);
    }
});




// rating

  $(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var rating = $('input[name="rating"]:checked').val();

      console.log("Rating: " + rating);
    });
  });













$(document).ready(function() {
    var currentStep = 1;
    var totalSteps = $('.container').length;

    $('.container').hide();
    $('.container:first').show();

    $('.btn-next').click(function() {
      if (currentStep < totalSteps) {
        $('.container').hide();
        $('.container:eq(' + currentStep + ')').show();
        currentStep++;
      }
    });

    $('.btn-prev').click(function() {
      if (currentStep > 1) {
        $('.container').hide();
        $('.container:eq(' + (currentStep - 2) + ')').show();
        currentStep--;
      }
    });
  });
