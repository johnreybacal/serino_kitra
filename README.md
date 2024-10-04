# serino_kitra

## Dependency versions

- Node: v20.12.1
- npm: 10.8.3
- Typescript: 5.6.2

## Get the API running

1. Clone this repo

```
git clone https://github.com/johnreybacal/serino_kitra.git
```

2. Change directory (duh)

```
cd serino_kitra
```

3. Install dependencies

```
npm i
```

4. Setup environment variables. Duplicate `.env.example` and rename to `.env`. Set the following variables to connect to your database instance

   - `DB_NAME`
   - `DB_USERNAME`
   - `DB_PASSWORD`
   - `DB_ENGINE`
   - `DB_HOST`
   - `DB_PORT`

5. Seed the database (this will also synchronize the models defined in this app)

```
npm run seed
```

6. Start the development server locally

```
npm run dev
```

## It works on my machine? well, that's why we have Docker!

1. Make sure the database is seeded and `.env` is ready

   - If connecting to a database server on the local machine, set `DB_HOST` to `host.docker.internal` in the `.env` file

2. Pull

```
docker pull johnreybacal/serino_kitra:latest
```

3. Run

```
docker run --name serino_kitra -dp 127.0.0.1:8080:8080 --env-file .env johnreybacal/serino_kitra:latest
```

## Scripts

- `npm run seed`: migrate and seed data
- `npm run dev`: start development server
- `npm run build`: compiles project to js
- `npm run serve`: start server

## Cool features to add (but I'm too lazy to)

- User's treasures found history (just the controller and route and it's done)
- Hot / Cold enpoint: tells the user if they are getting closer or farther from treasure
- Host a compute engine instance with mysql and make the docker image connect to it by default
