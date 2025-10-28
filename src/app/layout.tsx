import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Laser&Beauty By Olga",
  description: "Professional laser beauty treatments tailored for you. Book your appointment today.",
  icons: {
    icon: "https://res.cloudinary.com/dnxrobolb/image/upload/v1746543200/favicon_jpl0nh_amjjlo.png",
  },
  openGraph: {
    title: "Laser&Beauty By Olga",
    description: "Professional laser beauty treatments tailored for you. Book your appointment today.",
    url: "https://laserbeauty.taplink.ws/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dnxrobolb/image/upload/v1746538408/favicon_jpl0nh.png",
        width: 800,
        height: 600,
        alt: "Laser&Beauty By Olga",
      },
    ],
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=location_on" />
      </head>
      <body className={`${montserrat.className} flex flex-col min-h-screen bg-grad`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
