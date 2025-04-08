# Tech Challenge - Hackaton - Video para Imagens

# Índice

* [Índice](#índice)
* [Breve Descrição](#Breve-Descrição)
* [Demais repositórios](#Demais-repositórios)
* [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
* [Estrutura do Projeto](#Estrutura-do-Projeto)
* [Script](#Script)
* [Rodando o Projeto Local](#Rodando-o-Projeto-Local)

## Breve Descrição

Aplicação se trata de um Projeto Fiap Tech Challenge (Hackathon) - Software Architecture, simulando um projeto de uma
empresa que recebe videos e transforma em Imagens.

Este repositório é referente a Infra do Database (RDS) e Postegres.

### Demais repositórios

- https://github.com/leodelmiro/fiap-hackaton-video-infra
- https://github.com/leodelmiro/fiap-hackaton-video-usuario
- https://github.com/leodelmiro/fiap-hackaton-video-recebe
- https://github.com/leodelmiro/fiap-hackaton-video-processa
- https://github.com/leodelmiro/fiap-hackaton-video-gerencia
- https://github.com/leodelmiro/fiap-hackaton-video-notifica
- https://github.com/leodelmiro/fiap-hackaton-video-gateway

## Tecnologias Utilizadas

- Terraform
- AWS
- RDS
- PostgresSQL (17.4)
- NodeJS (Lambda)

## Estrutura do Projeto

- .github: Arquivos com as actions.
- Infra: Arquivos terraform para criação do banco de dados.
    - lambda_function: Arquivos da Lambda function que cria os schemas do branco
 
## Script
```
CREATE TABLE IF NOT EXISTS tb_envio (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    autor VARCHAR(255) NOT NULL,
    url VARCHAR(500),
    status INTEGER NOT NULL,
    criado_em TIMESTAMP DEFAULT current_timestamp
);
```

## Rodando o Projeto Local

### 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Terraform
- AWS CLI

### 2. Clonar o Repositório

Clone o repositório do projeto:

```sh
git clone https://github.com/leodelmiro/fiap-hackaton-video-db
```

### 3. Executar o Script de Setup

- Pre-requisito:
    - AWS Configurada

O projeto inclui um script de setup (`setup.sh`) que automatiza o processo de construção e execução do projeto. 
Para executar o script, siga os passos abaixo:

#### macOS e Linux

1. **Tornar o Script Executável**:

    ```sh
    chmod +x setup.sh
    ```

2. **Executar o Script**:

    ```sh
    ./setup.sh
    ```

#### Windows

1. **Executar o Script**:

   No PowerShell ou Git Bash:

    ```sh
    ./setup.sh
    ```
