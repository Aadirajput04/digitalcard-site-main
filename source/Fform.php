<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail | Business-card</title>
  <link rel="stylesheet" href="form.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


</head>

<body>

  <form action="/card tamplate/home.html" class="form" method="post" autocomplete="off" id="myform">

    <?php
  include ("../source/Fbasic.php");
  include ("../source/Fcontact.php");
  include ("../source/Fproducts.php");
  include ("../source/Fgallery.php");
  include ("../source/Fpayment.php");
  include ("../source/Fdyc.php");
  include ("../source/Freview.php");
    ?>
  </form>




  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="form.js"></script>
</body>

</html>