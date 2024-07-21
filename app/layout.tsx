import { Open_Sans, Roboto_Slab } from "next/font/google";
import { WEBSITE_HOST_URL } from "./sitemap";
import "./globals.css";
import Footer from "./components/Footer";
import HeaderLayout from "./components/header";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto_slab = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const meta = {
  title: "Mindful eating",
  description: "Transform Your Health, One Bite at a Time",
  image: `${WEBSITE_HOST_URL}/opengraph-image.png`,
};

export const metadata = {
  metadataBase: new URL(`${WEBSITE_HOST_URL}`),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,

  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "website",
    images: [{ url: meta.image }],
  },

  twitter: {
    title: meta.title,
    description: meta.description,
    images: [{ url: meta.image }],
    card: "summary_large_image",
  },

  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.className}`}>
        <HeaderLayout />

        <div className="flex min-h-dvh flex-col">
          <main className="grow">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
