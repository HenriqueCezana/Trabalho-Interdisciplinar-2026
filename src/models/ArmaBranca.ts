import { Arma } from "./Arma";
import { Skin } from "./Skin";

export class ArmaBranca extends Arma {
  private alcance: string;

  constructor(uuid: string, nome: string, descricao: string, imagem: string, categoria: string, skins: Skin[], alcance: string) {
    super(uuid, nome, descricao, imagem, categoria, skins);
    this.alcance = alcance;
  }

  public getAlcance(): string {
    return this.alcance;
  }
}