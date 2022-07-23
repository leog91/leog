import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  await prisma.$connect();

  const allRecipes = await prisma.recipes.findMany();

  await prisma.recipes.create({
    data: {
      description: "desc",
      image: "dasd",
      name: "nameeeeee",
      v: 3,
      ingredients: ["2", "3", "5"],
      newfield: "3223",
      newFieldBis: "OWWW",
    },
  });

  res.status(200).json(allRecipes);
}
