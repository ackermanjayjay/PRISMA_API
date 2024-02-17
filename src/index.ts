import { Prisma, PrismaClient } from "@prisma/client";
import { error } from "console";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get(`/users/:id`, async (req, res) => {
    const { id }: { id?: string } = req.params
  
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    })
    if (post){

      res.json({"Message":post})
      console.log({"Berhasil wak":post})
    }
    else{
      return null
    }
    
  })

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
