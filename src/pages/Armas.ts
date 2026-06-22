import { controller } from "../app.js";

export function renderArmas() {

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
    <section>

        <h2>ARMAS</h2>

        <div class="filtros">

            <input
                type="text"
                id="pesquisa"
                placeholder="Pesquisar arma..."
            >

            <select id="categoria">
                <option value="">Todas Categorias</option>
                <option value="Rifle">Rifle</option>
                <option value="Pistola">Pistola</option>
                <option value="Sniper">Sniper</option>
            </select>

        </div>

        <div id="listaArmas" class="grid"></div>

    </section>
    `;

    atualizarLista(controller.listarArmas());

    document
        .getElementById("pesquisa")
        ?.addEventListener("input", pesquisar);

    document
        .getElementById("categoria")
        ?.addEventListener("change", pesquisar);
}

function pesquisar() {

    const texto =
        (document.getElementById("pesquisa") as HTMLInputElement).value;

    let armas = controller.pesquisarPorCriterio(texto);

    atualizarLista(armas as any[]);
}

function atualizarLista(armas: any[]) {

    const lista = document.getElementById("listaArmas");

    if (!lista) return;

    lista.innerHTML = "";

    armas.forEach((arma: any) => {

        lista.innerHTML += `
        <div
            class="card"
            onclick="mostrarDetalhes('${arma.uuid}')"
        >
            <img src="${arma.imagem}">
            <h3>${arma.nome}</h3>
            <p>${arma.categoria}</p>
        </div>
        `;
    });
}