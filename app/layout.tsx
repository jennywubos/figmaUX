import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZhengyanWU CloudPlatform - Modern Cloud Services',
  description: 'A comprehensive cloud service platform with enterprise-grade infrastructure, analytics, and management tools.',
  keywords: ['cloud', 'platform', 'services', 'infrastructure', 'analytics', 'management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
          {children}
        </div>
      </body>
    </html>
  )
} 