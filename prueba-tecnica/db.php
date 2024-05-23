<?php
// Configuración de la conexión a la base de datos
$host = "localhost"; // Cambia "localhost" si tu base de datos está en otro servidor
$usuario = "root"; // Usuario de MySQL
$contraseña = "administrador"; // Cambia "administrador " por tu contraseña de MySQL
$base_de_datos = "prueba_tecnica"; // Nombre de la base de datos

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}
?>