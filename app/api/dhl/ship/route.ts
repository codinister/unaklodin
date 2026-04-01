// app/api/dhl/ship/route.ts
import { NextResponse } from "next/server";
import { dhlRequest } from "@/lib/dhl";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const data = await dhlRequest("/shipments", {
      plannedShippingDateAndTime: new Date().toISOString(),
      pickup: {
        isRequested: false,
      },
      productCode: "P", // Express Worldwide
      accounts: [{ number: "YOUR_DHL_ACCOUNT_NUMBER" }],

      customerDetails: {
        shipperDetails: {
          companyName: "Your Store",
          postalCode: "00233",
          cityName: "Accra",
          countryCode: "GH",
        },
        receiverDetails: body.receiver,
      },

      content: {
        packages: [
          {
            weight: body.weight,
          },
        ],
      },
    });

    return NextResponse.json({
      trackingNumber: data.shipmentTrackingNumber,
      label: data.documents?.[0]?.content,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}