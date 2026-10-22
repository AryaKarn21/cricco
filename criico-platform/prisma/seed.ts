import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

const Role = { USER: "USER", EDITOR: "EDITOR", SCOREKEEPER: "SCOREKEEPER", ADMIN: "ADMIN" } as const;
const ArticleStatus = { DRAFT: "DRAFT", PUBLISHED: "PUBLISHED" } as const;

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD in .env before seeding.");
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: Role.ADMIN },
    create: { name: "CRIICO Administrator", email, passwordHash, role: Role.ADMIN }
  });
  await prisma.article.upsert({
    where: { slug: "welcome-to-criico" },
    update: {},
    create: {
      title: "Welcome to CRIICO",
      slug: "welcome-to-criico",
      excerpt: "A starting point for stories from Nepal's cricket community.",
      body: "This is starter content. Replace it with a verified CRIICO story before publishing.",
      category: "Announcement",
      authorName: "CRIICO Team",
      status: ArticleStatus.DRAFT
    }
  });
  console.log("Seed complete. Admin account created/updated.");
}
main().finally(() => prisma.$disconnect());
