import PlayerDJ from '@/components/PlayerDJ'
import { PlayerStyle } from './style'
import { VLine } from '@/components/VLine/style'
import PlayerStats from '@/components/PlayerStats'
import PlayerActions from '@/components/PlayerActions'

export default function Player() {
  return (
    <PlayerStyle>
      <audio id="true_player" controls autoPlay preload="none">
        <source
          src="https://sonic1.transmissaodigital.com/8034/stream"
          type="audio/mpeg"
        />
      </audio>

      <PlayerDJ avatarurl="/images/avatar-autodj.png" />
      <VLine color="primary" height="50px" />
      <PlayerStats />
      <VLine color="primary" height="50px" />
      <PlayerActions />
    </PlayerStyle>
  )
}
