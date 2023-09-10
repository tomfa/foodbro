import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4-korn!',
  description: '4-korn, 4-korn, 4-korn! ',
  openGraph: {
    images: [
      {
        url: 'https://github.com/Konfidens/konfidens/assets/1502702/874fc279-b1a3-486b-a673-6d30cd250be4',
        width: '1634',
        height: '860',
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
