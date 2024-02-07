import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Youth Society | Parzival',
  description: 'Youth Society | Parzival',
  icons: {
    icon: "/assets/logos/MLogo1.webp"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <ClerkProvider>
      <html lang='ka'>
        <body className={poppins.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
