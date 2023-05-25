//first image

document.addEventListener("DOMContentLoaded", function() {
  var uploadImageInput = document.getElementById("uploadImage");
  var userImageElement = document.getElementById("userImage");

  userImageElement.addEventListener("click", function() {
    uploadImageInput.click();
  });

  uploadImageInput.addEventListener("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      userImageElement.src = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
});



// secont image

document.addEventListener("DOMContentLoaded", function() {
    var pImageInput = document.getElementById("pImage");
    var proImageElement = document.getElementById("Pro-Image");

    proImageElement.addEventListener("click", function() {
      pImageInput.click();
    });

    pImageInput.addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        proImageElement.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });

// third image

  document.addEventListener("DOMContentLoaded", function() {
    var gImageInput = document.getElementById("gImage");
    var gImageElement = document.getElementById("G-Image");

    gImageElement.addEventListener("click", function() {
      gImageInput.click();
    });

    gImageInput.addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        gImageElement.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });


//fourth image

  document.addEventListener("DOMContentLoaded", function() {
    var qrImageInput = document.getElementById("QrImage");
    var qrImageElement = document.getElementById("Qr-Image");

    qrImageElement.addEventListener("click", function() {
      qrImageInput.click();
    });

    qrImageInput.addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        qrImageElement.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });



  //fifth image

// Get the input element and the image element using their classes
const inputFile = document.querySelector('.pro3-img');
const img = document.querySelector('.Pro3-Image');

// Add an event listener to the image element
img.addEventListener('click', () => {
  inputFile.click(); // Simulate a click on the file input element
});

// Add an event listener for the input change event
inputFile.addEventListener('change', handleImageUpload);

// Function to handle the image upload
function handleImageUpload(event) {
  const file = event.target.files[0];

  // Create a file reader
  const reader = new FileReader();

  // Set up the file reader onload function
  reader.onload = function (e) {
    img.src = e.target.result;
  };

  // Read the image file as a data URL
  reader.readAsDataURL(file);
}






  //sixth image








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
