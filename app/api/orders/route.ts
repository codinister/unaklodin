import InvoiceEmail from '@/components/email/InvoiceEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend('re_8hLJ5hPo_N9LASQEP27FQ7H37ohmqhtRs');
export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const cce = 'codinister@gmail.com';
    resend.emails.send({
      from: 'sales@unaklodin.com',
      to: data.email,
      cc: cce,
      subject: 'UNA Klodin Order Invoice',
      react: InvoiceEmail({
        customerName: data?.customerName,
        orderId: data?.orderId,
        items: data?.items,
        total: data?.total,
        companyName: data?.companyName,
        companyLogo: data?.companyLogo,
        phone: data?.phone,
        city: data?.city,
        address: data?.address,
        country: data?.country,
        companyLocation: data?.companyLocation,
        companyPhone: data?.companyPhone, 
        date: data?.date, 
        currency: data?.currency
      }),
    });

    return NextResponse.json([]);
  } catch (error) {
    console.log(error);
  }
}
