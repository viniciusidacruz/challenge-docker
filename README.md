# Challenge Docker - Full Cycle

Este repositório contém os desafios realizados no curso Full Cycle, focado em Docker. Os desafios envolvem a criação de imagens Docker para aplicações em Go e Node.js, otimizadas para serem extremamente leves.

## Desafios

### 1. Imagem Docker com Go

O desafio consiste em criar uma imagem Docker minimalista para uma aplicação escrita em Go, com menos de 2MB de tamanho. A aplicação, ao ser executada, deve exibir uma mensagem de "Full Cycle Rocks!".

- **Tamanho da Imagem**: Inferior a 2MB
- **Comando para rodar a aplicação em Go**:
  ```bash
  docker run viniciusitalodacruz/fullcycle
  ```

Você pode conferir a imagem do desafio no Docker Hub:
[Imagem Go no Docker Hub](https://hub.docker.com/r/viniciusitalodacruz/fullcycle)

### 2. Imagem Docker com Node.js

Outro desafio foi criar uma imagem Docker para uma aplicação em Node.js. Neste desafio, não há uma limitação de tamanho da imagem, mas foi mantida uma configuração otimizada para produção.

- **Comando para rodar a aplicação em Node.js**:
  ```bash
  docker run viniciusitalodacruz/nodejs-fullcycle
  ```

A imagem Node.js está disponível no Docker Hub:
[Imagem Node.js no Docker Hub](https://hub.docker.com/r/viniciusitalodacruz/nodejs-fullcycle)

## Como rodar localmente

Se desejar rodar as imagens localmente, basta ter o Docker instalado e seguir os comandos abaixo:

### 1. Rodando a imagem Go

Execute o seguinte comando no terminal para baixar e rodar a imagem da aplicação em Go:

```bash
docker run viniciusitalodacruz/fullcycle
```
