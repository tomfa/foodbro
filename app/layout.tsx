import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Bro',
  description: 'Battle of the macros',
  openGraph: {
    images: [
      {
        url: 'https://github.com/Konfidens/konfidens/assets/1502702/c22f0830-4b42-4e11-896b-b4314b8f1191',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
