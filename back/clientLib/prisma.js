const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query"],
});

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;
