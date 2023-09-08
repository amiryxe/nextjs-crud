import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Simple CRUD',
  description: 'online food order',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            {children}
            <ToastContainer position="bottom-left" theme="dark" autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
