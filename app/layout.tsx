import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/state/query/QueryProvider';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import StoreProvider from '@/state/redux/StoreProvider';

export const metadata: Metadata = {
  title: 'UNA Klodin',
  description: 'african wears',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-qb-installed="true" suppressHydrationWarning={true}>
      <body cz-shortcut-listen="true">
        <QueryProvider>
          <StoreProvider>
            <Nav />
            {children}
            <Footer />
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
