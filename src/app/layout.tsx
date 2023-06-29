import './globals.css'
import React, {ReactNode} from 'react'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation';
import SubMenu from '../components/SubMenu';
import Footer from '../components/Footer';
import ThemeProvider from '../providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="bg-none">
            <Navigation>
              <NavigationContent/>
            </Navigation>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
        
      </body>
    </html>
  )
}


const NavigationContent = () => {
  return (
      <nav 
        tabIndex={-1}
        role="menu"
        className="fixed top-0 w-full h-auto bg-gray-800 text-white py-2 overflow-auto relative"
      >
        <div className="w-11/12 md:w-96 mx-auto">
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 1</a>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 2</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 3</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 4</a>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 5</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 6</a>
        </div>
      </nav>
    )
}
