<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Max-Age: 86400");

$string = file_get_contents("./produtos.json");
$json = json_decode($string, true);

echo json_encode(["success"=>true,"produtos"=>$json]);