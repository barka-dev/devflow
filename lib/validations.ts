import {z} from "zod";

export const SignInSchema = z.object({
    email: z
        .string()
        .min(1, {message: "Email is required."})
        .email({message: "Please porvide a valid email address."}),
    
    password: z
        .string()
        .min(6, {message: "Password must be at least 6 characters."})
        .max(100, {message: "Password must be at most 100 characters."})
})

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, {message: "Username must be at least 2 characters."})
        .max(30, {message: "Username must be at most 30 characters."})
        .regex(/^[a-zA-Z0-9_]+$/, {message: "Username can only contain letters, numbers, and underscores."}),

    name: z
        .string()
        .min(1, {message: "Name is required."})
        .max(50, {message: "Name must be at most 50 characters."})
        .regex(/^[a-zA-Z\s]+$/, {message: "Username can only contain letters, numbers, and underscores."}),

    email: z
        .string()
        .min(1, {message: "Email is required."})
        .email({message: "Please porvide a valid email address."}),
    
    password: z
        .string()
        .min(6, {message: "Password must be at least 6 characters."})
        .max(100, {message: "Password must be at most 100 characters."})
        .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter."})
        .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter."})
        .regex(/[0-9]/, {message: "Password must contain at least one number."})
        .regex(/[^a-zA-Z0-9]/, {message: "Password must contain at least one special character."}), 
    
})