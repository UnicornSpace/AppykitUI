import type { Metadata } from "next";
import {
  BBH_Sans_Bogle,
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import MainFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Source_Serif_4({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  // subsets: ["latin", "latin-ext", "greek"],
});

const bbh = BBH_Sans_Bogle({
  variable: "--font-bbh",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const baseUrl = "https://appykit-ui.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AppykitUI - Flutter UI Kit & Development Resources",
    template: "%s | AppykitUI",
  },
  description:
    "Discover Flutter UI components, courses, and curated resources for mobile developers. Build beautiful apps faster with AppykitUI.",
  keywords: [
    "Flutter",
    "UI Kit",
    "Mobile Development",
    "Dart",
    "Flutter Components",
    "Flutter Resources",
    "Flutter Course",
    "App Development",
  ],
  authors: [{ name: "AppykitUI Team", url: baseUrl }],
  creator: "AppykitUI",
  publisher: "AppykitUI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "AppykitUI",
    title: "AppykitUI - Flutter UI Kit & Development Resources",
    description:
      "Discover Flutter UI components, courses, and curated resources for mobile developers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppykitUI - Flutter UI Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppykitUI - Flutter UI Kit & Development Resources",
    description:
      "Discover Flutter UI components, courses, and curated resources for mobile developers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when ready
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${bbh.variable} 
    ${poppins.variable} font-poppins`}
    >
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <body
        className={` 
            antialiased flex flex-col min-h-screen`}
      >
        <RootProvider>{children}</RootProvider>
        <MainFooter />
      </body>
    </html>
  );
}
