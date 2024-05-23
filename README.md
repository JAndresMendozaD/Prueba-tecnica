# Proyecto de Prueba Técnica

## Descripción

Este proyecto contiene una aplicación web básica desarrollada con Node.js, MySQL y PHP. El objetivo es cumplir con los requisitos de una prueba técnica, hasta ahora consta de tres partes:

1. **Conexión a Base de Datos MySQL y Manejo de Funciones Directas a Base de Datos**: Crear y manipular una tabla de usuarios.
2. **Ejecutables Directos desde Servidor para Tareas Automáticas Programadas**: Realizar una copia de seguridad diaria de la base de datos.
3. **Desarrollo Web bajo Código PHP Nativo, HTML, CSS, JavaScript y WordPress**: Crear una aplicación web con registro, inicio de sesión y un panel de usuario.
4. **Conocimientos en Linux y MongoDB**: Conexión a MongoDB, creación de una colección y manipulación de documentos usando Node.js.

## Estructura del Proyecto

prueba-tecnica/
│
├── backup/
│ └── backups/ # Carpeta donde se almacenan los backups de la base de datos
│
├── styles/ # Carpeta para archivos CSS
│ ├── style-dashboard.css
│ └── style-home.css
│
├── img/ # Carpeta para imágenes
│ └── fondo-pixel.jpg
│
├── db.js # Script de conexión a la base de datos MySQL con Node.js
├── backup.js # Script de Node.js para realizar el backup de la base de datos
├── index.js # Script principal de Node.js para crear e insertar datos en la tabla de usuarios
├── db.php # Script PHP para la conexión a la base de datos MySQL
├── index.php # Página de registro de usuarios
├── procesar_registro.php # Script PHP para procesar el registro de usuarios
├── login.php # Página de inicio de sesión
├── procesar_login.php # Script PHP para procesar el inicio de sesión
├── dashboard.php # Página de panel de usuario
├── cerrar_sesion.php # Script PHP para cerrar sesión
├── mongo_script.js
└── README.md # Instrucciones del proyecto

## Instrucciones para Ejecutar el Proyecto

### Parte 1: Conexión a Base de Datos MySQL y Manejo de Funciones Directas a Base de Datos

1. **Configurar MySQL**:
    - Crear una base de datos llamada `prueba_tecnica`.
    - Configurar el usuario y contraseña de MySQL en el archivo `db.js`.

2. **Ejecutar Scripts de Node.js**:
    - Ejecutar `node index.js` para crear la tabla `usuarios` e insertar los datos iniciales.

### Parte 2: Ejecutables Directos desde Servidor para Tareas Automáticas Programadas

1. **Configurar el Cron Job**:
    - Instalar las dependencias ejecutando `npm install` en el directorio del proyecto.
    - Ejecutar `node backup.js` para programar la tarea automática que realizará el backup diario a las 9:30 PM.

### Parte 3: Desarrollo Web bajo Código PHP Nativo, HTML, CSS, JavaScript y WordPress

1. **Configurar el Entorno de PHP**:
    - Asegurarse de tener un servidor web (como Apache) y PHP configurados correctamente.
    - Colocar los archivos PHP en el directorio raíz del servidor web.

2. **Páginas Web**:
    - **Registro de Usuarios**: Acceder a `index.php` para registrar nuevos usuarios.
    - **Inicio de Sesión**: Acceder a `login.php` para iniciar sesión.
    - **Panel de Usuario**: Acceder a `dashboard.php` (solo accesible después de iniciar sesión).

3. **Cerrar Sesión**:
    - Hacer clic en el enlace "Cerrar Sesión" en `dashboard.php` para finalizar la sesión.

### Ejecución del Proyecto

1. **Clonar el Repositorio**:
    ```sh
    git clone https://github.com/JAndresMendozaD/Prueba-tecnica.git
    cd Prueba-tecnica
    ```

2. **Instalar Dependencias**:
    ```sh
    npm install
    ```

3. **Configurar Base de Datos**:
    - Actualizar las credenciales de MySQL en `db.js` y `db.php`.

4. **Ejecutar Scripts de Node.js**:
    ```sh
    node index.js
    node backup.js
    ```

5. **Configurar Servidor Web**:
    - Asegurarse de que los archivos PHP estén en el directorio raíz del servidor web.

6. **Acceder a la Aplicación**:
    - Registro: `http://localhost/index.php`
    - Inicio de Sesión: `http://localhost/login.php`
    - Panel de Usuario: `http://localhost/dashboard.php`

## Parte 4: Conocimientos en Linux y MongoDB

**Archivos Principales**
    - mongo_script.js: Script para conectar a MongoDB, crear la colección productos, insertar documentos y definir una función para obtener el precio de un producto.

**Configuración**
Instala MongoDB y asegúrate de que esté ejecutándose.
Instala las dependencias necesarias:
    ```sh
    npm install mongodb

**Ejecución**
Ejecuta el script mongo_script.js con Node.js:
    ```sh
    node mongo_script.js

## Contacto
Para más información, contacta con Andres a través de jamendozad01@gmail.com.