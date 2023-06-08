<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | digital-card</title>

    <link rel="stylesheet" href="home.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
</head>

<body>

    <section class="home">
<?php
    include ("../source/TleftSection.php");


    ?>

        <div class="right">
            <div class="container pb-5 px-5">
                <h2 class="our-product">Our Products
                    <hr class="border border-primary border-3 opacity-75" style="width: 166px">
                </h2>
                <div class="row products mt-5" id="products-holder">

                    <!-- <div class="col-md-4">
                        <div class="product-details">
                            <div class="pro-up text-center px-3 py-3">
                                <img src="./img/logo.svg" alt="" height="150px" width="100%" id="pImageT">
                            </div>
                            <div class="pro-down">
                                <div class="pro-decs px-3 py-3">
                                    <h3 class="C-ProdT">Product 1</h3>
                                    <p class="C-Prod-DecT">Product Details</p>
                                    <h4 class="C-Prod-PriceT">1245</h4>

                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
        <?php
                 include ("../source/Treview.php");
                 include ("../source/Tgallery.php");
                 include ("../source/Tpayment.php");
                 include ("../source/Tdyc.php");
                 include ("../source/TvisitUs.php");

                ?>


            </div>


        </div>
        </div>

    </section>

    <?php
      include ("../source/Footer.php");
     ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="home.js"></script>

</body>

</html>