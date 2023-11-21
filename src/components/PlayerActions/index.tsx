import { useContext } from 'react'
import { PlayerActionsStyle } from './style'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { StreamContext } from '@/context/Stream'

export default function PlayerActions() {
  const { toggleAudio } = useContext(StreamContext)

  return (
    <PlayerActionsStyle>
      <button
        type="button"
        className="pause"
        onClick={() => toggleAudio('pause')}
      >
        <FaPause />
      </button>
      <button
        type="button"
        className="play"
        onClick={() => toggleAudio('play')}
      >
        <FaPlay />
      </button>
    </PlayerActionsStyle>
  )
}
