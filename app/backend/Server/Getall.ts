"use server";
import { prisma } from "@/lib/prisma";
import { Passwords } from "@/lib/generated/prisma";

export async function getAllPasswords(): Promise<{
  data: Passwords[];
  error?: string;
}> {
  try {
    const data: Passwords[] = await prisma.passwords.findMany();
    return { data };
  } catch (err) {
    console.error(err);
    return { data: [], error: "Failed to fetch" };
  }
}
