# Inge-Web

## Frontend 'earthbnb-react'
*Nota: previamente se debe haber instalado NodeJs, y la extensión de React en Visual Code.*
1. Abrir el CMD e ir al directorio donde se desarrolla el proyecto.
2. Ejecutar el comando: `npx create-react-app earthbnb-react`, y esperar a que la carpeta earthbnb-rect se termine de generar.
3. En earthbnb-react, ejecutar `npm start`. Lo que permite que el servidor en localhost inicie.
4. Comenzar a desarrollar.

## Backend 'earthbnb-backend'
1. Crear la carpeta *earthbnb-backend*.
2. Ejecutar, en el CMD, el comando: `npm init -y`. Con ello, se genera un archivo `package.json`.
3. *Instalar dependecias necesarias* con los siguientes comandos:
       Para el servidor, rutas y solicitudes: `npm install express`.
       Para la base de datos: `npm install mongoose`.
       Para manejar variables en el entorno de MongoDB: `npm install dotenv`.
       Para reiniciar automáticamente: `npm install --save-dev nodemon`.
4. Crear las siguientes carpetas y archivos, para completar el esquema.

earthbnb-backend/
├── config/
│   └── db.js           # Configuración de conexión a MongoDB
├── models/
│   └── User.js         # Modelo de usuario
├── routes/
│   └── userRoutes.js   # Rutas relacionadas con usuarios
├── controllers/
│   └── userController.js # Lógica para manejar solicitudes
├── .env                # Variables de entorno (URI de MongoDB, puerto)
├── index.js            # Punto de entrada del servidor
├── package.json        # Configuración del proyecto

