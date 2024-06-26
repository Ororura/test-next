import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import './ResetStyles.css';
import StoreProvider from './StoreProvider';
import Header from '@/shared/ui/header/Header';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valorant boosting',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header>{children}</Header>
        </body>
      </html>
    </StoreProvider>
  );
}
