# Back end para teste Bonaparte

## A aplicação:

Consiste em entregar uma API REST para que seja possível listar, editar e deletar registros de filmes.

## Tecnologias usadas:

- Node.js
- Express
- Knex
- Postgres

## Comandos necessários para rodar a aplicação:

- `docker run --name postgres-db -e POSTGRES_PASSWORD=bona123 -e POSTGRES_USER=postgres -e POSTGRES_DB=bona_filmes -p 5435:5432 -d postgres`
- `npx knex migrate:latest`
- `npm run start`

### Rotas

- GET http://localhost:3333/movies - Listagem de filmes cadastrados no banco
- POST http://localhost:3333/movies - Inserção de objeto com dados (segue exemplo de objeto abaixo)
- GET http://localhost:3333/movies/filter/title/:primaryTitle - Pesquisa por titulo
- GET http://localhost:3333/movies/filter/year/:startYear - Pesquisa por Ano
- PUT http://localhost:3333/movies/:tconst - Update de informações do banco recebendo ID (segue exemplo de objeto abaixo)
- DEL http://localhost:3333/movies/:tconst - Exclusão de informações do banco recebendo ID na URL

- GET http://localhost:3333/moviesRating - Listagem de Ratings filmes cadastrados no banco
- POST http://localhost:3333/moviesRating - Inserção de objeto com dados (segue exemplo de objeto abaixo)
- PUT http://localhost:3333/moviesRating/:tconst - Update de informações do banco recebendo ID (segue exemplo de objeto abaixo)
- DEL http://localhost:3333/moviesRating/:tconst - Exclusão de informações do banco recebendo ID na URL

### Objeto para exemplo de criação de filmes:

```json
{
    "tconst": "tt0000001",
    "titleType": "short",
    "primaryTitle": "Carmencita",
    "originalTitle": "Carmencita",
    "isAdult": true,
    "startYear": 1894,
    "endYear": null,
    "runtimeMinutes": 1,
    "genres": "Documentary,Short",
    "created_at": "2022-04-11T00:17:54.049Z",
    "updated_at": "2022-04-11T00:17:54.049Z"
}
```

### Objeto para exemplo de criação de ratings de filmes:

```json
{
    "tconst": "tt0000001",
	"averageRating": 5.7,
	"numVotes": 1871
}
```

## Observações

Gastei um tempo muito longo fazendo o docker-compose funcionar, mas houveram vários erros e na última versão não está sendo possível conectar a aplicação Node com o Banco de Dados Postgres e me faltou horas disponíveis devido a contratempos pessoais e profissionais. Não foi possível finalizar todas as rotas, principalmente as de nota dos filmes.
