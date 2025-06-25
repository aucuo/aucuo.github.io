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
  title: "aucuo (Jahor Šykaviec) | Web Developer",
  description: "A web developer with over three years of professional experience building websites and digital products.",
  icons: {
    icon: '/assets/fav/favicon-32x32.png',
    shortcut: '/assets/fav/favicon-16x16.png',
    apple: '/assets/fav/apple-touch-icon.png',
  },
  manifest: '/assets/fav/site.webmanifest',
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
