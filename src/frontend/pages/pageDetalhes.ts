import { buscarArma } from "../service/frontService.js";

export async function renderDetalhes(uuid: string) {

    const arma = await buscarArma(uuid);

    if (!arma) return;

    const app = document.getElementById("app");

    if (!app) return;

    let skinsHTML = "";

    if (arma.skins) {

        for (let i = 0; i < arma.skins.length; i++) {

            const skin = arma.skins[i];

            skinsHTML += `
                <div class="skin-card">
                    <img src="${skin.imagem}">
                    <h4>${skin.nome}</h4>
                </div>
            `;
        }

    } else {

        skinsHTML = `
            <p>Esta arma não possui skins cadastradas.</p>
        `;

    }

    app.innerHTML = `
        <a href="#/armas" class="voltar">
            ← Voltar
        </a>

        <div class="detalhes">

            <img
                class="arma-detalhe"
                src="${arma.imagem}"
            >

            <div>

                <h1>${arma.nome}</h1>

                <p>${arma.descricao}</p>

                <p>
                    Categoria:
                    ${arma.categoria}
                </p>

                <a href="#/arma/${arma.uuid}/skins" class="btn-home">
                    Gerenciar Skins
                </a>
            </div>

        </div>

        <h2>SKINS</h2>

        <div class="skins-grid">
            ${skinsHTML}
        </div>
    `;
}