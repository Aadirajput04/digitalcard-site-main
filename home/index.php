<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="/home/imgs/Vector.svg" type="image/x-icon">
    <title>home | Digital-card</title>

</head>

<body>

<?php
include ("../source/Imain.php");
include ("../source/Isection1.php");
include ("../source/Iworking.php");
include ("../source/Ireview.php");
include ("../source/Ifects.php");
include ("../source/Footer.php");

?>


    <script>document.getElementById("fact").addEventListener("click", function () {
            var accordionContent = document.getElementsByClassName("accordion-content");
            for (var i = 0; i < accordionContent.length; i++) {
                if (accordionContent[i].style.display === "none") {
                    accordionContent[i].style.display = "block";
                } else {
                    accordionContent[i].style.display = "none";
                }
            }
        });
        document.getElementById("fact-1").addEventListener("click", function () {
            var accordionContent = document.getElementsByClassName("accordion-content");
            for (var i = 0; i < accordionContent.length; i++) {
                if (accordionContent[i].style.display === "none") {
                    accordionContent[i].style.display = "block";
                } else {
                    accordionContent[i].style.display = "none";
                }
            }
        });
        document.getElementById("fact-1").addEventListener("click", function () {
            var accordionContent = document.getElementsByClassName("accordion-content");
            for (var i = 0; i < accordionContent.length; i++) {
                if (accordionContent[i].style.display === "none") {
                    accordionContent[i].style.display = "block";
                } else {
                    accordionContent[i].style.display = "none";
                }
            }
        });
    </script>
</body>

</html>