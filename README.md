# serino_kitra

## Scripts

- `npm run seed`: migrate and seed data
- `npm run dev`: start development server

## TODO

created detailed instructions on how to run this app

## Docker

- Build
  - `docker build -t serino_kitra:latest .`
- Run
  - `docker run --name serino_kitra -dp 127.0.0.1:8080:8080 --env-file .env serino_kitra:latest`
  - If connecting to a database server on the local machine, set `DB_HOST` to `host.docker.internal` in the .env file
