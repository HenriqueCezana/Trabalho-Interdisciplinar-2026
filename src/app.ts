import { ArmaController } from "./controllers/ArmaController.js";
import { ValorantApiService } from "./service/ApiService.js";

import { renderHome } from "./pages/Home.js";
import { renderArmas } from "./pages/Armas.js";
import { renderDetalhes } from "./pages/Detalhes.js";

export const controller = new ArmaController();

const app = document.getElementById("app");

const rotas: any = {
    "/": {
        renderizar: () => {
            renderHome();
        }
    },

    "/armas": {
        renderizar: () => {
            renderArmas();
        }
    }
};

function renderizarRotas() {

    const path = window.location.hash.slice(1) || "/";
    console.log("Rota atual:", path);   

    if (!app) return;

    app.innerHTML = "";

    const partes = path.split("/");
    if (partes[1] === "arma") {

        console.log("UUID:", partes[2]);

        const uuid = partes[2];

        renderDetalhes(uuid);

        return;
    }

    if (rotas[path]) {

        rotas[path].renderizar();

    } else {

        app.innerHTML = `
            <h1>404</h1>
            <p>Página não encontrada</p>
        `;
    }
}


window.addEventListener("hashchange", renderizarRotas);

async function iniciar() {

    const armas = await ValorantApiService.buscarArmas();

    controller.guardarArmasApi(armas);

    renderizarRotas();
}

iniciar();