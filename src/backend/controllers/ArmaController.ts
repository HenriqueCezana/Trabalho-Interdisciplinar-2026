import { Arma } from "../models/Arma";
import type { IPesquisavel } from "../models/IPesquisavel";

export class ArmaController {
    private armas: Array<Arma>;

    constructor() {
        this.armas = new Array<Arma>();
    }

    public criarArma(arma: Arma): void {
        this.armas.push(arma);
    }

    public listarArmas(): Array<Arma> {
        return this.armas.slice();
    }

    public atualizarArma(uuid: string, novaArma: Arma): boolean {
        for (let i = 0; i < this.armas.length; i++) {
            const arma = this.armas[i];

            if (arma && arma.uuid === uuid) {
                this.armas[i] = novaArma;
                return true;
            }
        }

        return false;
    }

    public deletarArma(uuid: string): boolean {
        for (let i = 0; i < this.armas.length; i++) {
            const arma = this.armas[i];

            if (arma && arma.uuid === uuid) {
                this.armas.splice(i, 1);
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
        return this.armas.filter((arma) =>
            arma.categoria.toLowerCase().includes(categoria.toLowerCase())
        );
    }

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        return this.armas.filter((arma) => arma.atendeCriterio(criterio));
    }
}