import { createContext } from 'react'

export const UserContext = createContext(null)
export const ReciContext = createContext(null)

/* Reggie: These lines of code are responsible for the creation of the wrap in the main render, and for the reference on each required component. 
 This file allows us to quickly reference the function we get from React and save it to a variable as well as create a specific component for 
 sharing (see main app file) */