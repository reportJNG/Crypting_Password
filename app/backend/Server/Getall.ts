"use server";
import { prisma } from "@/lib/prisma";
import { Create_Password } from "@/app/frontend/schemas/createnew_password";

export async function createnew(data: Create_Password) {
  if (!data) {
    return { error: "No data provided" };
  }
}
