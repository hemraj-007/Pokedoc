// server/routers/pokemon.ts
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const pokemonRouter = router({
  // existing single lookup
  getByName: publicProcedure
    .input(z.string().min(1))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.pokemon.findUnique({
        where: { name: input },
      });
    }),

  // existing “get all”
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pokemon.findMany();
  }),

  // existing batch lookup
  getByNames: publicProcedure
    .input(z.array(z.string().min(1)))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
    }),

  // ──────── Part 3 ────────

  // 1️⃣ Return all distinct types
  getTypes: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.prisma.pokemon.findMany({
      select: { types: true },
    });
    // flatten and dedupe
    const all = rows.flatMap((r) => r.types);
    return Array.from(new Set(all)).sort();
  }),

  // 2️⃣ Return pokémon filtered by a single type
  getByType: publicProcedure
    .input(z.string().min(1))
    .query(async ({ ctx, input: type }) => {
      return ctx.prisma.pokemon.findMany({
        where: {
          types: {
            has: type,
          },
        },
      });
    }),
});
