import { PrismaClient } from '@prisma/client';

declare global {
  // This extends the global object in Node.js for development
  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance in dev
export const prisma =
  global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
