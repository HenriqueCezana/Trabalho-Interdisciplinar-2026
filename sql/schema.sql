CREATE DATABASE IF NOT EXISTS valorant_db;
USE valorant_db;

CREATE TABLE arma (
    cod_arma INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(500),
    categoria VARCHAR(100) NOT NULL,

    CONSTRAINT ck_arma_nome CHECK (CHAR_LENGTH(nome) >= 2)
);

CREATE TABLE skin (
    cod_skin INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    imagem VARCHAR(500),
    cod_arma INT NOT NULL,

    CONSTRAINT fk_skin_arma
        FOREIGN KEY (cod_arma)
        REFERENCES arma(cod_arma)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT ck_skin_nome CHECK (CHAR_LENGTH(nome) >= 2)
);

CREATE TABLE arma_disparo (
    cod_arma_disparo INT AUTO_INCREMENT PRIMARY KEY,
    capacidade_pente INT NOT NULL,
    cadencia DECIMAL(10,2) NOT NULL,
    cod_arma INT NOT NULL UNIQUE,

    CONSTRAINT fk_disparo_arma
        FOREIGN KEY (cod_arma)
        REFERENCES arma(cod_arma)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT ck_disparo_capacidade CHECK (capacidade_pente >= 0),
    CONSTRAINT ck_disparo_cadencia CHECK (cadencia >= 0)
);

CREATE TABLE arma_branca (
    cod_arma_branca INT AUTO_INCREMENT PRIMARY KEY,
    alcance VARCHAR(50) NOT NULL,
    cod_arma INT NOT NULL UNIQUE,

    CONSTRAINT fk_branca_arma
        FOREIGN KEY (cod_arma)
        REFERENCES arma(cod_arma)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE OR REPLACE VIEW vw_armas_total_skins AS
SELECT
    a.cod_arma,
    a.uuid,
    a.nome,
    a.categoria,
    COUNT(s.cod_skin) AS total_skins
FROM arma a
LEFT JOIN skin s ON s.cod_arma = a.cod_arma
GROUP BY
    a.cod_arma,
    a.uuid,
    a.nome,
    a.categoria;


CREATE USER IF NOT EXISTS 'tsi'@'localhost' IDENTIFIED BY '12345';

GRANT SELECT, INSERT, UPDATE, DELETE ON valorant_db.arma TO 'tsi'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE ON valorant_db.skin TO 'tsi'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE ON valorant_db.arma_disparo TO 'tsi'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE ON valorant_db.arma_branca TO 'tsi'@'localhost';

GRANT SELECT ON valorant_db.vw_armas_total_skins TO 'tsi'@'localhost';

FLUSH PRIVILEGES;