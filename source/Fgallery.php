<div class="container">
      <div class="row mt-5 mb-5">
        <h1 class="main-heading text-center">Add Gallery Photos</h1>

        <div class="right col-md-12 pt-5">
          <div class="C-G-img">
            <label class="Gallery-Image" for="gImage">
              <img id="G-Image" src="../card tamplate/img/7309681.jpg" alt="" style="width: 200px; height: 200px;">
            </label>
            <input type="file" id="gImage" accept="image/*">
          </div>
        </div>

        <div class="btn-group mt-5">
          <a href="#" class="btn btn-prev width-50 ml-auto"><--Previous </a>
              <a onclick="addNewImage(event)" class="btn btn-add width-50 ml-auto">Add+</a>
              <a href="#" class="btn btn-next width-50 ml-auto">Next -></a>
        </div>

        <div id="galleryContainer" class="mt-5">
          <!-- Existing images will be displayed here -->
        </div>
      </div>
    </div>
    <script>


      // nitesh - saving all image url as string in the below array
      let allGalleryUrls = []

      function addNewImage(event) {
        event.preventDefault();

        let input = document.getElementById('gImage');
        let files = input.files;

        // Check if files are selected
        if (files && files.length > 0) {
          let galleryContainer = document.getElementById('galleryContainer');

          // Loop through each selected file
          for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();

            reader.onload = function (e) {
              let image = document.createElement('img');

              // nitesh - add new image url in array
              allGalleryUrls.push(e.target.result)

              image.src = e.target.result;
              image.style.width = '100px';
              image.style.height = '100px';
              image.style.marginRight = '10px'; // Add a margin-right to create a gap between images

              // Check if the image already exists in the gallery
              if (!isImageAlreadyAdded(image.src)) {
                galleryContainer.appendChild(image);
              } else {
                alert('The selected image is already added.');
              }
            };

            reader.readAsDataURL(files[i]);
          }
        } else {
          // Display an error message or perform any other action when no image is selected
          alert('Please select one or more images to add.');
        }
      }

      function isImageAlreadyAdded(src) {
        let images = document.querySelectorAll('#galleryContainer img');

        for (let i = 0; i < images.length; i++) {
          if (images[i].src === src) {
            return true;
          }
        }

        return false;
      }
    </script>
