import { Arma } from "../models/Arma.js";
import { ArmaBranca } from "../models/ArmaBranca.js";
import { ArmaDisparo } from "../models/ArmaDisparo.js";
import { Skin } from "../models/Skin.js";

export class ValorantApiService {

  public static async buscarArmas(): Promise<Arma[]> {

    try {
      const response = await fetch(
        "https://valorant-api.com/v1/weapons?language=pt-BR"
      );

      if (!response.ok) {
        throw new Error(
          `Valorant API: status HTTP ${response.status}`
        );
      }

      const dados = await response.json();
      const vetArmas: Arma[] = [];

      for (let i = 0; i < dados.data.length; i++) {
        const item = dados.data[i];
        const vetSkins: Skin[] = [];

        for (let j = 0; j < item.skins.length; j++) {
          vetSkins.push(
            new Skin(
              item.skins[j].uuid,
              item.skins[j].displayName,
              item.skins[j].displayIcon ?? ""
            )
          );
        }
        if (item.weaponStats !== null) {
          vetArmas.push(
            new ArmaDisparo(
              item.uuid,
              item.displayName,
              item.shopData?.categoryText ?? item.category,
              item.displayIcon ?? "",
              item.category,
              vetSkins,
              item.weaponStats.magazineSize,
              item.weaponStats.fireRate
            )
          );
        } else {
          vetArmas.push(
            new ArmaBranca(
              item.uuid,
              item.displayName,
              "Arma corpo a corpo",
              item.displayIcon ?? "",
              item.category,
              vetSkins,
              "Curto"
            )
          );
        }
      }
      return vetArmas;

    } catch (erro) {
      throw new Error(
        `Erro ao buscar armas do Valorant: ${erro}`
      );
    }
  }
}