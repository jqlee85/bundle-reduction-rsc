import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">
    <div className="border border-sky-500 bg-sky-800">
      {children}  
    </div>
  </ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider';