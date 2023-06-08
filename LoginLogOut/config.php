<?php


define('DB_SERVER','localhost');
define('DB_USERNAME','root');
define('DB_PASSWORD','');
define('DB_NAME','digitalcard');

////////////////////////////////TRY TO CONNECT WITH SERVER

$conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);


if($conn == false) {
    dir("error:Cannot connect to database");
}

?>