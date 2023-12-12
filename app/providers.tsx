'use client';

import ToastProvider from '@/components/context/ToastContext';
import Navbar from '@/components/layouts/navbar';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}
