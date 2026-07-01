export async function listarArmas() {

    try {

        const response = await fetch(
            "http://localhost:3000/armas"
        );

        if (!response.ok) {
            throw new Error(
                "Erro ao buscar armas."
            );
        }

        return await response.json();

    } catch (erro) {

        console.error(erro);

        return [];

    }
}

export async function buscarArma(uuid: string) {

    try {

        const response = await fetch(
            `http://localhost:3000/armas/${uuid}`
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar arma.");
        }

        return await response.json();

    } catch (erro) {

        console.error(erro);

        return null;

    }
}

export async function criarSkin(dados: any) {
    const response = await fetch("http://localhost:3000/skins", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    return response.json();
}

export async function atualizarSkin(uuid: string, dados: any) {
    const response = await fetch(`http://localhost:3000/skins/${uuid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    return response.json();
}

export async function deletarSkin(uuid: string) {
    const response = await fetch(`http://localhost:3000/skins/${uuid}`, {
        method: "DELETE"
    });

    return response.json();
}