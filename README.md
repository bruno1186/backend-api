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
