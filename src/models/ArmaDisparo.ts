import { Arma } from "./Arma";
import { Skin } from "./Skin";

export class ArmaDisparo extends Arma {
  private capacidadePente: number;
  private cadenciaTiro: number;

  constructor(
    uuid: string,
    nome: string,
    descricao: string,
    imagem: string,
    categoria: string,
    skins: Skin[],
    capacidadePente: number,
    cadenciaTiro: number
  ) {
    super(uuid, nome, descricao, imagem, categoria, skins);
    this.capacidadePente = capacidadePente;
    this.cadenciaTiro = cadenciaTiro;
  }

  public getCapacidadePente(): number {
    return this.capacidadePente;
  }

  public getCadenciaTiro(): number {
    return this.cadenciaTiro;
  }
}