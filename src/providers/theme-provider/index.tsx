import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">
    <div className="border border-orange-500 bg-orange-800">
      {children}  
    </div>
  </ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider';