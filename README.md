Trabalho Final Interdisciplinar de Arquitetura de Software, Banco de Dados II,  
Desenvolv. Front-end II e Prog. Orientada a Objetos II - 3º Período, Tecnólogo em Sistemas para Internet

# Introdução:
O Trabalho Final Interdisciplinar contemplará a integração dos conhecimentos tratados nos componentes 
curriculares Arquitetura de Software, Banco de Dados II, Desenvolv. Front-end II e Prog. Orientada a 
Objetos II. O desenvolvimento da atividade deve ser realizada em trios ou quartetos, sendo necessário 
colocar em prática os conhecimentos adquiridos naquelas disciplinas ao longo do semestre letivo. 
Este trabalho será utilizado como atividade avaliativa do semestre, sendo que a nota atribuída ao 
trabalho poderá ser diferenciada em cada disciplina, a depender do nível de proficiência demonstrado 
pelo estudante nos assuntos relacionados a cada componente curricular. 

# Objetivo: 
O objetivo deste trabalho é aplicar os conhecimentos adquiridos durante o semestre para o 
desenvolvimento de uma aplicação web completa. Iniciando pelo uso dos princípios de 
desenvolvimento (SOLID, GRASP, Clean Code, etc..)  para modelagem das classes e definição da 
arquitetura e modularização do sistema, passando pela construção dos códigos, com utilização 
de componentes reutilizáveis, até a sua implantação (deploy) para execução online.

# Descrição do Trabalho 
Cada grupo deverá escolher um tema para seu projeto, modelar e desenvolver os códigos da aplicação, a 
fim de apresentá-la para os professores em uma entrevista. Exemplos de temas incluem: Blog, Loja 
Virtual, Sistema de Gestão de Tarefas, Aplicativo de Receitas, entre outros. 
Em Desenvolv. Front-end II e Prog. Orientada a Objetos II, vocês estudaram sobre o consumo de dados 
obtidos a partir de Web Services para exibir elementos em tela. Neste trabalho, você deve fazer uso de dados obtidos a partir de pelo menos um Web Service para alimentar um sistema Orientado a 
Objetos.

Você deverá desenvolver um sistema utilizando TypeScript, Orientação a Objetos e React, que 
consuma dados de um Web Service de sua escolha. Os dados obtidos do Web Service devem ser 
registrados em uma estrutura de classes de um sistema Orientado a Objetos, e implementar 
funcionalidades baseadas nesse paradigma, a fim de aplicar os conceitos estudados, tal como 
polimorfismo e interfaces, além dos princípios SOLID e o padrão GRASP.

# Requisitos Técnicos Necessários:
● Modelagem: 
    ○ Crie um diagrama com a hierarquia de classes e interfaces necessárias para o sistema, 
    utilizando os conceitos de Orientação a Objetos.

    ○ Recomenda-se que o diagrama de classes seja o primeiro a ser desenvolvido, porque 
    servirá como fundamento para as outras entregas.

● Princípios SOLID importantes para se atentar: 
    ○ Single Responsability Principle (SRP): Cada classe deve ter uma e apenas uma 
    responsabilidade. 

    ○ Open-Closed Principle (OCP): As classes devem ser abertas para extensão, mas 
    fechadas para modificação. Considere que, por exemplo, se adicionarmos futuramente 
    classes no sistema, o mesmo deve permitir isso sem modificações no código existente. 

    ○ Dependency Inversion Principle (DIP): Dependa de abstrações e não de 
    implementações. Use interfaces para definir contratos que diferentes classes podem 
    implementar. 

● Interface: Devem ser implementadas classes que tenham um comportamento IPesquisavel com 
a função atendeCriterio(criterio: string): boolean, ou seja, todo item IPesquisavel deverá ser 
capaz de receber um critério via string e realizar uma pesquisa no seu campo descritivo de maior 
relevância pela string digitada pelo usuário.

● Controller e Polimorfismo: Implemente controladores responsáveis por orquestrar a lógica de 
negócios do sistema. É importante observar a necessidade de se trabalhar com OBJETOS. 
    ○ Gerenciamento de Array de Objetos: desenvolver as funcionalidades de um CRUD de 
    objetos, nele deve constar funcionalidades para Criar, Listar os Dados, Atualizar e Deletar.

    ○ Deve ser criado um método pesquisarPorCriterio(criterio: string): 
    Array<IPesquisavel>, que utilize o método polimórfico atendeCriterio das classes que 
    implementam a interface IPesquisavel, que seja capaz de conduzir a busca por este 
    critério no vetor de itens pesquisáveis. 

        ■ Garanta que o método funcione não apenas para todo item Pesquisável do seu 
        sistema, mas também para implementações futuras de coleções pesquisáveis no 
        sistema, sem a alteração do código da função. 

        ■ Ex: vetPromocoes.pesquisarPorCriterio(“mario”) deverá pesquisar por todas as 
        promoções cujo nome do jogo possui “mario” como substring, retornando um vetor 
        de promoções.

● Consumo de API: A aplicação deve consumir pelo menos uma API externa. 
    ○ Para consumir os dados do Web Service de sua escolha, você deverá aplicar 
    programação assíncrona, usando Promises, Async e Await.

    ○ Os dados recebidos externamente do Web Service, devem ser armazenados em uma 
    estrutura de classes adequada do seu sistema.

    ○ É necessário armazenar dados de pelo menos 3 (três) classes diferentes no sistema e 
    precisa haver pelo menos uma associação entre duas delas. Após o consumo do Web 
    Service, os dados lidos deverão ser armazenados usando sua estrutura de classes.

        ■ Deve ser contemplada na estrutura de classes do sistema alguma relação de 
        herança entre classes, a fim de explorar o conceito de polimorfismo.

        ■ Por exemplo: Em um Web Service de jogos e promoções, cada entidade seria uma 
        classe (Jogos e Promoções) e haveria um relacionamento “1-para-muitos” entre 
        eles, podendo contemplar subcategorias de jogos (herança). Em um Web Service 
        sobre Equipamentos e Skins também.


● Front-end: 
    ○ A aplicação deve ter pelo menos 3 (três) páginas distintas. Deve ser implementada a 
    navegação entre essas páginas utilizando o React Router. Com navegação usando 
    parâmetros em uma rota.

    ○ Componentização: A aplicação deve ser componentizada, ou seja, dividida em 
    componentes reutilizáveis. Os componentes devem ser bem estruturados e organizados 
    em pastas.

    ○ Estilização: Deve ser utilizado CSS, Module-CSS, CSS-in-JS, ou bibliotecas de 
    estilização como styled-components ou Emotion para estilizar a aplicação.

    ○ Responsividade: A aplicação deve ser responsiva e funcionar bem em diferentes 
    tamanhos de tela (desktop, tablet e mobile).

    ○ Publicação: A aplicação deve ser publicada na web através do Vercel (www.vercel.com). 


● Banco de Dados: 
    ○ Criação de uma estrutura de banco de dados normalizada para guardar os resultados 
    obtidos através das integrações realizadas com a API consumida;

    ○ A aplicação deve consumir os dados do banco para visualização no frontend, ou seja, a 
    aplicação deve consumir a API e realizar a inserção dos dados obtidos no banco relacional 
    criado; 

    ○ A aplicação deve conter algumas consultas com um nível de complexidade maior 
    contendo, JOIN, SUBSELECT (se pertinente), GROUP BY, funções de agregação (SUM, 
    AVG, COUNT…), funções de data e de string. 

    ○ O banco deverá conter algum tipo de validação de campo (CHECK constraint); 

    ○ O sistema deverá consumir alguma tabela VIEW, essa criação deverá ter contexto de uso. 

    ○ O usuário de conexão da aplicação deverá ser criado (não poderá ser o root), e algumas 
    tabelas deverão ter regras de segurança para esse usuário (permissões diferentes para 
    certos tipos de tabelas). 

        ■ Um exemplo seria a VIEW, onde nesse caso, o usuário da aplicação não deverá 
        possuir permissão de INSERT, UPDATE e DELETE.


# Como executar o projeto

## Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

- Node.js (LTS)
- XAMPP
- MySQL Workbench ou equivalente
- Visual Studio Code
- Extensão **Live Server** para o VS Code

---

## Passo 1 - Verificar a instalação do Node.js

No terminal do VS Code, execute:

```bash
node -v
npm -v
```

Se ambos retornarem a versão instalada, o Node.js está configurado corretamente.



## Passo 2 - Clonar o repositório

Na pasta desejada clone o projeto com o comando abaixo:

```bash
git clone https://github.com/HenriqueCezana/Trabalho-Interdisciplinar-2026.git
```


## Passo 3 - Instalar as dependências

Execute:

```bash
npm install
```

Esse comando instalará todas as dependências necessárias para o funcionamento do projeto.


## Passo 4 - Configurar o banco de dados

1. Inicie o **MySQL** pelo XAMPP.
2. Abra o **MySQL Workbench ou um software equivalente**.
3. Conecte-se utilizando o usuário **root**.
4. Execute o script localizado na pasta **sql** do projeto.
5. O script criará automaticamente:
   - Banco de dados `valorant_db`;
   - Tabelas;
   - View;
   - Constraints;
   - Usuário da aplicação (`tsi`).

> Após a criação do banco no usuário root, crie uma nova cenxão com o seguinte:

- **Hostname:** localhost
- **Usuário:** tsi
- **Senha:** 12345



## Passo 5 - Compilar o Front-end

No terminal do VS Code execute:

```bash
npm run build:frontend
```

---

## Passo 6 - Iniciar o Projeto

No terminal do VS Code execute:

```bash
npm run dev
```

Se tudo estiver correto, deverá aparecer no terminal do VS Code:

```
Servidor rodando em http://localhost:3000
Conectado ao banco de dados com sucesso.
Importando armas da API Valorant...
Armas importadas para o banco com sucesso.
```

---

## Passo 7 - Abrir o Projeto no navegador

Abra o arquivo:

```
src/frontend/page.html
```

utilizando a extensão **Live Server** do Visual Studio Code.

A aplicação será aberta automaticamente no navegador.

---

## Observações

- O backend importa automaticamente as armas da API do Valorant para o banco de dados sempre que a aplicação é iniciada.
- Certifique-se de que o MySQL esteja em execução antes de iniciar o backend.
- O backend deve permanecer em execução enquanto o frontend estiver sendo utilizado.