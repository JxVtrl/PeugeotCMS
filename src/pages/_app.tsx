import { AppProvider, AuthProvider, DashboardProvider } from '@/context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '@/layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { CarsProvider } from '@/context/CarsContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <CarsProvider>
          <DashboardProvider>
            <AppProvider>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </AppProvider>
          </DashboardProvider>
        </CarsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
