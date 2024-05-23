<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="styles/style-home.css">
</head>
<body>
    <form id="loginForm" action="procesar_login.php" method="post">
        <h1>Iniciar Sesión</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" required>
        <button type="submit">Iniciar Sesión</button>
    </form>
</body>
</html>
