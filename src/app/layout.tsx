import type { Metadata } from "next";
import { Google_Sans, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

/* Brand typefaces. The CSS variables feed --font-sans / --font-serif in
   globals.css; the fallback stacks match the old :root placeholders so
   nothing shifts if a font fails to load. */
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "pause. — Speciality Coffee & Bakery, Kings Heath",
  description:
    "Pause is a neighbourhood speciality coffee shop and bakery on Poplar Road, Kings Heath, Birmingham. Home of the Cinnabuffin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* suppressHydrationWarning: the pre-paint theme script below sets
       data-theme before React hydrates, which is expected */
    <html
      lang="en"
      className={`${googleSans.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the persisted invert theme before first paint (no flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("pause-theme")==="inverted")document.documentElement.dataset.theme="inverted"}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
