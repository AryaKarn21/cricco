import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
export async function GET() {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const [articles, tournaments, matches, players, events, subscribers, messages] = await Promise.all([
    prisma.article.count(),
    prisma.tournament.count(),
    prisma.match.count(),
    prisma.player.count(),
    prisma.event.count(),
    prisma.newsletterSubscriber.count(),
    prisma.contactMessage.count()
  ]);
  return NextResponse.json({ articles, tournaments, matches, players, events, subscribers, messages });
}

