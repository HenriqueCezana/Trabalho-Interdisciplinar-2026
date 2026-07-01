import { Request, Response } from "express";
import { SkinService } from "../service/SkinService";

export class SkinController {
  public static async index(req: Request, res: Response): Promise<void> {
    try {
      const skins = await SkinService.listar();
      res.json(skins);
    } catch (erro) {
      console.error("Erro ao listar skins:", erro);
      res.status(500).json({ message: "Erro ao listar skins." });
    }
  }

  public static async buscarPorUuid(req: Request, res: Response): Promise<void> {
    try {
      const uuid = req.params.uuid;

      if (!uuid || Array.isArray(uuid)) {
        res.status(400).json({ message: "UUID inválido." });
        return;
      }

      const skin = await SkinService.buscarPorUuid(uuid);

      if (!skin) {
        res.status(404).json({ message: "Skin não encontrada." });
        return;
      }

      res.json(skin);
    } catch (erro) {
      console.error("Erro ao buscar skin:", erro);
      res.status(500).json({ message: "Erro ao buscar skin." });
    }
  }

  public static async criar(req: Request, res: Response): Promise<void> {
    try {
      await SkinService.criar(req.body);

      res.status(201).json({
        message: "Skin criada com sucesso."
      });
    } catch (erro) {
      console.error("Erro ao criar skin:", erro);
      res.status(500).json({ message: "Erro ao criar skin." });
    }
  }

  public static async atualizar(req: Request, res: Response): Promise<void> {
    try {
      const uuid = req.params.uuid;

      if (!uuid || Array.isArray(uuid)) {
        res.status(400).json({ message: "UUID inválido." });
        return;
      }

      const atualizou = await SkinService.atualizar(uuid, req.body);

      if (!atualizou) {
        res.status(404).json({ message: "Skin não encontrada." });
        return;
      }

      res.json({
        message: "Skin atualizada com sucesso."
      });
    } catch (erro) {
      console.error("Erro ao atualizar skin:", erro);
      res.status(500).json({ message: "Erro ao atualizar skin." });
    }
  }

  public static async deletar(req: Request, res: Response): Promise<void> {
    try {
      const uuid = req.params.uuid;

      if (!uuid || Array.isArray(uuid)) {
        res.status(400).json({ message: "UUID inválido." });
        return;
      }

      const deletou = await SkinService.deletar(uuid);

      if (!deletou) {
        res.status(404).json({ message: "Skin não encontrada." });
        return;
      }

      res.json({
        message: "Skin deletada com sucesso."
      });
    } catch (erro) {
      console.error("Erro ao deletar skin:", erro);
      res.status(500).json({ message: "Erro ao deletar skin." });
    }
  }
}