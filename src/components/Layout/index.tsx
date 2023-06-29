import React from 'react'
import Navigation from '../Navigation';
import SubMenu from '../SubMenu';
import Footer from '../Footer';
import ThemeProvider from '../../providers/theme-provider'

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
        <ThemeProvider>
          <div className="bg-none">
            <Navigation>
              <NavigationContent/>
            </Navigation>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
  )
}

RootLayout.displayName = 'RootLayout';

const NavigationContent = () => {
  return (
      <nav 
        tabIndex={-1}
        role="menu"
        className="fixed top-0 w-full h-auto border border-orange-500 bg-orange-800 text-white py-2 overflow-auto relative"
      >
        <div className="w-11/12 md:w-96 mx-auto">
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 1</a>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 2</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-orange-800 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 3</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-orange-800 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 4</a>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 5</a>
          <SubMenu>
            <div role="menu" className="ml-4 mt-2 bg-orange-800 text-white shadow-md group-hover:block hidden">
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 1</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 2</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 3</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 4</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 5</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 6</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 7</a>
              <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Sub-link 8</a>
            </div>
          </SubMenu>
          <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-orange-900">Link 6</a>
        </div>
      </nav>
    )
}

NavigationContent.displayName = 'NavigationContent';