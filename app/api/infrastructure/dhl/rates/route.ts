// app/api/dhl/rates/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();



    // 🔐 Encode API key + secret
    const auth = Buffer.from(
      `apM8bU5yE1kC7j:V#5kO@5kI#0lZ^2x`
    ).toString("base64");

    const params = new URLSearchParams({
      accountNumber: '1004667792',
      originCountryCode: body.originCountryCode,
      originPostalCode: body.originPostalCode,
      originCityName: body.originCityName,
      destinationCountryCode: body.destinationCountryCode,
      destinationPostalCode: body.destinationPostalCode,
      destinationCityName: body.destinationCityName,
      weight: String(body.weight),
      length: String(body.length || 10),
      width: String(body.width || 10),
      height: String(body.height || 10),
      plannedShippingDate: new Date().toISOString().split("T")[0],
      isCustomsDeclarable:
        body.originCountryCode !== body.destinationCountryCode
          ? "true"
          : "false",
      unitOfMeasurement: "metric",
      requestEstimatedDeliveryDate: "true",
    });

    const response = await fetch(
      `https://api.dhl.com/mydhlapi/rates?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-version": "3.2.0",
          Authorization: `Basic ${auth}`,

          // REQUIRED DHL HEADERS
          "Message-Reference": crypto.randomUUID(),
          "Message-Reference-Date": new Date().toUTCString(),
          "Plugin-Name": "MyEcommerceApp",
          "Plugin-Version": "1.0",
          "Shipping-System-Platform-Name": "NodeJS",
          "Shipping-System-Platform-Version": process.version,
          "Webstore-Platform-Name": "NextJS",
          "Webstore-Platform-Version": "14",
        },
      }
    );

    const data = await response.json();

  

    // ❌ Handle DHL errors
    if (!response.ok) {
      return Response.json(
        {
          success: false,
          error: data,
        },
        { status: response.status }
      );
    }

    // ✅ Format clean response
    const products = data.products?.map((p: any) => ({
      service: p.productName,
      code: p.productCode,
      price: p.totalPrice?.[0]?.price,
      currency: p.totalPrice?.[0]?.priceCurrency,
      deliveryDate:
        p.deliveryCapabilities?.estimatedDeliveryDateAndTime,
    }));

    return Response.json({
      success: true,
      rates: products,
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Server error", details: error },
      { status: 500 }
    );
  }
}