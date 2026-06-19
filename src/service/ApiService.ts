import { ArmaController } from "../controllers/ArmaController";

export async function fetchApi(): Promise<any> {
    const resposta = await fetch("https://valorant-api.com/v1/weapons");
    const dados = await resposta.json();

    dados.data.forEach((arma: any) => {
            ArmaController.criarArma(arma.uuid, arma.displayName, arma.weaponStats, arma.displayIcon, arma.shopData.categoryText, arma.defaultSkinUuid, arma.weaponStats.magazineSize,  arma.damageRanges.headDamage);
    });
    return dados.data;
}