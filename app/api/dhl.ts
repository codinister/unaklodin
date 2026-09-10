// lib/dhl.ts
const BASE_URL = process.env.DHL_BASE_URL!;
const API_KEY = process.env.DHL_CLIENT_ID!;
const API_SECRET = process.env.DHL_CLIENT_SECRET!;

export async function dhlRequest(endpoint: string, data: any) {
  const credentials = Buffer.from(`apM8bU5yE1kC7j:V#5kO@5kI#0lZ^2x`).toString("base64");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
}