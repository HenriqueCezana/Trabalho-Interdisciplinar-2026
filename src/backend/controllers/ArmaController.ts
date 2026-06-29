import { Arma } from "../models/Arma";
import type { IPesquisavel } from "../models/IPesquisavel";

export class ArmaController {
    private arrArmas: Array<Arma>;

    constructor() {
        this.arrArmas = new Array<Arma>();
    }

    public criarArma(arma: Arma): void {
        this.arrArmas.push(arma);
    }

    public listarArmas(): Array<Arma> {
        return this.arrArmas.slice();
    }

    public atualizarArma(uuid: string, novaArma: Arma): boolean {
        for (let i = 0; i < this.arrArmas.length; i++) {
            const arma = this.arrArmas[i];

            if (arma && arma.uuid === uuid) {
                this.arrArmas[i] = novaArma;
                return true;
            }
        }

        return false;
    }

    public deletarArma(uuid: string): boolean {
        for (let i = 0; i < this.arrArmas.length; i++) {
            const arma = this.arrArmas[i];

            if (arma && arma.uuid === uuid) {
                this.arrArmas.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    public guardarArmasApi(armas: Array<Arma>): void {
        for (let i = 0; i < armas.length; i++) {
            const arma = armas[i];

            if (arma) {
                this.criarArma(arma);
            }
        }
    }

    public listarArmasPorCategoria(categoria: string): Array<Arma> {
        return this.arrArmas.filter((arma) =>
            arma.categoria.toLowerCase().includes(categoria.toLowerCase())
        );
    }

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        return this.arrArmas.filter((arma) => arma.atendeCriterio(criterio));
    }
}