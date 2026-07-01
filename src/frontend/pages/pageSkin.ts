import { buscarArma, criarSkin, atualizarSkin, deletarSkin } from "../service/frontService.js";

export async function renderSkins(uuidArma: string) {

    const app = document.getElementById("app");

    if (!app) return;

    const arma = await buscarArma(uuidArma);

    if (!arma) {
        app.innerHTML = `
            <h2>Arma não encontrada.</h2>
            <a href="#/armas" class="voltar">← Voltar</a>
        `;
        return;
    }

    let skinsHTML = "";

    if (arma.skins && arma.skins.length > 0) {

        for (let i = 0; i < arma.skins.length; i++) {

            const skin = arma.skins[i];

            skinsHTML += `
                <div class="skin-card">
                    <img src="${skin.imagem}">
                    <h4>${skin.nome}</h4>

                    <button class="btn-editar"
                        data-uuid="${skin.uuid}"
                        data-nome="${skin.nome}"
                        data-imagem="${skin.imagem}">
                        Editar
                    </button>

                    <button class="btn-excluir"
                        data-uuid="${skin.uuid}">
                        Excluir
                    </button>
                </div>
            `;
        }

    } else {

        skinsHTML = `<p>Nenhuma skin cadastrada.</p>`;

    }

    app.innerHTML = `
        <a href="#/arma/${arma.uuid}" class="voltar">
            ← Voltar
        </a>

        <section class="detalhes">

            <img class="arma-detalhe" src="${arma.imagem}">

            <div>
                <h1>Gerenciar Skins</h1>
                <h2>${arma.nome}</h2>
                <p>Crie, edite ou exclua skins desta arma.</p>
            </div>

        </section>

        <section class="form-skin">

            <h2 id="tituloFormulario">Nova Skin</h2>

            <input type="hidden" id="uuidSkinEdicao">

            <input
                type="text"
                id="nomeSkin"
                placeholder="Nome da skin"
            >

            <input
                type="text"
                id="imagemSkin"
                placeholder="URL da imagem"
            >

            <button id="btnSalvarSkin" class="btn-home">
                Salvar Skin
            </button>

            <button id="btnCancelarEdicao" class="voltar" style="display:none;">
                Cancelar
            </button>

        </section>

        <h2>SKINS CADASTRADAS</h2>

        <div class="skins-grid">
            ${skinsHTML}
        </div>
    `;

    configurarEventos(uuidArma);
}

function configurarEventos(uuidArma: string) {

    const btnSalvar = document.getElementById("btnSalvarSkin");

    btnSalvar?.addEventListener("click", async () => {

        const uuidSkinEdicao =
            (document.getElementById("uuidSkinEdicao") as HTMLInputElement).value;

        const nome =
            (document.getElementById("nomeSkin") as HTMLInputElement).value;

        const imagem =
            (document.getElementById("imagemSkin") as HTMLInputElement).value;

        if (!nome || !imagem) {
            alert("Preencha nome e imagem da skin.");
            return;
        }

        if (uuidSkinEdicao) {

            await atualizarSkin(uuidSkinEdicao, {
                nome: nome,
                imagem: imagem
            });

            alert("Skin atualizada com sucesso.");

        } else {

            await criarSkin({
                uuid: "skin-" + new Date().getTime(),
                nome: nome,
                imagem: imagem,
                arma_uuid: uuidArma
            });

            alert("Skin criada com sucesso.");
        }

        renderSkins(uuidArma);
    });

    const botoesEditar = document.querySelectorAll(".btn-editar");

    botoesEditar.forEach((botao) => {

        botao.addEventListener("click", () => {

            const uuid = botao.getAttribute("data-uuid");
            const nome = botao.getAttribute("data-nome");
            const imagem = botao.getAttribute("data-imagem");

            if (!uuid || !nome || !imagem) return;

            (document.getElementById("uuidSkinEdicao") as HTMLInputElement).value = uuid;
            (document.getElementById("nomeSkin") as HTMLInputElement).value = nome;
            (document.getElementById("imagemSkin") as HTMLInputElement).value = imagem;

            const titulo = document.getElementById("tituloFormulario");
            if (titulo) titulo.textContent = "Editar Skin";

            const btnCancelar = document.getElementById("btnCancelarEdicao");
            if (btnCancelar) btnCancelar.style.display = "inline-block";
        });

    });

    const botoesExcluir = document.querySelectorAll(".btn-excluir");

    botoesExcluir.forEach((botao) => {

        botao.addEventListener("click", async () => {

            const uuid = botao.getAttribute("data-uuid");

            if (!uuid) return;

            if (confirm("Deseja realmente excluir esta skin?")) {

                await deletarSkin(uuid);

                alert("Skin excluída com sucesso.");

                renderSkins(uuidArma);
            }
        });

    });

    const btnCancelar = document.getElementById("btnCancelarEdicao");

    btnCancelar?.addEventListener("click", () => {

        (document.getElementById("uuidSkinEdicao") as HTMLInputElement).value = "";
        (document.getElementById("nomeSkin") as HTMLInputElement).value = "";
        (document.getElementById("imagemSkin") as HTMLInputElement).value = "";

        const titulo = document.getElementById("tituloFormulario");
        if (titulo) titulo.textContent = "Nova Skin";

        btnCancelar.style.display = "none";
    });
}