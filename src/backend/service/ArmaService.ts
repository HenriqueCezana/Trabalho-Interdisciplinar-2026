import { Arma } from "../models/Arma";
import { ValorantApiService } from "./ApiService";
import { ArmaRepository } from "../repositorio/ArmaRepository";

export class ArmaService {
  public static async listar(): Promise<any[]> {
    return await ArmaRepository.listarArmas();
  }

  public static async importarDaApi(): Promise<Arma[]> {
    const armas = await ValorantApiService.buscarArmas();

    await ArmaRepository.salvarArmas(armas);

    return armas;
  }

  public static async buscarPorUuid(uuid: string): Promise<any> {

    return await ArmaRepository.buscarPorUuid(uuid);

  }
}