const express = require('express');
const path = require('path');

const app = express();
const port = 1217;

// Servir archivos estáticos desde el directorio donde se clonó el proyecto
app.use(express.static(path.join(__dirname)));

// Ruta principal para servir el archivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

