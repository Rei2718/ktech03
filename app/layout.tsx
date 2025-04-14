// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";
import SplashScreenWrapper from "./components/SplashScreenWrapper";

// Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'K-Tech | 立命館慶祥高等学校IT同好会',
    template: '%s | K-Tech',
  },
  description:
    'K-Tech is a student-driven creative tech club exploring 3DCG, web development, AI, and media art. Join us to turn your passion into real-world innovation.',
  keywords: [
    'K-Tech',
    'Ritsumei',
    'Creative Technology',
    'Student Tech Club',
    '3DCG',
    'Web Development',
    'Machine Learning',
    'AI',
    'Media Art',
    'Data Science',
    'App Development',
    'Innovation',
    '立命館慶祥高等学校',
  ],
  metadataBase: new URL('https://keisho.tech/'),
  openGraph: {
    title: 'K-Tech | RitsumeikanKeisho K-Tech',
    description:
      'Explore cutting-edge creativity with K-Tech — where students turn ideas into impact through technology.',
    url: 'https://keisho.tech/',
    siteName: 'K-Tech',
    images: [
      {
        url: 'logo.png',
        width: 630,
        height: 630,
        alt: 'K-Tech Official Visual',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: 'https://keisho.tech/',
    languages: {
      'ja-JP': 'https://keisho.tech/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="K-Tech" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <SplashScreenWrapper>{children}</SplashScreenWrapper>
        <PrelineScriptWrapper />
      </body>
    </html>
  );
}