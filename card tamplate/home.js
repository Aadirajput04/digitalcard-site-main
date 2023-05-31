
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



window.addEventListener("scroll", function() {
  var footer = document.querySelector("footer");
  var footerPosition = footer.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var elementsAboveFooter = document.querySelectorAll(".home"); // Replace with the appropriate selector for the elements above the footer

  if (footerPosition < windowHeight) {
    // Footer is visible in the viewport
    elementsAboveFooter.forEach(function(element) {
      element.style.paddingBottom = " 80px";
    });
  } else {
    // Footer is not visible in the viewport
    elementsAboveFooter.forEach(function(element) {
      element.style.paddingBottom = "0";
    });
  }
});
























//data featch javascript================================================



window.addEventListener("load", ()=>{
  const name = localStorage.getItem("companyName");
  const wyd = localStorage.getItem("companyWyd");
  const logo = localStorage.getItem("companyLogo");
  const Add = localStorage.getItem("companyAdd");






  document.getElementById("C-NameT").innerHTML = name;
  document.getElementById("what-you-doT").innerHTML = wyd;
  document.getElementById("userImageT").src = logo;
  document.getElementById("C-AddT").innerHTML = Add;
})


