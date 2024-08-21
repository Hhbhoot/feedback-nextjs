import { z } from "zod";

export const signInSchema = z.object({
    username: z.string().min(5, { message: "username must be at least 5 characters long" }).max(20, { message: "username must be less than or equal to 20 characters" }).regex(/^[a-zA-Z0-9_]+$/, { message: "username must not contain special characters" }),

    password: z.string().min(8, { message: "password must be at least 8 characters long" }).max(20, { message: "password must be less than or equal to 20 characters" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, {
        message: "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    }),

    email : z.string().email()
})