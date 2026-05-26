'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailType from '@/types/emailType';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuSend } from 'react-icons/lu';
import { IoClose } from "react-icons/io5";

type EmailFormProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const EmailForm = ({ ...rest }: EmailFormProps) => {
  const form = useForm<z.infer<typeof emailType>>({
    resolver: zodResolver(emailType),
    defaultValues: {
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = (val: z.infer<typeof emailType>) => {
    console.log(val);
  };

  return (
    <div className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-100 w-80 fixed  z-55 p-8 bg-white">
      <button {...rest} title="Close" className="absolute cursor-pointer top-0 right-0 m-6">
        <IoClose />
      </button>

      <h5 className="mb-6 text-center">Get in touch</h5>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex gap-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              name="subject"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field}> </Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button className="py-2 cursor-pointer rounded-2xl bg-primary border border-primary hover:bg-white hover:text-primary w-full flex gap-2 items-center justify-center ">
            Send message <LuSend />
          </button>
        </form>
      </Form>
    </div>
  );
};

export default EmailForm;
