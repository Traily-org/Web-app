# Web-app

Partie web de Traily : **dashboard de modération** (revue des photos soumises,
signalements, validation / rejet), développée avec **React**, **TypeScript**,
**Vite** et **pnpm**. Elle consomme l'API du [backend](https://github.com/Traily-org/backend).

## Stack

- React + React Router
- TypeScript
- Vite
- Tailwind CSS
- pnpm

## Installation

```bash
cd traily-web
pnpm install
cp .env.example .env
```

## Lancer le projet

Démarrer d'abord le backend (`task docker:dev` dans le repo backend, API sur
`http://localhost:8080`), puis :

```bash
pnpm dev
```

Le dashboard est disponible sur `http://localhost:5173`. Les appels à `/api`
sont proxifiés vers le backend (`VITE_API_PROXY_TARGET`).

## Commandes

```bash
pnpm dev            # Démarrer le serveur de dev
pnpm build          # Build de production (dist/)
pnpm lint           # Lint (oxlint)
pnpm typecheck      # Vérification des types
pnpm format         # Formater le code (Prettier)
pnpm format:check   # Vérifier le formatage
```

## Structure

```
traily-web/src/
  app/          # routing et configuration globale
  components/   # composants partagés (layout, UI)
  pages/        # une page par route
  lib/          # utilitaires (client API, ...)
```
