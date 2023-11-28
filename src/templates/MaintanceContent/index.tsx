import Footer from '@/patterns/Footer'
import { MaintanceContentStyle } from './style'
import Player from '@/patterns/Player'

export default function MaintanceContent() {
  return (
    <MaintanceContentStyle>
      <Player />
      <Footer />
    </MaintanceContentStyle>
  )
}
