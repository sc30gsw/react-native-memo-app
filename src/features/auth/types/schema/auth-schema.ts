import { z } from 'zod'

export const authSchema = z.object({
  email: z
    // biome-ignore lint/style/useNamingConvention: This is a schema definition, not a variable.
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
    .max(128, 'Email must be less than 128 characters long'),
  password: z
    // biome-ignore lint/style/useNamingConvention: This is a schema definition, not a variable.
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long')
    .max(128, 'Password must be less than 128 characters long')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least one letter and one number',
    ),
})

export type AuthSchemaType = z.infer<typeof authSchema>
