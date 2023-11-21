import { PlayerActionsStyle } from './style'
import { FaPause, FaPlay } from 'react-icons/fa6'

interface IPlayerActionsProps {
  toggleAudio: (action: 'play' | 'pause') => void
}

export default function PlayerActions({ toggleAudio }: IPlayerActionsProps) {
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
