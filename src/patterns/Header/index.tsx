import WaveAnimation from '@/components/WaveAnimation'
import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo Nappanautas" />
      </div>
      <WaveAnimation />
    </HeaderContainer>
  )
}
