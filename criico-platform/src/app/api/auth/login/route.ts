import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
const schema = z.object({email:z.string().email().max(254),password:z.string().min(1).max(200)});
export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(()=>null));
  if (!parsed.success) return NextResponse.json({error:"Enter a valid email and password."},{status:400});
  const user = await prisma.user.findUnique({where:{email:parsed.data.email.toLowerCase().trim()}});
  if (!user || !(await bcrypt.compare(parsed.data.password,user.passwordHash))) {
    return NextResponse.json({error:"Invalid email or password."},{status:401});
  }
  await createSession(user);
  return NextResponse.json({ok:true});
}
