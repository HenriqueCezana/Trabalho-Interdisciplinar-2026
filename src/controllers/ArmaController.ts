import { Arma } from "../models/Arma";
import type { IPesquisavel } from "../models/IPesquisavel";
import { ArmaBranca } from "../models/ArmaBranca";
import { ArmaDisparo } from "../models/ArmaDisparo";

export abstract class ArmaController {
    private armas: Arma[];

    constructor() {
        this.armas = [];
    }

    public static criarArma(uuid: string, displayName: string, weaponStats: string, displayIcon: string, categoryText: string, defaultSkinUuid: [], magazineSize: string, headDamage: string): void {   
        if(categoryText === "Heavy Weapons") {
          const arma = new ArmaBranca(uuid, displayName, weaponStats, displayIcon, categoryText, defaultSkinUuid, headDamage);
        } else {
          const arma = new ArmaDisparo(uuid, displayName, weaponStats, displayIcon, categoryText, defaultSkinUuid, magazineSize);
        }
        // adiciona a arma criada no vetor estático do controlador
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