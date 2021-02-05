import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import ContactContext from '../contexts/contactContext'

export const useContacts = () => {return useContext(ContactContext)}
export const useAuth = () => {return useContext(AuthContext)}