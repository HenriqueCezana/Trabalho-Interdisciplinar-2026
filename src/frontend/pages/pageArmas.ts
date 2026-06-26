import { listarArmas } from "../service/frontService.js";

export async function renderArmas() {

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
    <section>

        <div class="armas-header">
            <h2>ARMAS</h2>
        </div>

        <div class="filtros">

            <input
                type="text"
                id="pesquisa"
                placeholder="Pesquisar arma..."
            >

            <select id="categoria">
                <option value="">Todas Categorias</option>
                <option value="Rifle">Rifle</option>
                <option value="Sidearm">Sidearm</option>
                <option value="Sniper">Sniper</option>
                <option value="SMG">SMG</option>
                <option value="Shotgun">Shotgun</option>
                <option value="Heavy">Heavy</option>
                <option value="Melee">Melee</option>
            </select>

        </div>

        <div id="listaArmas" class="grid"></div>

    </section>
    `;

    const armas = await listarArmas();

    atualizarLista(armas);

    document
        .getElementById("pesquisa")
        ?.addEventListener("input", () => pesquisar(armas));

    document
        .getElementById("categoria")
        ?.addEventListener("change", () => categoria(armas));

}

function pesquisar(armas: any[]) {

    const texto =
        (document.getElementById("pesquisa") as HTMLInputElement)
            .value
            .toLowerCase();

    const resultado = armas.filter((arma) =>
        arma.nome.toLowerCase().includes(texto)
    );

    atualizarLista(resultado);

}

function categoria(armas: any[]) {

    const categoriaSelecionada =
        (document.getElementById("categoria") as HTMLSelectElement)
            .value
            .toLowerCase();

    if (categoriaSelecionada === "") {

        atualizarLista(armas);

        return;

    }

    const resultado = armas.filter((arma) =>
        arma.categoria.toLowerCase().includes(categoriaSelecionada)
    );

    atualizarLista(resultado);

}

function atualizarLista(armas: any[]) {

    const lista = document.getElementById("listaArmas");

    if (!lista) return;

    lista.innerHTML = "";

    for (let i = 0; i < armas.length; i++) {

        const arma = armas[i];

        lista.innerHTML += `
            <a
                href="#/arma/${arma.uuid}"
                class="card"
            >

                <img src="${arma.imagem}">

                <h3>${arma.nome}</h3>

                <p>${arma.categoria}</p>

            </a>
        `;
    }
}