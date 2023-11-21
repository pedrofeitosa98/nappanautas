import { FC, ReactNode } from 'react'
import { StreamProvider } from './Stream'

interface IUnifiedProviersProps {
  children: ReactNode
}

const UnifiedProviders: FC<IUnifiedProviersProps> = ({ children }) => {
  return <StreamProvider>{children}</StreamProvider>
}

export default UnifiedProviders
