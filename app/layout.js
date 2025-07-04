import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Lotze | Full Stack Developer',
  description: 'Computer Science student at Boston University. Creator of AperturePM - a production SaaS platform. Specializing in Next.js, React, and full-stack development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" />
        {/* Or use PNG/SVG: */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body className={inter.className + ' font-sans'} style={{ fontFamily: 'Inter, Montserrat, sans-serif' }}>{children}</body>
    </html>
  )
}
