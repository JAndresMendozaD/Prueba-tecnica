const cron = require('node-cron');
const { exec } = require ('child_process');
const fs = require('fs');
const path = require('path');

// configuracion de base de datos.

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASSWORD = 'administrador';
const DB_NAME = 'prueba_tecnica';
const BACKUP_DIR = path.join(__dirname, 'backups');

// Crear directorio si no existe

if (!fs.existsSync(BACKUP_DIR)){
    fs.mkdirSync(BACKUP_DIR);
}

// Crear copia de seguridad.

function hacerBackup() {

    //Genera un nombre de archivo para el backup con la fecha actual y contruye el comando 'mysqldump'.
    const filename = `${DB_NAME}-${new Date().toISOString().slice(0, 10)}.sql`;
    const filepath = path.join(BACKUP_DIR, filename);

    const dumpCommand = `mysqldump -h ${DB_HOST} -u ${DB_USER} -p${DB_PASSWORD} ${DB_NAME} > ${filepath}`;

    // Ejecuta el comando usando 'exec' de 'child_process'.
    exec(dumpCommand, (err, stdout, stderr) => {
        if (err) {
            console.error('Error al realizar el backup:', err);
            return;
        }
        if (stderr) {
            console.error('stderr:', stderr);
            return;
        }
        console.log(`Backup realizado correctamente en ${filepath}`);
    });
}

// Programar la tarea para que se ejecute todos los días a las 12:00 PM

cron.schedule('00 12 * * *', () => {
    console.log('Ejecutando tarea programada para realizar backup de la base de datos...');
    hacerBackup();
});
console.log('Tarea programada configurada para realizar backup diario a las 12:00 PM.');