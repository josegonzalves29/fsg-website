import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Builders in Port Shepstone & the ${site.serviceArea}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
