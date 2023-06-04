
//first image

document.addEventListener("DOMContentLoaded", function () {
    var uploadImageInput = document.getElementById("uploadImage");
    var userImageElement = document.getElementById("userImage");

    uploadImageInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            userImageElement.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});



// secont image

document.addEventListener("DOMContentLoaded", function () {
    var pImageInput = document.getElementById("pImage");
    var proImageElement = document.getElementById("Pro-Image");

    pImageInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            proImageElement.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});

// third image

document.addEventListener("DOMContentLoaded", function () {
    var gImageInput = document.getElementById("gImage");
    var gImageElement = document.getElementById("G-Image");

    // gImageElement.addEventListener("click", function () {
    //     gImageInput.click();
    // });

    gImageInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            gImageElement.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});


//fourth image

document.addEventListener("DOMContentLoaded", function () {
    var qrImageInput = document.getElementById("QrImage");
    var qrImageElement = document.getElementById("Qr-Image");

    qrImageInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
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


const images = document.querySelectorAll('.rew-Img');
const inputs = document.querySelectorAll('.R-Img');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        inputs[index].click();
    });

    inputs[index].addEventListener('change', () => {
        const file = inputs[index].files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            image.src = reader.result;
        });

        reader.readAsDataURL(file);
    });
});





// rating

$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        var rating = $('input[name="rating"]:checked').val();

        console.log("Rating: " + rating);
    });
});













$(document).ready(function () {
    var currentStep = 1;
    var totalSteps = $('.container').length;

    $('.container').hide();
    $('.container:first').show();

    $('.btn-next').click(function () {
        if (currentStep < totalSteps) {
            $('.container').hide();
            $('.container:eq(' + currentStep + ')').show();
            currentStep++;
        }
    });

    $('.btn-prev').click(function () {
        if (currentStep > 1) {
            $('.container').hide();
            $('.container:eq(' + (currentStep - 2) + ')').show();
            currentStep--;
        }
    });
});














/// data fatching ```javascript--------------------------------------------------------------------------------------------------------------------------------




function handleSubmit() {


    //main function
    const name = document.getElementById('C-Name').value;
    const wyd = document.getElementById('what-you-do').value;
    const fileInput = document.getElementById('uploadImage');



    //main function end

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const logo = event.target.result;

            localStorage.setItem('companyName', name);
            localStorage.setItem('companyWyd', wyd);
            localStorage.setItem('companyLogo', logo);


        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        // If no image is selected, store the other data and redirect



        /// main




        localStorage.setItem('companyName', name);
        localStorage.setItem('companyWyd', wyd);


        //main end


    }


    const Add = document.getElementById('C-Add').value;
    const Phone = document.getElementById('C-Phone').value;
    const Email = document.getElementById('C-Email').value;
    const CustProd = document.getElementById('C-Prod').value;
    console.log(CustProd)
    const CustProdDec = document.getElementById('C-Prod-Dec').value;
    const CustProdPrice = document.getElementById('C-Prod-Price').value;

    const CustReview1 = document.getElementById('C-Rname1').value;
    const CustRewLoc1 = document.getElementById('C-Rew-Loc1').value;
    const CustRewDec1 = document.getElementById('C-Rew-Dec1').value;
    const CustReview2 = document.getElementById('C-Rname2').value;
    const CustRewLoc2 = document.getElementById('C-Rew-Loc2').value;
    const CustRewDec2 = document.getElementById('C-Rew-Dec2').value;
    const CustReview3 = document.getElementById('C-Rname3').value;
    const CustRewLoc3 = document.getElementById('C-Rew-Loc3').value;
    const CustRewDec3 = document.getElementById('C-Rew-Dec3').value;






    localStorage.setItem('companyAdd', Add);
    localStorage.setItem('companyPhone', Phone);
    localStorage.setItem('companyEmail', Email);
    localStorage.setItem('companyCustProd', CustProd);
    localStorage.setItem('companyCustProdDec', CustProdDec);
    localStorage.setItem('companyCustProdPrice', CustProdPrice);

    localStorage.setItem('companyCustReview1', CustReview1);
    localStorage.setItem('companyCustRewLoc1', CustRewLoc1);
    localStorage.setItem('companyCustRewDec1', CustRewDec1);
    localStorage.setItem('companyCustReview2', CustReview2);
    localStorage.setItem('companyCustRewLoc2', CustRewLoc2);
    localStorage.setItem('companyCustRewDec2', CustRewDec2);
    localStorage.setItem('companyCustReview3', CustReview3);
    localStorage.setItem('companyCustRewLoc3', CustRewLoc3);
    localStorage.setItem('companyCustRewDec3', CustRewDec3);



    //// INSTAGRAM URL JAVASCRIPT STARTING

    const instaUrl = document.getElementById('C-Insta').value;
    localStorage.setItem('companyInstaUrl', instaUrl);




    //// INSTAGRAM URL JAVASCRIPT ENDING




    //// FACEBOOK JAVASCRIPT STARTING

    const faceUrl = document.getElementById('C-Face').value;
    localStorage.setItem('companyFaceUrl', faceUrl);




    //// FACEBOOK URL JAVASCRIPT ENDING







    //// WHATSAPP JAVASCRIPT STARTING

    const whatsappNumber = document.getElementById('C-WPhone').value;
    localStorage.setItem('companyWhatsAppNumber', whatsappNumber);




    //// WHATSAPP URL JAVASCRIPT ENDING





}




