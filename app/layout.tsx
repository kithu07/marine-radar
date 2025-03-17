import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import { BackgroundBubbles } from '@/components/BackgroundBubbles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marine Radar - Track Any Vessel, Anywhere',
  description: 'Stay ahead of the waves with Marine Radar - the ultimate vessel tracking solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <BackgroundBubbles />
        <div className="relative min-h-screen">
          <Navbar />
          <div className="flex flex-col md:flex-row">
            {/* Vertical Line - Hidden on mobile */}
            <div className="hidden md:block w-[2px] mt-72 ml-10 border-r-4 border-[#0A84FF] bg-[#0A84FF] shadow-[0_0_20px_#0A84FF]"></div>
            <div className="flex-1 pl-4 md:pl-10">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

