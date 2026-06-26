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