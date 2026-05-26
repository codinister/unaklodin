import { z } from 'zod';

export default z.object({
  email: z.string().email('Valid email required!'),
  phone: z.string().min(10, 'Valid phone number required!'),
  subject: z.string().min(1, 'Subject field required!'),
  message: z.string().min(2, 'Message field required!'),
});
