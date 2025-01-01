import type { Metadata } from "next"
import { SiteMeta } from "@/locales/sitemeta"
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: SiteMeta.header.title,
  description: SiteMeta.header.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lo">
      <body>
        {children}
      </body>
    </html>
  )
}