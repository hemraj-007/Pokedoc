# Pokedex Project

A full‑stack Pokedex application demonstrating **TypeScript**, **Next.js**, **Prisma**, **tRPC**, **React Query**, **Material UI**, and **Tailwind CSS**.

---

## ☁️ Deployment on Vercel

The Pokedex Project is live and deployed at:

**https://pokedoc.vercel.app/**

---

## 🔍 Features

1. **Part 1: Single Pokémon Lookup**
   - Search for a single Pokémon by name (case‑insensitive).
   - Displays ID, name, types, and sprite image in a styled card.

2. **Part 2: Batch Pokémon Lookup**
   - Enter a comma‑separated list of names to fetch multiple Pokémon at once.
   - Renders a vertical stack of Pokémon cards for each result.

3. **Part 3: Filterable Pokedex**
   - Fetches all distinct Pokémon types.
   - Dropdown selects a type (or “All Types”).
   - Displays only Pokémon matching the selected type.

---

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Prisma ORM** + PostgreSQL
- **tRPC** (End‑to‑end type safety)
- **React Query** (@tanstack/react-query)
- **Material UI** (v7) + Emotion
- **Tailwind CSS** (v4)
- **Vercel** (Hosting & CI/CD)

---

## 🔧 Setup & Development

1. **Clone & Install Dependencies**
   ```bash
   git clone https://github.com/hemraj-007/Pokedoc.git
   cd Pokedoc
   npm install
   ```

2. **Configure Environment Variables**
   Create a file named `.env` at the project root:
   ```env
   postgresql://hemrajbhatia38:XOBdFosDA93i@ep-orange-feather-a5ll62xs-pooler.us-east-2.aws.neon.tech/assignmentPok?sslmode=require"
   ```

3. **Generate Prisma Client & Migrate**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. **Seed the Database**
   ```bash
   npx prisma db seed
   ```
   This populates your database with the following dummy Pokémon:
- **Bulbasaur** (types: grass, poison)
- **Charmander** (types: fire)
- **Squirtle** (types: water)

5. **Run in Development**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Available Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "vercel-build": "prisma generate && prisma migrate deploy && next build"
  }
}
```

- **`npm run dev`**: Start local development server
- **`npm run build`**: Build for production
- **`npm run start`**: Start production server
- **`npm run lint`**: Lint and type‑check
- **`npm run vercel-build`**: Generate Prisma client, deploy migrations, and build for Vercel


Feel free to explore all three parts:
- Single Pokémon Lookup
- Batch Pokémon Lookup
- Filterable Pokedex


## 📄 License

This project is licensed under the MIT License.

