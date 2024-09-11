import request from "supertest";
import app from "../index";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("GET /api/v1/users", () => {
  const sampleUsers = [
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
  ];

  beforeAll(async () => {
    await prisma.$connect();
  });

  beforeEach(async () => {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      await prisma.user.createMany({
        data: sampleUsers,
      });
    }
  });

  afterEach(async () => {
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return an array of user", async () => {
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      message: "OK",
      users: sampleUsers.map((item) => {
        return {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
        };
      }),
    });
  });
});
