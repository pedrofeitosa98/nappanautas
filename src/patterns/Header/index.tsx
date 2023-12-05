import WaveAnimation from '@/components/WaveAnimation'
import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img
          src="/images/logo.png"
          alt="Logo Nappanautas"
          width={210}
          height={114}
          draggable="false"
        />
      </div>
      <WaveAnimation />
    </HeaderContainer>
  )
}
