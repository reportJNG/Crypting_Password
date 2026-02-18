"use server";
import { prisma } from "@/lib/prisma";
import { Create_Password } from "@/app/frontend/schemas/createnew_password";

export async function create(data: Create_Password) {
  if (!data) {
    return { error: "No data provided" };
  }

  const name = data.name.replace(/[^a-zA-Z0-9]/g, "").trim();
  const password = data.password.replace(/[^a-zA-Z0-9]/g, "").trim();

  if (name.length < 3 || name.length > 20) {
    return { error: "Name must be between 3 and 20 characters" };
  }
  if (password.length < 8 || password.length > 16) {
    return { error: "Password must be between 8 and 16 characters" };
  }

  try {
    await prisma.passwords.create({
      data: { name, password },
    });
    return { success: "Generated Successfully" };
  } catch (err) {
    return { error: "Something went wrong" };
  }
}
