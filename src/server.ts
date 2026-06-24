import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import pool from './config/db';
import * as productRoutesModule from './routes/armas';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;
const productRoutes = (productRoutesModule as any).default ?? (productRoutesModule as any).router ?? productRoutesModule;

// Middlewares
app.use(express.json());

// Rotas
app.use('/products', productRoutes);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Products API',
  });
});

// Tratamento global de erros
app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.error(err);

    res.status(500).json({
      message: 'Erro interno no servidor.',
    });
  }
);

app.listen(PORT, async (): Promise<void> => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  try {
    const connection = await pool.getConnection();
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  }
});