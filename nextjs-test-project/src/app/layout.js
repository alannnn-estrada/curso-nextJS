import { Navbar } from "../components/Navbar"
import {
  Roboto
} from "next/font/google"
import "./globals.css"

export const metadata = {
  title: 'Test website',
  description: 'Generated by Next.js',
  keywords: 'next.js, react',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
