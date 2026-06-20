import { ArmaController } from "./controllers/ArmaController";
import { ValorantApiService } from "./service/ApiService";
import { ArmaDisparo } from "./models/ArmaDisparo";
import { Skin } from "./models/Skin";

async function main() {
  try {
    const controller = new ArmaController();

    console.log("===== CONSUMINDO API =====");

    const armas = await ValorantApiService.buscarArmas();

    for (let i = 0; i < armas.length; i++) {
       const arma = armas[i];

       if (arma) {
         controller.criarArma(arma);
       }
     }

    // console.log("===== LISTAR ARMAS =====");
    // console.log(controller.listarArmas());

    // console.log("===== PESQUISAR POR CRITÉRIO: Vandal =====");
    // console.log(controller.pesquisarPorCriterio("Vandal"));

    // console.log("===== LISTAR POR CATEGORIA: Shotgun =====");
    // console.log(controller.listarArmasPorCategoria("Shotgun"));

    //console.log("===== CRIAR ARMA MANUALMENTE =====");

    const skinTeste = new Skin(
      "skin-teste",
      "Skin Teste",
      "imagem-skin-teste.png"
    );

    const armaTeste = new ArmaDisparo(
      "arma-teste",
      "Arma Teste",
      "Arma criada manualmente para teste.",
      "imagem-arma-teste.png",
      "Teste",
      [skinTeste],
      30,
      9.5
    );

    controller.criarArma(armaTeste);

    //console.log(controller.pesquisarPorCriterio("Arma Teste"));

    // console.log("===== ATUALIZAR ARMA =====");

    // const armaAtualizada = new ArmaDisparo(
    //   "arma-teste",
    //   "Arma Teste Atualizada",
    //   "Descrição atualizada.",
    //   "imagem-atualizada.png",
    //   "Teste Atualizado",
    //   [skinTeste],
    //   40,
    //   10.5
    // );

    // const atualizou = controller.atualizarArma(
    //   "arma-teste",
    //   armaAtualizada
    // );

    // console.log("Atualizou?", atualizou);
    // console.log(controller.pesquisarPorCriterio("Atualizada"));

    // console.log("===== DELETAR ARMA =====");

    // const deletou = controller.deletarArma("arma-teste");

    // console.log("Deletou?", deletou);
    // console.log(controller.pesquisarPorCriterio("Arma Teste Atualizada"));

  } catch (erro) {
    console.log("Erro ao executar testes:");
    console.log(erro);
  }
}

main();