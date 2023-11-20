import { useEffect, useState } from 'react'
import { MaintanceContentStyle } from './style'
import radioAPI from '@/services/radioAPI'

interface RadioData {
  currentlisteners: 1
  uniquelisteners: 1
  servergenre: string // Programação
  servertitle: string // Locutor
  songtitle: string
  streamstatus: 1
}

export default function MaintanceContent() {
  const [radioData, setRadioData] = useState<RadioData | null>(null)
  console.log(
    '🚀 ~ file: index.tsx:16 ~ MaintanceContent ~ radioData:',
    radioData
  )
  const [playerRef, setPlayerRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const getRadioData = async () => {
      try {
        const { data } = await radioAPI().get(':7017/statistics?json=1')
        // const { data } = await radioAPI().get('/cp/get_info.php?p=8034')
        setRadioData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getRadioData()
  }, [])

  useEffect(() => {
    const player = document.querySelector('audio')
    setPlayerRef(player)
  }, [])

  function togglePlay() {
    if (playerRef) {
      if (playerRef.paused) {
        playerRef.play()
      } else if (playerRef.volume > 0.0) {
        playerRef.volume = 0.0
      } else {
        playerRef.volume = 1.0
      }
    }
  }

  return (
    <MaintanceContentStyle>
      <audio id="true_player" controls autoPlay preload="none">
        <source
          src="https://sonic1.transmissaodigital.com/8034/stream"
          type="audio/mpeg"
        />
      </audio>
      <button onClick={togglePlay}>Toggle</button>
    </MaintanceContentStyle>
  )
}
