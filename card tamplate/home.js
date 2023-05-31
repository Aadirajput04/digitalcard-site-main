
// //--------------------------------------------------------- last images hide when reach foote



// window.addEventListener("scroll", function() {
//     var footer = document.querySelector("footer");
//     var footerPosition = footer.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;
//     var img = document.querySelector(".r34");
//     var img = document.querySelector(".r35"); // Replace "image-class" with the actual class name of the image

//     if (footerPosition < windowHeight) {
//       // Footer is visible in the viewport
//       img.style.display = "none";
//     } else {
//       // Footer is not visible in the viewport
//       img.style.display = "block";
//     }
//   });





// // -------------------------------------------------------------------  padding from bottom



window.addEventListener("scroll", function () {
  var footer = document.querySelector("footer");
  var footerPosition = footer.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var elementsAboveFooter = document.querySelectorAll(".home"); // Replace with the appropriate selector for the elements above the footer

  if (footerPosition < windowHeight) {
    // Footer is visible in the viewport
    elementsAboveFooter.forEach(function (element) {
      element.style.paddingBottom = " 80px";
    });
  } else {
    // Footer is not visible in the viewport
    elementsAboveFooter.forEach(function (element) {
      element.style.paddingBottom = "0";
    });
  }
});
























//data featch javascript================================================



window.addEventListener("load", () => {
  const name = localStorage.getItem("companyName");
  const wyd = localStorage.getItem("companyWyd");
  const logo = localStorage.getItem("companyLogo");
  const Add = localStorage.getItem("companyAdd");
  const Phone = localStorage.getItem("companyPhone");
  const Email = localStorage.getItem("companyEmail");

  //// INSTAGRAME URL JAVASCRIPT STARTING=================================

  const instaUrl = localStorage.getItem("companyInstaUrl");
  const instaLink = document.getElementById("C-InstaT");
  instaLink.href = instaUrl;


  /////INSTAGRAME URL JAVASCRIPT ENDING ===================================


  //// FACEBOOK URL JAVASCRIPT STARTING=================================

  const faceUrl = localStorage.getItem("companyFaceUrl");
  const faceLink = document.getElementById("C-FaceT");
  faceLink.href = faceUrl;


  /////FACEBOOK URL JAVASCRIPT ENDING ===================================




  document.getElementById("C-NameT").innerHTML = name;
  document.getElementById("what-you-doT").innerHTML = wyd;
  document.getElementById("userImageT").src = logo;
  document.getElementById("C-AddT").innerHTML = Add;
  document.getElementById("C-PhoneT").innerHTML = Phone;
  document.getElementById("C-EmailT").innerHTML = Email;

})




