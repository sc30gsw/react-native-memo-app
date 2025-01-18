import { z } from 'zod'

export const memoSchema = z.object({
  // biome-ignore lint/style/useNamingConvention: This is a schema definition, not a variable.
  content: z.string({ required_error: 'Content is required.' }),
})

export type MemoSchemaType = z.infer<typeof memoSchema>
