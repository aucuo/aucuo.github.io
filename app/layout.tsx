import type { Metadata } from "next";
import localFont from 'next/font/local';
import './styles/globals.scss';
import CustomCursor from "@/app/components/CustomCursor";
import { CursorProvider } from "@/app/context/CursorContext";
import {GoogleAnalytics} from "@next/third-parties/google";
import Script from 'next/script';

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
  keywords: "web developer, frontend developer, React developer, Next.js, TypeScript, JavaScript",
  authors: [{ name: "Jahor Šykaviec", url: "https://github.com/aucuo" }],
  creator: "Jahor Šykaviec",
  publisher: "Jahor Šykaviec",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/fav/favicon-32x32.png',
    shortcut: '/assets/fav/favicon-16x16.png',
    apple: '/assets/fav/apple-touch-icon.png',
  },
  manifest: '/assets/fav/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aucuo.vercel.app/',
    title: 'aucuo (Jahor Šykaviec) | Web Developer',
    description: 'A web developer with over three years of professional experience building websites and digital products.',
    siteName: 'aucuo Portfolio',
    images: [
      {
        url: '/assets/fav/og.jpg',
        width: 1200,
        height: 630,
        alt: 'aucuo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aucuo (Jahor Šykaviec) | Web Developer',
    description: 'A web developer with over three years of professional experience building websites and digital products.',
    images: ['/assets/fav/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_XpF1mh4x4GgX5OibzbMkg9wybJzcOYCOQCmVDK8q5M',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://aucuo.vercel.app/" />
      </head>
      <body className={labilGrotesk.className}>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jahor Šykaviec",
              "alternateName": "aucuo",
              "url": "https://aucuo.vercel.app/",
              "sameAs": [
                "https://github.com/aucuo",
                "https://t.me/aucuo",
                "https://www.instagram.com/aucuo/",
                "https://www.linkedin.com/in/aucuo/",
              ],
              "jobTitle": "Frontend Developer",
              "description": "A web developer with over three years of professional experience building websites and digital products.",
              "knowsAbout": ["Web Development", "React", "Next.js", "TypeScript", "JavaScript"]
            }
          `}
        </Script>
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
      <GoogleAnalytics gaId="G-MVS6RQSBLG" />
    </html>
  );
}
