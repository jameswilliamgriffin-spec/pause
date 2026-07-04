import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
