import { useEffect, useState } from 'react'

import PlayerDJ from '@/components/PlayerDJ'
import { PlayerStyle } from './style'
import { VLine } from '@/components/VLine/style'
import PlayerStats from '@/components/PlayerStats'
import PlayerActions from '@/components/PlayerActions'

export default function Player() {
  const [playerRef, setPlayerRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const player = document.querySelector('audio')
    setPlayerRef(player)
  }, [])

  function toggleAudio(action: 'play' | 'pause') {
    if (playerRef) {
      if (action === 'play') {
        if (playerRef.paused) {
          playerRef.play()
        } else {
          playerRef.volume = 1.0
        }
      } else if (action === 'pause') {
        playerRef.volume = 0.0
      }
    }
  }

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
      <PlayerActions toggleAudio={toggleAudio} />
    </PlayerStyle>
  )
}
