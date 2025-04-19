import { PrismaClient } from '@prisma/client';
import { inferAsyncReturnType } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

const prisma = new PrismaClient();

export function createContext(_opts: FetchCreateContextFnOptions) {
  return { prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;