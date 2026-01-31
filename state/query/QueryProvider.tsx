'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type QueryProviderType = {
  children: React.ReactNode;
};
const QueryProvider = ({ children }: QueryProviderType) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
