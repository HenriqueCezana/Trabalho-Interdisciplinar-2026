import { Request, Response } from "express";
import { ValorantApiService } from "../service/ApiService";
import { ArmaRepository } from "../repositorio/ArmaRepository";

export class dbController {
  public static async index(req: Request, res: Response): Promise<void> {
    try {
      const armas = await ArmaRepository.listarArmas();
      res.json(armas);
    } catch (erro) {
      console.error("Erro ao listar armas:", erro);
      res.status(500).json({ message: "Erro ao listar armas." });
    }
  }

  public static async importarApi(req: Request, res: Response): Promise<void> {
    try {
      const armas = await ValorantApiService.buscarArmas();

      await ArmaRepository.salvarArmas(armas);

      res.json({
        message: "Armas importadas com sucesso.",
        total: armas.length,
      });
    } catch (erro) {
      console.error("Erro ao importar armas da API:", erro);
      res.status(500).json({ message: "Erro ao importar armas da API." });
    }
  }
}