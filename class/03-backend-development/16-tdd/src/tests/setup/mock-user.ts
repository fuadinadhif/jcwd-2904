import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";
import prisma from "./client";

export async function getUser() {
  return await prisma.user.findMany();
}

export const prismaMock = prisma as DeepMockProxy<PrismaClient>;

jest.mock("./client", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});
