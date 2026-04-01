// app/api/dhl/rates/route.ts
import { NextResponse } from "next/server";
import { dhlRequest } from "@/lib/dhl";

const formatDHLDate = () => {
  const d = new Date();
  return d.toISOString().split(".")[0] + "GMT+00:00"; // remove milliseconds
};

export async function POST(req: Request) {
  const body = await req.json();

  // Validate incoming body
  const receiver = body.receiver;
  const weight = Number(body.weight) || 1;

  if (!receiver?.postalCode || !receiver?.cityName || !receiver?.countryCode) {
    return NextResponse.json(
      { error: "Receiver must have postalCode, cityName, and countryCode" },
      { status: 400 }
    );
  }

  try {
    const payload = {
      customerDetails: {
        shipperDetails: {
          postalCode: "00233",
          cityName: "Accra",
          countryCode: "GH",
        },
        receiverDetails: {
          postalCode: receiver.postalCode,
          cityName: receiver.cityName,
          countryCode: receiver.countryCode,
        },
      },
      plannedShippingDateAndTime: formatDHLDate(),
      unitOfMeasurement: "metric",
      isCustomsDeclarable: false,
      packages: [
        {
          weight,
          dimensions: { length: 10, width: 10, height: 10 },
        },
      ],
    };

    const data = await dhlRequest("/rates", payload);
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("DHL Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}