CREATE DATABASE IF NOT EXISTS valorant_db;
USE valorant_db;

-- Tabela principal
CREATE TABLE arma (
    cod_arma INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(500),
    categoria VARCHAR(100)
);

-- Skins (1:N)
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
        ON UPDATE CASCADE
);

-- Armas de disparo (1:0..1)
CREATE TABLE arma_disparo (
    cod_arma_disparo INT AUTO_INCREMENT PRIMARY KEY,
    capacidade_pente INT NOT NULL,
    cadencia DECIMAL(10,2) NOT NULL,

    cod_arma INT UNIQUE,

    CONSTRAINT fk_disparo_arma
        FOREIGN KEY (cod_arma)
        REFERENCES arma(cod_arma)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Armas brancas (1:0..1)
CREATE TABLE arma_branca (
    cod_arma_branca INT AUTO_INCREMENT PRIMARY KEY,
    alcance INT NOT NULL,

    cod_arma INT UNIQUE,

    CONSTRAINT fk_branca_arma
        FOREIGN KEY (cod_arma)
        REFERENCES arma(cod_arma)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);