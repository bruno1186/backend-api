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
