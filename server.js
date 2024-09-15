const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth'); // Importa el router de autenticación
const userRoutes = require('./routes/usuario'); // Importa el router de usuarios
const agencyRoutes = require('./routes/agencia'); //Importa el router de agencias
const areaRoutes = require('./routes/area');
const departamentoRoutes = require('./routes/departamento');
const puestoRoutes = require('./routes/puesto');
const equipoRoutes = require('./routes/equipo');

// Habilitar CORS
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test-connection', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send('Conexión establecida correctamente.');
  } catch (error) {
    res.status(500).send('No ha sido posible conectarse a la BD: ' + error.message);
  }
});

// Usa el router de autenticación
app.use('/auth', authRoutes);
app.use('/usuarios', userRoutes);
app.use('/agencias', agencyRoutes);
app.use('/areas', areaRoutes);
app.use('/departamentos', departamentoRoutes);
app.use('/puestos', puestoRoutes);
app.use('/equipo',equipoRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
