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
# Actualizacion.
## Parte 2: Tarea Automática Programada para Backup de Base de Datos
Este proyecto incluye una tarea automática programada que realiza una copia de seguridad de la base de datos MySQL cada día a las 12:00 PM.

## Archivos
backup.js: Contiene el script para realizar la copia de seguridad y la tarea programada.

## Instalación del Script de Backup
1. Instala las dependencias necesarias:
    npm install node-cron
    npm install mysql

2. Asegúrate de que tienes mysqldump instalado y disponible en tu PATH.

3. Configura los detalles de conexión a la base de datos en el archivo 'backup.js':
    const DB_HOST = 'localhost';
    const DB_USER = 'root';
    const DB_PASSWORD = 'administrador';
    const DB_NAME = 'prueba_tecnica';

## Ejecución del Script de Backup
Para ejecutar el script de backup y configurar la tarea programada, utiliza el siguiente comando:

    node backup.js

# Actualizacion.

## Parte 3: Desarrollo Web bajo Código PHP Nativo, HTML, CSS, JavaScript y WordPress

1. **Configurar el Entorno de PHP**:
    - Asegurarse de tener un servidor web (como Apache) y PHP configurados correctamente.
    - Colocar los archivos PHP en el directorio raíz del servidor web.

2. **Páginas Web**:
    - **Registro de Usuarios**: Acceder a `index.php` para registrar nuevos usuarios.
    - **Inicio de Sesión**: Acceder a `login.php` para iniciar sesión.
    - **Panel de Usuario**: Acceder a `dashboard.php` (solo accesible después de iniciar sesión).

3. **Cerrar Sesión**:
    - Hacer clic en el enlace "Cerrar Sesión" en `dashboard.php` para finalizar la sesión.

## Ejecución del Proyecto

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


### Contacto.
Para más información, contacta con Andres a través de jamendozad01@gmail.com.