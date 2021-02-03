import { useContext } from 'react'
import ContactContext from '../contexts/contactContext'

export const useContacts = () => {return useContext(ContactContext)}