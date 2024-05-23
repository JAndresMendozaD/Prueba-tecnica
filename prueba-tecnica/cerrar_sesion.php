<?php
// Iniciar sesión
session_start();

// Destruir todas las variables de sesión
session_destroy();

// Redireccionar a la página de inicio
header("Location: index.php");
?>
