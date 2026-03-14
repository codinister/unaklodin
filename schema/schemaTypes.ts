import { z } from 'zod';

export const billing = z.object({
  country: z.string().min(1, 'Country field required!'),
  firstname: z.string().min(1, 'First name field required!'),
  lastname: z.string().min(1, 'Last name field required!'),
  email: z.string().email('Invalid email address!'),
  address: z.string().min(1, 'Address field required!'),
  city: z.string().min(1, 'City field required!'),
  phone: z
    .string()
    .min(10, 'Phone number too short')
    .regex(/^[0-9+]+$/, 'Invalid phone number'),
});
