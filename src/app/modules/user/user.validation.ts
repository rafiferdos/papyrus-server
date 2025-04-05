import { z } from 'zod'
import { userRole } from './user.constant'

const userValidationShcema = z.object({
  name: z
    .string({ required_error: 'Name is required!' })
    .trim()
    .min(1, 'Name cannot be empty or contain only spaces')
    .refine((value) => !/^\s*$/.test(value), {
      message: 'Name cannot contain only spaces',
    }),
  email: z.string({ required_error: 'Email is required.' }).email(),
  role: z
    .enum([...(userRole as [string, ...string[]])], {
      errorMap: () => ({
        message: 'Invalid role! Allowed roles are admin or user',
      }),
    })
    .optional(),
  password: z
    .string({ required_error: 'Password is required!' })
    .trim()
    .min(1, 'Password cannot be empty or only spaces')
    .refine((password) => !/^\s*$/.test(password), {
      message: 'Password cannot contain only spaces',
    }),
  address: z.string({ required_error: 'Password is required!' }).optional(),
})
const updateUserValidationShcema = z.object({
  name: z
    .string({ required_error: 'Name is required!' })
    .trim()
    .min(1, 'Name cannot be empty or contain only spaces')
    .refine((value) => !/^\s*$/.test(value), {
      message: 'Name cannot contain only spaces',
    })
    .optional(),
  email: z.string({ required_error: 'Email is required.' }).email().optional(),
  role: z
    .enum([...(userRole as [string, ...string[]])], {
      errorMap: () => ({
        message: 'Invalid role! Allowed roles are admin or user',
      }),
    })
    .optional(),
  password: z
    .string({ required_error: 'Password is required!' })
    .trim()
    .min(1, 'Password cannot be empty or only spaces')
    .refine((password) => !/^\s*$/.test(password), {
      message: 'Password cannot contain only spaces',
    }),
  address: z.string({ required_error: 'Password is required!' }).optional(),
})

export const UserValidation = {
  userValidationShcema,
  updateUserValidationShcema,
}
