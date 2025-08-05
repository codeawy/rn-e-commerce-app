import z from "zod";

export const signupSchema = z.object({
  fullName: z
    .string("Invalid Full Name")
    .min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid Email"),
  password: z
    .string("Invalid Password")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @, #, $, %, *, ?, &)"
    ),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const forgetPasswordSchema = z.object({
  email: z.email("Invalid Email"),
});

export type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;
