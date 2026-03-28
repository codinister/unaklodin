import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/state/query/QueryProvider';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import StoreProvider from '@/state/redux/StoreProvider';
import CurrencyBox from '@/components/CurrencyBox';



export const metadata: Metadata = {
  title: 'UNA Klodin',
  description: `U&A KLODIN is a company specialized in customizing T'shirts,website designing and graphic designs. With a team of young and dynamic professionals committed to provide you with excellent services. We are understanding, unique and multifaceted in ideas
  `,

  metadataBase: new URL('https://unaklodin.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'UNA Klodin',
    description: `U&A KLODIN is a company specialized in customizing T'shirts,website designing and graphic designs. With a team of young and dynamic professionals committed to provide you with excellent services. We are understanding, unique and multifaceted in ideas
    `,
    url: 'https://unaklodin.com',
    siteName: 'UNA Klodin',
    images: [
      {
        url: '/preview.jpg', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'UNA Klodin African fashion',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'UNA Klodin',
    description: `U&A KLODIN is a company specialized in customizing T'shirts,website designing and graphic designs. With a team of young and dynamic professionals committed to provide you with excellent services. We are understanding, unique and multifaceted in ideas`,
    images: ['/preview.jpg'],
  },
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
            <CurrencyBox />
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
