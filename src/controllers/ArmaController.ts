import { Arma } from "../models/Arma";

export class ArmaController {
  private armas: Arma[];

  constructor() {
    this.armas = [];
  }

  public listarArmas(): Arma[] {
    return this.armas;
  }

  public listarArmasPorCategoria(categoria: string): Arma[] {
    return this.armas.filter((arma) =>
      arma.getCategoria().toLowerCase().includes(categoria.toLowerCase())
    );
  }

  public buscarPorCriterio(criterio: string): Arma[] {
    return this.armas.filter((arma) => arma.atendeCriterio(criterio));
  }
}