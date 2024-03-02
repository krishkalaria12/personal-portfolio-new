import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
