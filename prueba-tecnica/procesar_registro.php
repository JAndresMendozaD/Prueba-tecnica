<?php
// Conexión a la base de datos
require_once('db.php');

// Recibir datos del formulario de registro
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];

// Insertar usuario en la base de datos
$insertarUsuario = "INSERT INTO usuarios (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";
$resultado = mysqli_query($conexion, $insertarUsuario);

// Redireccionar después del registro
if ($resultado) {
    header("Location: login.php");
} else {
    echo "Error al registrar usuario: " . mysqli_error($conexion);
}

// Cerrar conexión
mysqli_close($conexion);
?>