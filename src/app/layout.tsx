import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
