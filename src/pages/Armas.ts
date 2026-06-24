import { controller } from "../app.js";

export function renderArmas() {

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

    atualizarLista(controller.listarArmas());

    document
        .getElementById("pesquisa")
        ?.addEventListener("input", pesquisar);

    document
        .getElementById("categoria")
        ?.addEventListener("change", categoria);

}

function pesquisar() {

    const texto =
        (document.getElementById("pesquisa") as HTMLInputElement).value;

    let armas = controller.pesquisarPorCriterio(texto);

    atualizarLista(armas as any[]);
}

function categoria() {

    const categoria =
        (document.getElementById("categoria") as HTMLSelectElement).value;

    console.log(categoria);

    let armas = controller.listarArmasPorCategoria(categoria);

    console.log(armas);

    atualizarLista(armas as any[]);
}

function atualizarLista(armas: any[]) {

    const lista = document.getElementById("listaArmas");

    if (!lista) return;

    lista.innerHTML = "";

armas.forEach((arma: any) => {

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



});
}
;

