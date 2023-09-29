
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jimmewaar Nagrik',
  description: 'GovToken',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main>
          {props.children}
        </main>
        </body>
    </html>
  )
}
