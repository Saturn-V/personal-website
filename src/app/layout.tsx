"use client"

// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import { Navigation, NavigationMenu } from '@/components/Navigation'
// import ProvideNavigation, { useNavigation } from '@/context/navigation'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Alex Aaron Peña',
//   description: "Software Engineer",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // mobile navigation
  const [isOpen, setIsOpen] = useState(false)

  const [openTab, setOpenTab] = useState("/")

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation isOpen={isOpen} openTab={openTab} open={setOpenTab} toggleOpen={() => setIsOpen(latest => !latest)} />
        {!isOpen && <main className={styles.main}>
          {children}
        </main>}
      </body>
    </html>
  )
}
