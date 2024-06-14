<?php
$conexion = new mysqli("localhost", "root", "", "grm2");
  $conexion->set_charset('utf8');

   if($conexion-> connect_error){
    echo "Error en la conexion: ".$conexion->connect_error;
     exit;

}
