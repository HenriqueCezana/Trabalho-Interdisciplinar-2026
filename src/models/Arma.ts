import type { IPesquisavel } from "./IPesquisavel";
import { Skin } from "./Skin";

export abstract class Arma implements IPesquisavel {
  private _uuid: string;
  private _nome: string;
  private _descricao: string;
  private _imagem: string;
  private _categoria: string;
  private _skins: Skin[];

  constructor(
    uuid: string,
    nome: string,
    descricao: string,
    imagem: string,
    categoria: string,
    skins: Skin[]
  ) {
    this._uuid = uuid;
    this._nome = nome;
    this._descricao = descricao;
    this._imagem = imagem;
    this._categoria = categoria;
    this._skins = skins;
  }

  get uuid(): string {
    return this._uuid;
  }

  get nome(): string {
    return this._nome;
  }

  get descricao(): string {
    return this._descricao;
  }

  get imagem(): string {
    return this._imagem;
  }

  get categoria(): string {
    return this._categoria;
  }

  get skins(): Skin[] {
    return this._skins.slice();
  }

  atendeCriterio(criterio: string): boolean {
    const busca = criterio.toLowerCase();

    return (
      this._nome.toLowerCase().includes(busca) ||
      this._descricao.toLowerCase().includes(busca) ||
      this._categoria.toLowerCase().includes(busca)
    );
  }
}