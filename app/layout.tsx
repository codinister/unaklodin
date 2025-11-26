import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNA Klodin",
  description: "african wears",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
