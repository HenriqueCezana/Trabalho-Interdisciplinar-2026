import { SkinRepository } from "../repositorio/SkinRepository";

export class SkinService {
  public static async listar(): Promise<any[]> {
    return await SkinRepository.listar();
  }

  public static async buscarPorUuid(uuid: string): Promise<any> {
    return await SkinRepository.buscarPorUuid(uuid);
  }

  public static async criar(dados: any): Promise<void> {
    await SkinRepository.criar(dados);
  }

  public static async atualizar(uuid: string, dados: any): Promise<boolean> {
    return await SkinRepository.atualizar(uuid, dados);
  }

  public static async deletar(uuid: string): Promise<boolean> {
    return await SkinRepository.deletar(uuid);
  }
}