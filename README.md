# Snowball - Personal Accounting Monorepo

A simple side project for personal accounting.

It's a monorepo that uses:

- `Svelte` as front-end
- `Express` as back-end
- `Turborepo` as build system

## Prerequisite

- Node.js v18
- Docker
- PNPM as package manager

## How to Setup PostgresQL container (in `back-end` repo)

Default package manager is PNPM

1. Create a .env file:

```bash
# POSTGRES_PASSWORD is used by postgres.yml, the docker-compose file
POSTGRES_PASSWORD=example
# DATABASE_URL is used by Prisma
DATABASE_URL=postgresql://postgres:example@localhost:5432/postgres
```

2. Run `pnpm dev:docker` to pull the postgres image and start the container.
3. Run `pnpm dev:dbinit` to migrate & seed dev databases

## How to start?

```bash
# Start the monorepo in the workspace
pnpm dev
```

## Contributing

We use [Github Flow](https://githubflow.github.io/).

- Anything in the `main` branch is deployable
- Create descriptive branches off of master
  - front-end: `FE/[what_you_are_working_on]`
  - back-end: `BE/[what_you_are_working_on]`
- Open a pull request at any time
- Merge only after pull request review
