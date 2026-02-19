import { prisma } from "@/lib/prisma";

export async function Delete_password(
  id: string,
): Promise<{ success?: string; error?: string }> {
  if (!id) {
    return { error: "Failed To Fetch" };
  }
  try {
    const result = await prisma.passwords.findUnique({
      where: { id },
    });

    if (!result) {
      return { error: "Failed To Fetch" };
    }
    const result2 = await prisma.passwords.delete({
      where: { id },
    });

    if (!result2) {
      return { error: "Failed To Fetch" };
    }
    return { success: "Deleted Succesffuly" };
  } catch (err) {
    return { error: "Failed To Fetch" };
  }
}
