import type { Metadata } from "next"
import { slc } from "@/locales/slc"
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: slc.header.title,
  description: slc.header.description,
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