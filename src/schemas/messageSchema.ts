import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(10, { message: "message must contain at leat 10 characters" })
    .max(200, {
      message: "message must contain no more than 200 characters",
    }),
});
