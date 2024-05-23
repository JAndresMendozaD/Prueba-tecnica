<?php
// Iniciar sesión
session_start();

// Verificar si el usuario está autenticado
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

// Obtener nombre de usuario
$email = $_SESSION['email'];
require_once('db.php');
$obtenerNombreUsuario = "SELECT nombre FROM usuarios WHERE email='$email'";
$resultado = mysqli_query($conexion, $obtenerNombreUsuario);
$usuario = mysqli_fetch_assoc($resultado);
$nombreUsuario = $usuario['nombre'];

// Cerrar conexión
mysqli_close($conexion);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles/style-dashboard.css">
</head>
<body>
    <h1>Bienvenido, <?php echo $nombreUsuario; ?>!</h1>
    <footer>
        <p><a href="cerrar_sesion.php">Cerrar Sesión</a></p>
    </footer>
</body>
</html>
