import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Beauty Studio",
  description: "Professional laser beauty treatments tailored for you. Book your appointment today.",
  openGraph: {
    title: "Laser Beauty Studio",
    description: "Professional laser beauty treatments tailored for you. Book your appointment today.",
    url: "https://laserbeauty.taplink.ws/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dnxrobolb/image/upload/v1746469470/favicon_vfsqba.ico", // Add your image URL here
        width: 800,
        height: 600,
        alt: "Laser Beauty Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Beauty Studio",
    description: "Professional laser beauty treatments tailored for you. Book your appointment today.",
    images: ["https://res.cloudinary.com/dnxrobolb/image/upload/v1746469470/favicon_vfsqba.ico"], 
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
        <link
          rel="icon"
          href="https://res.cloudinary.com/dnxrobolb/image/upload/v1746469470/favicon_vfsqba.ico"
          type="image/x-icon"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat min-h-screen flex flex-col">
        <Header />
        <main className="p-4 flex-grow bg-dots">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
