// anywhere in your frontend
export default async function getRates() {
  try {
    const res = await fetch("/api/dhl/rates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receiver: {
          postalCode: "10001",
          cityName: "New York",
          countryCode: "US",
        },
        weight: 2,
      }),
    });

    // if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    console.log("DHL Rates Response:", data);
    return data;
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}