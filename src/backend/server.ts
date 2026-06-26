import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { testConnection } from "./config/db";
import armasRoutes from "./routes/armas";
import { ValorantApiService } from "./service/ApiService";
import { ArmaRepository } from "./repositorio/ArmaRepository";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use("/armas", armasRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Valorant Weapons API",
  });
});

app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);

    res.status(500).json({
      message: "Erro interno no servidor.",
    });
  }
);

app.listen(PORT, async (): Promise<void> => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  try {
    await testConnection();

    console.log("Importando armas da API Valorant...");
    const armas = await ValorantApiService.buscarArmas();

    await ArmaRepository.salvarArmas(armas);

    console.log("Armas importadas para o banco com sucesso.");
  } catch (error) {
    console.error("Erro ao iniciar aplicação:", error);
  }
});