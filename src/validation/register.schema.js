import { z } from "zod";

const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required."),

  middleName: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required."),

  email: z
    .string()
    .trim()
    .email("Enter a valid university email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),

  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      {
        message:
          "You must accept the Terms of Service and Privacy Policy.",
      }
    ),
});

export default registerSchema;