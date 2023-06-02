import './globals.css'
import { Inter,Nunito } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotels',
  description: 'WE the best',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
