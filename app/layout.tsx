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
    <html lang="en" data-qb-installed="true" suppressHydrationWarning={true}>
     <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
