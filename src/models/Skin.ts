import { IPesquisavel } from "./IPesquisavel";

export class Skin implements IPesquisavel {
  private uuid: string;
  private nome: string;
  private imagem: string;

  constructor(uuid: string, nome: string, imagem: string) {
    this.uuid = uuid;
    this.nome = nome;
    this.imagem = imagem;
  }

  public getUuid(): string {
    return this.uuid;
  }

  public getNome(): string {
    return this.nome;
  }

  public getImagem(): string {
    return this.imagem;
  }

  public atendeCriterio(criterio: string): boolean {
    return this.nome.toLowerCase().includes(criterio.toLowerCase());
  }
}