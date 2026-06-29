import { Arma } from "./Arma";
import { Skin } from "./Skin";

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

  public atendeCriterio(criterio: string): boolean{
    const busca = criterio.toLowerCase();

    return (
      super.nome.toLowerCase().includes(busca) ||
      super.descricao.toLowerCase().includes(busca) ||
      super.categoria.toLowerCase().includes(busca) ||
      this._alcance.toLowerCase().includes(busca)
    );
  }
}