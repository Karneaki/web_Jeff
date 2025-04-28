import { createContext } from 'react'
import { Api } from '../utils/api'

export const ApiContext = createContext<{ api: Api } | undefined>(undefined)
