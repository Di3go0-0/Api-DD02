import { z } from "zod";

export const createEmployeeSchema = z.object({
    name: z
        .string()
        .refine(value => typeof value === 'string', { message: "El nombre debe ser un String" })
        .refine(value => value.length > 0, { message: "El nombre es obligatorio" }),
    email: z
        .string()
        .refine(value => value.length > 0, { message: "El email es obligatorio" })
        .refine(value => {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(value);
        }, { message: "El email no es válido" }),
    phone: z
        .string()
        .refine(value => value.length >= 10, { message: "El teléfono es obligatorio y debe tener al menos 10 caracteres" }),
});
export const updateEmployeeSchema = z.object({
    name: z
        .string()
        .refine(value => typeof value === 'string', { message: "El nombre debe ser un String" })
        .refine(value => value.length > 0, { message: "El nombre es obligatorio" })
        .optional(),
    email: z
        .string()
        .refine(value => value.length > 0, { message: "El email es obligatorio" })
        .refine(value => {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(value);
        }, { message: "El email no es válido" })
        .optional(),
    phone: z
        .string()
        .refine(value => value.length >= 10, { message: "El teléfono es obligatorio y debe tener al menos 10 caracteres" })
        .optional(),
});
