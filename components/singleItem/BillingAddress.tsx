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
import useDispatchselector from '@/state/redux/useDispatchselector';
import { addBilling } from '@/state/redux/reducers/cartSlice';
import { Database } from 'lucide-react';
import Paystack from '../Paystack';

const BillingAddress = () => {
  const { selector, dispatch } = useDispatchselector();

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

  const handleForm = (data: z.infer<typeof billing>) => {
    dispatch(addBilling(data));
  };

  const {
    formState: { isSubmitted, isSubmitting },
  } = form;

  if (isSubmitted) {
    return <Paystack />;
  } else {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className="flex gap-4 py-4">
            <div className="flex-1">
              <CountryDropdown form={form} />
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex gap-4 py-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-600"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-600"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                      className="border border-gray-600"
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
                    <Input
                      className="border border-gray-600"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 py-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-600"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-600"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button disabled={isSubmitting} className="w-full mt-6">
            {isSubmitting ? 'Wait...' : 'Pay Now'}
          </Button>
        </form>
      </Form>
    );
  }
};

export default BillingAddress;
