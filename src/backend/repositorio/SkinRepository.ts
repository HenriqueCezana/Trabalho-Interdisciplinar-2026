import pool from "../config/db";

export class SkinRepository {
  public static async listar(): Promise<any[]> {
    const [rows] = await pool.execute(
      `SELECT
        s.cod_skin,
        s.uuid,
        s.nome,
        s.imagem,
        s.cod_arma,
        a.uuid AS arma_uuid,
        a.nome AS arma_nome
      FROM skin s
      INNER JOIN arma a ON a.cod_arma = s.cod_arma
      ORDER BY s.nome`
    );

    return rows as any[];
  }

  public static async buscarPorUuid(uuid: string): Promise<any> {
    const [rows]: any = await pool.execute(
      `SELECT
        s.cod_skin,
        s.uuid,
        s.nome,
        s.imagem,
        s.cod_arma,
        a.uuid AS arma_uuid,
        a.nome AS arma_nome
      FROM skin s
      INNER JOIN arma a ON a.cod_arma = s.cod_arma
      WHERE s.uuid = ?`,
      [uuid]
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }

  public static async criar(dados: any): Promise<void> {
    const [armaRows]: any = await pool.execute(
      `SELECT cod_arma FROM arma WHERE uuid = ?`,
      [dados.arma_uuid]
    );

    if (armaRows.length === 0) {
      throw new Error("Arma não encontrada.");
    }

    const codArma = armaRows[0].cod_arma;

    await pool.execute(
      `INSERT INTO skin
        (uuid, nome, imagem, cod_arma)
       VALUES (?, ?, ?, ?)`,
      [
        dados.uuid,
        dados.nome,
        dados.imagem,
        codArma
      ]
    );
  }

  public static async atualizar(uuid: string, dados: any): Promise<boolean> {
    const [resultado]: any = await pool.execute(
      `UPDATE skin
       SET nome = ?,
           imagem = ?
       WHERE uuid = ?`,
      [
        dados.nome,
        dados.imagem,
        uuid
      ]
    );

    return resultado;
  }

  public static async deletar(uuid: string): Promise<boolean> {
    const [resultado]: any = await pool.execute(
      `DELETE FROM skin
       WHERE uuid = ?`,
      [uuid]
    );

    return resultado;
  }
}