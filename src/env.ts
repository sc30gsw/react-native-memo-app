import { createEnv } from '@t3-oss/env-core/dist'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'EXPO_PUBLIC_',

  client: {
    EXPO_PUBLIC_FB_API_KEY: z.string({
      required_error: 'FB_API_KEY is required',
    }),
    EXPO_PUBLIC_FB_AUTH_DOMAIN: z.string({
      required_error: 'FB_AUTH_DOMAIN is required',
    }),
    EXPO_PUBLIC_FB_PROJECT_ID: z.string({
      required_error: 'FB_PROJECT_ID is required',
    }),
    EXPO_PUBLIC_FB_STORAGE_BUCKET: z.string({
      required_error: 'FB_STORAGE_BUCKET is required',
    }),
    EXPO_PUBLIC_FB_MESSAGING_SENDER_ID: z.string({
      required_error: 'FB_MESSAGING_SENDER_ID is required',
    }),
    EXPO_PUBLIC_FB_APP_ID: z.string({
      required_error: 'FB_APP_ID is required',
    }),
    EXPO_PUBLIC_FB_MEASUREMENT_ID: z.string({
      required_error: 'FB_MEASUREMENT_ID is required',
    }),
  },

  runtimeEnvStrict: {
    EXPO_PUBLIC_FB_API_KEY: process.env.EXPO_PUBLIC_FB_API_KEY,
    EXPO_PUBLIC_FB_AUTH_DOMAIN: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    EXPO_PUBLIC_FB_PROJECT_ID: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
    EXPO_PUBLIC_FB_STORAGE_BUCKET: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
    EXPO_PUBLIC_FB_MESSAGING_SENDER_ID:
      process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
    EXPO_PUBLIC_FB_APP_ID: process.env.EXPO_PUBLIC_FB_APP_ID,
    EXPO_PUBLIC_FB_MEASUREMENT_ID: process.env.EXPO_PUBLIC_FB_MEASUREMENT_ID,
  },

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  // emptyStringAsUndefined: true,
})
