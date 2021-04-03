<?php 
$_POST = json_decode(file_get_contents("php://input"), true); // Для получения JSON данных 
echo var_dump($_POST);

