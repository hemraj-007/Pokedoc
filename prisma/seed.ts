import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  await db.pokemon.deleteMany(); // ✅ Clear existing entries

  await db.pokemon.createMany({
    data: [
      {
        name: 'Bulbasaur',
        types: ['grass', 'poison'],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      {
        name: 'Charmander',
        types: ['fire'],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      {
        name: 'Squirtle',
        types: ['water'],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      },
    ],
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());