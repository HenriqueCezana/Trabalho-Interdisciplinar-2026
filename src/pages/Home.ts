export async function renderHome() {

    const response = await fetch("./json/home.json");

    const home = await response.json();

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
        <section class="hero">

            <div class="hero-text">

                <h1>${home.titulo}</h1>

                <h2>${home.subtitulo}</h2>

                <p>${home.descricao}</p>

               <a href="#/armas" class="btn-home">
    ${home.botao}
</a>

            </div>

            <img
                class="hero-image"
                src="${home.imagem}"
            >
                

        </section>
    `;

    const criaFooter = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<footer>
         <p>Página Desenvolvida para Aula de Front-End II </p>
     </footer>`
    return obj;

}



}