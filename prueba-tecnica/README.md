# Prueba Técnica - Parte 1
## Gestión de Usuarios con Node.js y MySQL

## Descripción
Este proyecto implementa una interfaz simple en Node.js para gestionar una base de datos MySQL que almacena información de usuarios. Incluye operaciones básicas como la creación de una tabla, inserción de datos, y actualización y consulta de información.

## Requisitos

Para ejecutar este proyecto necesitas tener instalados los siguientes componentes en tu sistema:
- Node.js
- MySQL
- NPM (para manejar las dependencias de Node.js)

## Configuración inicial

### Base de Datos

Primero, asegúrate de que tu servidor MySQL esté corriendo y configura la base de datos siguiendo estos pasos:

1. Inicia sesión en MySQL:
   ```bash
   mysql -u root -p

2. Crea una nueva base de datos:
   ```sql
   CREATE DATABASE prueba_tecnica;
   USE prueba_tecnica;

3. Instalacion de dependencias:
    Este proyecto requiere el paquete 'mysql' de Node.js. Instálalo ejecutando:
    ```bash
    npm install mysql

## Estructura del Proyecto:

El proyecto consta de dos archivos principales:

db.js: Configura la conexión a la base de datos.
index.js: Contiene las funciones para interactuar con la base de datos (crear tabla, insertar datos, etc.).

## Configuración de la conexión

Asegúrate de actualizar los detalles de conexión en db.js con tus propios valores de acceso a la base de datos MySQL:

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'prueba_tecnica'
});

## Ejecución del proyecto
Para ejecutar el proyecto, simplemente corre el siguiente comando en la terminal en el directorio del proyecto:
    ```bash
    node index.js

## Funcionalidades implementadas:
Creación de la tabla usuarios: Crea una tabla si no existe.
Inserción de datos: Inserta datos iniciales en la tabla.
Obtención de nombres por email: Consulta nombres de usuario basados en su email.
Actualización de contraseñas por nombre: Actualiza la contraseña de un usuario basado en su nombre.

## Cierre de la base de datos.
El script maneja el cierre de la conexión a la base de datos cuando el proceso de Node.js termina:
    process.on('exit', () => {
    conexion.end();
});

### Contacto.
Para más información, contacta con Andres a través de jamendozad01@gmail.com.