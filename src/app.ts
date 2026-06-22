import { ArmaController } from "./controllers/ArmaController.js";
import { ValorantApiService } from "./service/ApiService.js";

import { renderHome } from "./pages/Home.js";
import { renderArmas } from "./pages/Armas.js";
import { renderDetalhes } from "./pages/Detalhes.js";

export const controller = new ArmaController();

async function iniciar() {

    const armas = await ValorantApiService.buscarArmas();

    controller.guardarArmasApi(armas);

    renderHome();
}

(window as any).mostrarHome = () => {
    renderHome();
};

(window as any).mostrarArmas = () => {
    renderArmas();
};

(window as any).mostrarDetalhes = (uuid: string) => {
    renderDetalhes(uuid);
};

iniciar();