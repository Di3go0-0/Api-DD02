import {z} from 'zod';

export const registerSchema = z.object({
    username: z
        .string({
            required_error: "The username is required",
        })
        .min(5),
    email: z.string({
        required_error: "The email is required",
    }).email({ message: "The email is invalid" }),
    password: z
        .string({
            required_error: "The password is required",
        })
        .refine(
            (password) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password),
            {
                message:
                    "The password must contain at least one uppercase letter, one lowercase letter, and one number",
            }
        ),
    role: z
        .string({
            required_error: "The role is required",
        })
        .refine(
            (role) => ['user', 'checker', 'admin'].includes(role),
            {
                message: "The role must be 'user', 'checker', or 'admin'",
            }
        ),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "The email is required",
    }).email({ message: "The email is invalid" }),
    password: z.string({
        required_error: "The password is required",
    }),
});
        