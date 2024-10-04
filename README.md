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

2. Change directory

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

0. Make sure you have docker

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

## Testing the API

For easier testing, please import the file: `serino_kitra.postman_collection.json` in postman. [Importing guide](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/)

There are 3 endpoints:

1. Login - The server needs to know who's playing

   - POST `<host>`/api/users/login
   - Body (JSON):
     ```
     {
         "email": <email>,
         "password": <pasword>
     }
     ```

2. Find treasure - The main feature of the game, find and collect treasures

   - GET `<host>`/api/treasures/find
   - Headers
     - `Authorization`: `Bearer <token from login>`
   - Query parameteres
     - `latitude`: Latitude of user (Required)
     - `longitude`: Longitude of user (Required)
     - `distance`: Search distance of user (Required)
     - `prizeValue`: Minimum prize the user is looking for (Optional)

3. Leaderboards - What's a game without a bit of competition?
   - GET `<host>`/api/leaderboards

## Scripts

- `npm run seed`: migrate and seed data
- `npm run dev`: start development server
- `npm run build`: compiles project to js
- `npm run serve`: start server

## Cool features to add (but I'm too lazy to)

- User's treasures found history (just the controller and route and it's done)
- Hot / Cold enpoint: tells the user if they are getting closer or farther from treasure
- Host a compute engine instance with mysql and make the docker image connect to it by default
