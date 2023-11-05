import {createContext, useState} from 'react'

export const MyContext = createContext()

export const MyContextProdiver = (props) => {
    const [isDark, setIsDark] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MyContext.Provider value={{isDark, setIsDark, isMenuOpen, setIsMenuOpen}}>
        {props.children}
    </MyContext.Provider>
  )
}
