const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Datos simulados para proyectos
const proyectos = [
  { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del proyecto 1', url: 'https://mi-proyecto-1.com' },
  { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del proyecto 2', url: 'https://mi-proyecto-2.com' }
];

// Datos simulados para habilidades
const habilidades = [
  { id: 1, habilidad: 'Angular', nivel: 'Avanzado' },
  { id: 2, habilidad: 'JavaScript', nivel: 'Avanzado' }
];

// Endpoint para obtener proyectos
app.get('/proyectos', (req, res) => {
  res.json(proyectos);
});

// Endpoint para obtener habilidades
app.get('/habilidades', (req, res) => {
  res.json(habilidades);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
