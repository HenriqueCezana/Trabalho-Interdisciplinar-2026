import pool from "../config/db";
import { Arma } from "../models/Arma";
import { ArmaDisparo } from "../models/ArmaDisparo";
import { ArmaBranca } from "../models/ArmaBranca";

export class ArmaRepository {
  public static async salvarArmas(armas: Arma[]): Promise<void> {
    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      for (let i = 0; i < armas.length; i++) {
        const arma = armas[i];

        if (arma) {
          await connection.execute(
            `INSERT INTO arma
              (uuid, nome, descricao, imagem, categoria)
             VALUES (?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE
              nome = VALUES(nome),
              descricao = VALUES(descricao),
              imagem = VALUES(imagem),
              categoria = VALUES(categoria)`,
            [
              arma.uuid,
              arma.nome,
              arma.descricao,
              arma.imagem,
              arma.categoria
            ]
          );

          const [armaRows]: any = await connection.execute(
            `SELECT cod_arma FROM arma WHERE uuid = ?`,
            [arma.uuid]
          );

          const codArma = armaRows[0].cod_arma;

          if (arma instanceof ArmaDisparo) {
            await connection.execute(
              `INSERT INTO arma_disparo
                (capacidade_pente, cadencia, cod_arma)
               VALUES (?, ?, ?)
               ON DUPLICATE KEY UPDATE
                capacidade_pente = VALUES(capacidade_pente),
                cadencia = VALUES(cadencia)`,
              [
                arma.capacidadePente,
                arma.cadenciaTiro,
                codArma
              ]
            );
          }

          if (arma instanceof ArmaBranca) {
            await connection.execute(
              `INSERT INTO arma_branca
                (alcance, cod_arma)
               VALUES (?, ?)
               ON DUPLICATE KEY UPDATE
                alcance = VALUES(alcance)`,
              [
                arma.alcance,
                codArma
              ]
            );
          }

          const skins = arma.skins;

          for (let j = 0; j < skins.length; j++) {
            const skin = skins[j];

            if (skin) {
              await connection.execute(
                `INSERT INTO skin
                  (uuid, nome, imagem, cod_arma)
                 VALUES (?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                  nome = VALUES(nome),
                  imagem = VALUES(imagem),
                  cod_arma = VALUES(cod_arma)`,
                [
                  skin.uuid,
                  skin.nome,
                  skin.imagem,
                  codArma
                ]
              );
            }
          }
        }
      }

      await connection.commit();
    } catch (erro) {
      await connection.rollback();
      throw erro;
    } finally {
      connection.release();
    }
  }

  public static async listarArmas(): Promise<any[]> {
    const [rows] = await pool.execute(
      `SELECT
        a.cod_arma,
        a.uuid,
        a.nome,
        a.descricao,
        a.imagem,
        a.categoria,
        ad.capacidade_pente,
        ad.cadencia,
        ab.alcance
      FROM arma a
      LEFT JOIN arma_disparo ad ON ad.cod_arma = a.cod_arma
      LEFT JOIN arma_branca ab ON ab.cod_arma = a.cod_arma
      ORDER BY a.nome`
    );

    return rows as any[];
  }
}