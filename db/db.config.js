import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query"],
});
// this is the instance of the prisma used for the application

export default prisma;