import { PrismaClient, Prisma } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function inputData() {
  console.log("Start seeding...");

  const salt = await genSalt(10);

  const adminRole = await prisma.role.create({
    data: {
      position: "admin",
    },
  });

  const authorRole = await prisma.role.create({
    data: {
      position: "author",
    },
  });

  const userData: Prisma.UserCreateInput[] = [
    {
      name: "Momod",
      email: "momod@gmail.com",
      password: await hash("supermomod", salt),
      role: {
        connect: {
          id: adminRole.id,
        },
      },
    },
    {
      name: "Anies Baswedan",
      email: "anies.baswedan@gmail.com",
      password: await hash("aniespass", salt),
      posts: {
        create: [
          {
            title: "Bismillah DKI 1",
            content: "Deklarasi Cagub dan Cawagub DKI Jakarta tahun 2023",
          },
        ],
      },
      role: {
        connect: { id: authorRole.id },
      },
    },
    {
      name: "Sohibul Iman",
      email: "sohibul.iman@gmail.com",
      password: await hash("sohibpass", salt),
      posts: {
        create: [
          {
            title: "Ayo Jakarta Lebih Baik",
            content: "Konten sama kayak Anies",
          },
        ],
      },
      role: {
        connect: { id: authorRole.id },
      },
    },
    {
      name: "Ridwan Kamil",
      email: "ridwan.kamil@gmail.com",
      password: await hash("ridwanpass", salt),
      posts: {
        create: [
          {
            title: "Surprise Pasti Menang",
            content: "Dengan dukungan Jokowi dan Prabowo bismillah saya bisa!",
          },
        ],
      },
      role: {
        connect: { id: authorRole.id },
      },
    },
  ];

  for (const element of userData) {
    const user = await prisma.user.create({
      data: element,
    });

    console.log(`Succesfully create user with id: ${user.id}`);
  }

  console.log("Seeding data finished!");
}

inputData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
