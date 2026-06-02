import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Samarth Choudhary | Data Science Portfolio",
  description:
    "Enthusiastic B.Tech Data Science student skilled in Python, SQL, Machine Learning, Data Analysis, and Data Visualization. Explore projects, skills, and experience.",
  keywords: [
    "Samarth Choudhary",
    "Data Science",
    "Machine Learning",
    "Python",
    "Portfolio",
    "Data Analyst",
    "AI Developer",
    "Web Developer",
  ],
  authors: [{ name: "Samarth Choudhary" }],
  creator: "Samarth Choudhary",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://samarthchoudhary.dev",
    siteName: "Samarth Choudhary Portfolio",
    title: "Samarth Choudhary | Data Science Portfolio",
    description:
      "Transforming Data Into Intelligent Solutions Through AI, Analytics & Modern Development. Explore my projects, skills, and professional journey.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samarth Choudhary – Data Science Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarth Choudhary | Data Science Portfolio",
    description:
      "Transforming Data Into Intelligent Solutions Through AI, Analytics & Modern Development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
