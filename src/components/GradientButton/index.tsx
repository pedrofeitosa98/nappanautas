import { ReactNode } from 'react'

import { GradientButtonStyle } from './style'

function GradientButton({ children }: { children: ReactNode }) {
  return (
    <GradientButtonStyle>
      <div className="border"></div>
      <div className="content">{children}</div>
    </GradientButtonStyle>
  )
}

export default GradientButton
