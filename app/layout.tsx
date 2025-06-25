import type { Metadata } from "next";
import localFont from 'next/font/local';
import './styles/globals.scss';
import CustomCursor from "@/app/components/CustomCursor";
import { CursorProvider } from "@/app/context/CursorContext";

const labilGrotesk = localFont({
  src: [
    { path: '../public/assets/fonts/LG/LabilGrotesk-Thin.ttf', weight: '100' },
    { path: '../public/assets/fonts/LG/LabilGrotesk-Light.ttf', weight: '300' },
    { path: '../public/assets/fonts/LG/LabilGrotesk-Regular.ttf', weight: '400' },
    { path: '../public/assets/fonts/LG/LabilGrotesk-Medium.ttf', weight: '500' },
    { path: '../public/assets/fonts/LG/LabilGrotesk-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jahor Šykaviec (aucuo) | Web Developer Portfolio",
  description: "A web developer with over five years of professional experience building websites and digital products that make an impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={labilGrotesk.className}>
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
