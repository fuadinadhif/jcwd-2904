import { prismaMock, getUser } from "./setup/mock-user";

describe("MOCK GET /api/v1/users", () => {
  it("should return an array of users", async () => {
    prismaMock.user.findMany.mockResolvedValue([
      {
        id: 1,
        firstName: "Teh",
        lastName: "Sosro",
        email: "teh.sosro@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "Batagor",
        lastName: "Soleh",
        email: "batagor.soleh@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await expect(getUser()).resolves.toMatchObject([
      {
        id: 1,
        firstName: "Teh",
        lastName: "Sosro",
        email: "teh.sosro@gmail.com",
      },
      {
        id: 2,
        firstName: "Batagor",
        lastName: "Soleh",
        email: "batagor.soleh@gmail.com",
      },
    ]);
  });
});
