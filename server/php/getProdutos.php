<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Max-Age: 86400");

require 'dbConnection.php';

$getProdutos = mysqli_query(
    $db_conn,
    "SELECT p.*, tp.descricao As categoria FROM Produto p JOIN Categoria tp ON p.idCategoria = tp.id"
);

if(mysqli_num_rows($getProdutos) > 0){
    $produtos = mysqli_fetch_all($getProdutos,MYSQLI_ASSOC);

    echo json_encode(["success"=>true,"produtos"=>$produtos]);
}
else{
    echo json_encode(["success"=>false]);
}