import { Arma } from "../models/Arma";
import type { IPesquisavel } from "../models/IPesquisavel";

export class ArmaController {
    private armas: Arma[];

    constructor() {
        this.armas = [];
    }

    public criarArma(arma: Arma): void {
        this.armas.push(arma);
    }

    public listarArmas(): Arma[] {
        return this.armas;
    }

    public atualizarArma(uuid: string, novaArma: Arma): boolean {
        for (let i = 0; i < this.armas.length; i++) {
            const arma = this.armas[i];

            if (arma && arma.getUuid() === uuid) {
                this.armas[i] = novaArma;
                return true;
            }
        }

        return false;
    }

    public deletarArma(uuid: string): boolean {
        for (let i = 0; i < this.armas.length; i++) {
            const arma = this.armas[i];

            if (arma && arma.getUuid() === uuid) {
                this.armas.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    public listarArmasPorCategoria(categoria: string): Arma[] {
        return this.armas.filter((arma) =>
            arma.getCategoria().toLowerCase().includes(categoria.toLowerCase())
        );
    }

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        return this.armas.filter((arma) => arma.atendeCriterio(criterio));
    }
}