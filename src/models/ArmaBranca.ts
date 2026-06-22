import { Arma } from "./Arma.js";
import { Skin } from "./Skin.js";

export class ArmaBranca extends Arma {
  private _alcance: string;

  constructor(
    uuid: string,
    nome: string,
    descricao: string,
    imagem: string,
    categoria: string,
    skins: Skin[],
    alcance: string
  ) {
    super(uuid, nome, descricao, imagem, categoria, skins);
    this._alcance = alcance;
  }

  get alcance(): string {
    return this._alcance;
  }
}