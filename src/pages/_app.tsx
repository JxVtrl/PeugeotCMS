import { AppProvider } from '@/context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '@/layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { CarsProvider } from '@/context/CarsContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CarsProvider>
          <AppProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AppProvider>
      </CarsProvider>
    </ChakraProvider>
  );
}
