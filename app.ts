import express from 'express';
import { Signale } from 'signale';
import { userRouter } from './src/usuarios/infrastructure/userRoutes';

const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas relacionadas con usuarios
app.use(userRouter);

const PORT = 8081;
const HOST = '0.0.0.0';  // Escuchar en todas las interfaces de red

app.listen(PORT, HOST, () => {
    signale.success(`Server online on port ${PORT}`);
});
