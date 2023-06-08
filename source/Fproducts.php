
    <div class="container productDetail" id="productDetailId">
      <div class="row mt-5 mb-5">
        <h1 class="main-heading text-center">Product Information</h1>
        <div class="form-step form-step-active col-md-7 mt-3">
          <div class="input-group">
            <label class="C-Prod"></label>
            <input type="text" name="C-Prod" id="C-Prod" placeholder="Product Name" required>
          </div>
          <div class="input-group">
            <label class="C-Prod-Dec"></label>
            <input type="text-area" name="C-Prod-Dec" id="C-Prod-Dec" placeholder="Product Description" required>
          </div>
          <div class="input-group">
            <label class="C-Prod-Price"></label>
            <input type="number" inputmode="numeric" name="C-Prod-Price" id="C-Prod-Price"
              placeholder="Price In Indian Rupee (ex.4500)" required>
          </div>
          <div class="input-group">
            <label for="pImage"></label>
            <input type="file" id="pImage" accept="image/*" required>
          </div>
        </div>
        <div class="right-1 col-md-5 pt-5">
          <div class="C-P-img">
            <label for="pImage">
              <img id="Pro-Image" src="../card tamplate/img/7309681.jpg" alt="">
            </label>
          </div>
        </div>
        <div class="btn-group mt-5 " id="proAddBtn">
          <a href="#" onclick="goToPreviousStep()" class="btn btn-prev width-50 ml-auto"><-- Previous</a>
              <a href="#" onclick="addNewPro()" class="btn btn-add width-50 ml-auto">Add+</a>
              <a href="#" class="btn btn-next width-50 ml-auto">Next -></a>
        </div>
        <div class="previous-details mt-3">
          <h3 id="PreviousHeading">Previous Details:</h3>
          <ul id="previousDetailsList" onclick="showPreviousDetail(event)"></ul>
        </div>
      </div>
    </div>

    <script>

      let previousDetails = [];
      let updateMode = false;
      let updateIndex = -1;

      async function addNewPro() {
        // console.log('addNewPro');

        // Get input values
        let productName = document.getElementById('C-Prod').value;
        let productDescription = document.getElementById('C-Prod-Dec').value;
        let productPrice = document.getElementById('C-Prod-Price').value;

        // Check if all fields are filled
        if (productName == '' || productDescription == '' || productPrice == '') {
          alert('Please fill all the input fields');
          return;
        }

        let imageFile = document.getElementById('pImage').files[0];
        if (!imageFile) {
          alert('Please select a product image');
          return;
        }

        const reader = new FileReader();

        reader.addEventListener('load', () => {
          const imageString = reader.result; // Convert src to string
          // console.log(imageString); // Display the string in the console or use it as needed
          let detail = { name: productName, description: productDescription, price: productPrice, image: imageString };

          if (updateMode) {
            // Update existing item
            previousDetails[updateIndex] = detail;
            updatePreviousDetailItem(updateIndex);
            updateMode = false;
            updateIndex = -1;
          } else {
            // Add new item
            previousDetails.push(detail);
            let previousDetailsList = document.getElementById('previousDetailsList');
            let listItem = document.createElement('li');
            listItem.textContent = productName; // Show only product name
            listItem.setAttribute('data-index', previousDetails.length - 1);
            previousDetailsList.appendChild(listItem);

            document.getElementById('C-Prod').value = "";
            document.getElementById('C-Prod-Dec').value = "";
            document.getElementById('C-Prod-Price').value = "";
            document.getElementById('Pro-Image').src = "../card tamplate/img/7309681.jpg"

            localStorage.setItem("AllProducts", JSON.stringify(previousDetails))
          }
        });

        reader.readAsDataURL(imageFile);

      }

      function imageToString() {
        document.getElementById('Pro-Image').addEventListener("change", function (event) {
          var file = event.target.files[0];
          var reader = new FileReader();

          reader.onload = function (e) {
            gImageElement.src = e.target.result;
          };

          if (file) {
            reader.readAsDataURL(file);
          }
        });
      }

      function updatePreviousDetailItem(index) {
        let previousDetailsList = document.getElementById('previousDetailsList');
        let listItem = previousDetailsList.querySelector(`li[data-index="${index}"]`);
        let detail = previousDetails[index];
        listItem.textContent = detail.name; // Update only the product name
      }

      function findProductIndex(productName) {
        for (let i = 0; i < previousDetails.length; i++) {
          if (previousDetails[i].name == productName) {
            return i;
          }
        }
        return -1;
      }

      function showPreviousDetail(event) {
        let index = event.target.getAttribute('data-index');
        if (index !== null) {
          let detail = previousDetails[index];
          document.getElementById('C-Prod').value = detail.name;
          document.getElementById('C-Prod-Dec').value = detail.description;
          document.getElementById('C-Prod-Price').value = detail.price;
          document.getElementById('Pro-Image').src = detail.image;
          document.getElementById('pImage').value = ''; // Reset image input value
          updateMode = true;
          updateIndex = index;
        }
      }

      function goToPreviousStep() {
        // Implement the logic to go to the previous step
        console.log('Go to previous step');
      }
    </script>
