# backend-api

API REST em NestJS + TypeScript. O MVP roda com repositorio em memoria (sem banco), permitindo subir e testar a API imediatamente. O caminho produtivo com PostgreSQL + Prisma esta documentado abaixo e o schema acompanha o repositorio.

## Stack

- Node.js 20 LTS, TypeScript
- NestJS (modular)
- class-validator / ValidationPipe
- Swagger / OpenAPI
- PostgreSQL + Prisma (caminho produtivo)
- Docker e docker-compose

## Estrutura

```
src/
  main.ts                 # bootstrap + Swagger
  app.module.ts           # modulo raiz
  health/
    health.controller.ts  # GET /api/health
  users/
    users.module.ts
    users.controller.ts   # CRUD de usuarios
    users.service.ts      # repositorio em memoria (MVP)
    dto/create-user.dto.ts
prisma/
  schema.prisma           # modelo para o caminho produtivo
Dockerfile
docker-compose.yml
```

## Rodando o MVP

```
npm install
npm run start:dev
```

API em `http://localhost:3000/api`, Swagger em `http://localhost:3000/docs`.

## Endpoints

- `GET /api/health`
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `DELETE /api/users/:id`

## Caminho produtivo (PostgreSQL + Prisma)

O `schema.prisma` define o modelo persistente. Para migrar do repositorio em memoria para o Postgres:

```
docker-compose up -d      # sobe o Postgres
npx prisma migrate dev    # aplica o schema
```

Em seguida, substitua a implementacao em memoria de `UsersService` por um acesso via `PrismaClient`.

## Scripts

- `npm run start:dev` - desenvolvimento com hot reload
- `npm run build` - build de producao
- `npm run test` - testes

## Licenca

MIT
# backend-api

API REST construida com Node.js + TypeScript, utilizando o framework NestJS e banco de dados PostgreSQL. Projeto de referencia de backend seguindo as principais praticas de mercado.

## Tecnologias

- Node.js 20 LTS
- - TypeScript
  - - NestJS (framework backend modular)
    - - PostgreSQL + Prisma ORM
      - - JWT para autenticacao e autorizacao
        - - Docker e docker-compose
          - - Jest para testes unitarios e e2e
            - - ESLint + Prettier
              - - Swagger / OpenAPI para documentacao da API
               
                - ## Estrutura de pastas
               
                - ```
                  backend-api/
                    src/
                      modules/        # modulos de dominio (users, auth, etc.)
                      common/         # filtros, guards, interceptors, pipes
                      config/         # configuracoes e variaveis de ambiente
                      main.ts         # bootstrap da aplicacao
                    prisma/           # schema e migrations
                    test/             # testes e2e
                    docker-compose.yml
                    Dockerfile
                    package.json
                  ```

                  ## Como rodar localmente

                  ```bash
                  # instalar dependencias
                  npm install

                  # subir banco de dados
                  docker-compose up -d

                  # rodar migrations
                  npx prisma migrate dev

                  # iniciar em modo desenvolvimento
                  npm run start:dev
                  ```

                  A API sobe por padrao em `http://localhost:3000` e a documentacao Swagger em `http://localhost:3000/docs`.

                  ## Scripts principais

                  - `npm run start:dev` - modo desenvolvimento com hot reload
                  - - `npm run build` - build de producao
                    - - `npm run test` - testes unitarios
                      - - `npm run test:e2e` - testes end-to-end
                        - - `npm run lint` - analise estatica
                         
                          - ## Licenca
                         
                          - MIT
                          - 
