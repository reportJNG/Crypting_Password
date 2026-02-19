"use server";
import { prisma } from "@/lib/prisma";

export async function Delete_password(
  id: string,
): Promise<{ success?: string; error?: string }> {
  if (!id) {
    return { error: "Invalid ID" };
  }

  try {
    await prisma.passwords.delete({
      where: { id },
    });

    return { success: "Deleted successfully" };
  } catch (error) {
    return { error: "Failed to Fetch" };
  }
}
