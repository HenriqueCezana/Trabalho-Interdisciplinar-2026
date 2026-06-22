import { Arma } from "./Arma.js";
import { Skin } from "./Skin.js";

export class ArmaDisparo extends Arma {
  private _capacidadePente: number;
  private _cadenciaTiro: number;

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
    this._capacidadePente = capacidadePente;
    this._cadenciaTiro = cadenciaTiro;
  }

  get capacidadePente(): number {
    return this._capacidadePente;
  }

  get cadenciaTiro(): number {
    return this._cadenciaTiro;
  }
}