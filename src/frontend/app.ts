import { renderHome } from "./pages/pageHome.js";
import { renderArmas } from "./pages/pageArmas.js";
import { renderDetalhes } from "./pages/pageDetalhes.js";


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

    if (!app) return;

    app.innerHTML = "";

    const partes = path.split("/");
    if (partes[1] === "arma") {

        const uuid = partes[2];

        if (uuid) {
            renderDetalhes(uuid);
        }

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
    renderizarRotas();
}

iniciar();