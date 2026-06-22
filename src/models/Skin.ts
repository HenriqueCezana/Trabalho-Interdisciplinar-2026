import type { IPesquisavel } from "./IPesquisavel.js";

export class Skin implements IPesquisavel {
  private _uuid: string;
  private _nome: string;
  private _imagem: string;

  constructor(uuid: string, nome: string, imagem: string) {
    this._uuid = uuid;
    this._nome = nome;
    this._imagem = imagem;
  }

  get uuid(): string {
    return this._uuid;
  }

  get nome(): string {
    return this._nome;
  }

  get imagem(): string {
    return this._imagem;
  }

  atendeCriterio(criterio: string): boolean {
    return this._nome.toLowerCase().includes(criterio.toLowerCase());
  }
}