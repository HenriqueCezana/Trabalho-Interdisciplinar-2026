import { Arma } from "./Arma";
import { Skin } from "./Skin";

export class ArmaDisparo extends Arma {
  private municao: string;

  constructor(uuid: string, nome: string, descricao: string, imagem: string, categoria: string, skins: Skin[], municao: string) {
    super(uuid, nome, descricao, imagem, categoria, skins);
    this.municao = municao;
  }

  public getMunicao(): string {
    return this.municao;
  }
}