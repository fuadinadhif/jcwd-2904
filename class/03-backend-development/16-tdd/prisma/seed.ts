import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      firstName: "Teh",
      lastName: "Sosro",
      email: "teh.sosro@gmail.com",
    },
  });

  await prisma.user.create({
    data: {
      firstName: "Batagor",
      lastName: "Soleh",
      email: "batagor.soleh@gmail.com",
    },
  });
}

seed()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
