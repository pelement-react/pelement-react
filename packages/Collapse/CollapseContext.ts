import { createContext } from 'react'

export interface CollapseContextState {
  activeName?: string | string[] | number | number[]
}

const CollapseContext = createContext<CollapseContextState>({})

export default CollapseContext