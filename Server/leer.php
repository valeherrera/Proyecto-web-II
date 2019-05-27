<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



      $conn_string = "host=localhost port=5432 dbname=proyectoWeb2 user=postgres password=12345";
      $dbconn = pg_connect($conn_string) or die("Error to connection with the database");
      
      $query = "select * from usuarios";
      $result = pg_query($dbconn, $query) or die("Error of insertion");

      echo json_encode($row = pg_fetch_all($result));
?>