//      MIN AND MAX INPUT FIELD FOE WHAT YOU DO  JAVASCRIPT

const inputField = document.getElementById('what-you-do');
const errorMsg = document.getElementById('errorMsg');
const minChars = 150; // Minimum number of characters required
const maxChars = 550; // Maximum number of characters allowed
const nextButton = document.getElementById('nextButton');

inputField.addEventListener('input', function() {
  const charCount = inputField.value.length;

  // Show/hide error message based on character count
  if (charCount < minChars) {
    errorMsg.textContent = `Minimum ${minChars} characters required`;
    errorMsg.style.display = 'block';
    nextButton.style.pointerEvents = 'none'; // Disable pointer events on the button
    nextButton.style.opacity = '0.5'; // Reduce opacity of the button
  } else if (charCount > maxChars) {
    errorMsg.textContent = `Maximum ${maxChars} characters allowed`;
    errorMsg.style.display = 'block';
    nextButton.style.pointerEvents = 'none'; // Disable pointer events on the button
    nextButton.style.opacity = '0.5'; // Reduce opacity of the button
  } else {
    errorMsg.style.display = 'none';
    nextButton.style.pointerEvents = 'auto'; // Enable pointer events on the button
    nextButton.style.opacity = '1'; // Restore opacity of the button
  }
});



//      MIN AND MAX INPUT FIELD FOE WHAT YOU DO  JAVASCRIPT END










const fileInput = document.getElementById('pImage');

fileInput.addEventListener('change', (event) => {
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageSrc = event.target.result;

    localStorage.setItem('companyCustProdImg', imageSrc);

    // Update the image source in home.html
    const pImageT = document.getElementById('pImageT');
    pImageT.src = imageSrc;
  };

  reader.readAsDataURL(event.target.files[0]);
});










/// REVIEW SECTION JAVASCRIPT STARTING




    ///REVIEW SECTION 1 

const fileInput1 = document.getElementById('Rew-ImageInput');

fileInput1.addEventListener('change', (event) => {
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageSrc = event.target.result;

    localStorage.setItem('companyCustProdImg', imageSrc);

    // Update the image source in home.html
    const pImageT = document.getElementById('Rew-Image1T');
    pImageT.src = imageSrc;
  };

  reader.readAsDataURL(event.target.files[0]);
});




/// REVIEW SECTION JAVASCRIPT END