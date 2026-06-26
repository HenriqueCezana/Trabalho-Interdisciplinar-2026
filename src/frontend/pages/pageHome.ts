export function renderHome() {

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
        <section class="hero">

            <div class="hero-text">

                <h1>VALORANT</h1>

                <h2>CONHEÇA AS ARMAS E DOMINE O CAMPO DE BATALHA</h2>

                <p>
                    Explore todas as armas, categorias e skins disponíveis.
                </p>

                <a href="#/armas" class="btn-home">
                    EXPLORAR ARMAS
                </a>

            </div>

            <img
                class="hero-image"
                src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"
            >

        </section>
    `;
}