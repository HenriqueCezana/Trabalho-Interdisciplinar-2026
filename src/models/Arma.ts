import type { IPesquisavel } from "./IPesquisavel";
import { Skin } from "./Skin";

export abstract class Arma implements IPesquisavel {
  private uuid: string;
  private nome: string;
  private descricao: string;
  private imagem: string;
  private categoria: string;
  private skins: Skin[];

  constructor(uuid: string, nome: string, descricao: string, imagem: string, categoria: string, skins: Skin[]) {
    this.uuid = uuid;
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.categoria = categoria;
    this.skins = skins;
  }

  public getUuid(): string {
    return this.uuid;
  }

  public getNome(): string {
    return this.nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getImagem(): string {
    return this.imagem;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public getSkins(): Skin[] {
    return this.skins;
  }

  public atendeCriterio(criterio: string): boolean {
    const busca = criterio.toLowerCase();

    return (
      this.nome.toLowerCase().includes(busca) ||
      this.descricao.toLowerCase().includes(busca) ||
      this.categoria.toLowerCase().includes(busca)
    );
  }
}