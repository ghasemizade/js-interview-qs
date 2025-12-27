import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JavaScript Interview Question',
  description: 'Created By Hosein',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='dark' style={{ colorScheme: "dark" }}>
      <body className={`font-sans antialiased`} >
        <ThemeProvider attribute={"class"} defaultTheme='system' enableSystem={true}>
          {children}
          <Analytics />
          <div className="fixed right-0 bottom-0 p-4 font-semibold">
            For Supporting❤️, Give Me
            <span className='pr-1'></span>
            <Link href={"https://github.com/ghasemizade/js-interview-qs"} className='border border-gray-400 hover:border-yellow-400 px-1.5 rounded-md'>star⭐</Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
