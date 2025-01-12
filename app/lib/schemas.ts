import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
  sex: z.enum(["MALE", "FEMALE", "OTHER"]),
  degree: z.coerce.number(),
  semester: z.coerce.number()
})
