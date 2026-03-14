'use client';

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import CartButton from './CartButton';
import CountryDropdown from '../CountryDropdown';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { billing } from '@/schema/schemaTypes';
import { z } from 'zod';
import { Button } from '../ui/button';

const BillingAddress = () => {
  const form = useForm<z.infer<typeof billing>>({
    resolver: zodResolver(billing),
    defaultValues: {
      country: '',
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      city: '',
      phone: '',
    },
  });

  const handleForm = (value: z.infer<typeof billing>) => {
    console.log(value);
  };

  // country
  // firstname
  // lastname
  // email
  // address
  // city
  // phone

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)}>
        <CountryDropdown form={form} />

        <div className="flex gap-4 py-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


<div className="py-4">
        <FormField
        
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter address with house number"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
</div>


<div className="py-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="flex gap-4 py-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

      <Button className="w-full">Pay Now</Button>
      </form>
    </Form>
  );
};

export default BillingAddress;
