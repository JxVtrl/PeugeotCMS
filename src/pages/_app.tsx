import { MenuProvider } from '@/context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '@/layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { CarsProvider } from '@/context/CarsContext';
import { AdminProvider } from '@/context/AdminContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CarsProvider>
        <MenuProvider>
          <AdminProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AdminProvider>
        </MenuProvider>
      </CarsProvider>
    </ChakraProvider>
  );
}
