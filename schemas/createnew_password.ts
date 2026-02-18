import { z } from "zod";

export const create_password = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3")
    .max(20, "Name mustbe max 20")
    .transform((val) => val.replace(/[^a-zA-Z0-9]/g, "")),

  password: z
    .string()
    .min(8, "Password must be at least 8")
    .max(16, "Password must be max 16")
    .transform((val) => val.replace(/[^a-zA-Z0-9]/g, "")),
});

export type Create_Password = z.infer<typeof create_password>;
