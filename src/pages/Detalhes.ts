import { controller } from "../app.js";

export function renderDetalhes(uuid: string) {

    console.log("Detalhes:", uuid);

    const arma =
        controller
            .listarArmas()
            .find(a => a.uuid === uuid);

    console.log(arma);

    if (!arma) return;

    const app = document.getElementById("app");

    if (!app) return;

    let skinsHTML = "";

    arma.skins.forEach(skin => {

        skinsHTML += `
        <div class="skin-card">
            <img src="${skin.imagem}">
            <h4>${skin.nome}</h4>
        </div>
        `;
    });

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

            </div>

        </div>

        <h2>SKINS</h2>

        <div class="skins-grid">
            ${skinsHTML}
        </div>
    `;
}