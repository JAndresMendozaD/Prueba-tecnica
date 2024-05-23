<?php
// Conexión a la base de datos
require_once('db.php');

// Iniciar sesión
session_start();

// Recibir datos del formulario de inicio de sesión
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];

// Verificar credenciales en la base de datos
$verificarUsuario = "SELECT * FROM usuarios WHERE email='$email' AND contraseña='$contraseña'";
$resultado = mysqli_query($conexion, $verificarUsuario);

// Redireccionar después del inicio de sesión
if (mysqli_num_rows($resultado) == 1) {
    $_SESSION['email'] = $email;
    header("Location: dashboard.php");
} else {
    echo "Credenciales inválidas. <a href='login.php'>Intenta de nuevo</a>";
}

// Cerrar conexión
mysqli_close($conexion);
?>
