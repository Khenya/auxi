const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Materias',
      version: '1.0.0',
      description: 'API para gestionar materias',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Cambia la URL según tu entorno
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./src/routes/api.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;