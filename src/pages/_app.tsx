import { AppProvider, AuthProvider, DashboardProvider } from '@/context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '@/layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <DashboardProvider>
          <AppProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AppProvider>
        </DashboardProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
