import { z } from "zod";

export const createEmployeeSchema = z.object({
    name: z
        .string()
        .refine(value => typeof value === 'string', { message: "El nombre debe ser un String" })
        .nonempty({ message: "El nombre es obligatorio" }),
    email: z
        .string()
        .nonempty({ message: "El email es obligatorio" })
        .email({ message: "El email no es válido" }),
    phone: z
        .string()
        .nonempty({ message: "El teléfono es obligatorio" })
        .min(10, { message: "El teléfono debe tener al menos 10 caracteres" }),
});

export const updateEmployeeSchema = z.object({
    name: z
        .string()
        .refine(value => typeof value === 'string', { message: "El nombre debe ser un String" })
        .nonempty({ message: "El nombre es obligatorio" })
        .optional(),
    email: z
        .string()
        .nonempty({ message: "El email es obligatorio" })
        .email({ message: "El email no es válido" })
        .optional(),
    phone: z
        .string()
        .nonempty({ message: "El teléfono es obligatorio" })
        .min(10, { message: "El teléfono debe tener al menos 10 caracteres" })
        .optional(),
});