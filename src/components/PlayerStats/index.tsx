import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'
import { PlayerStatsStyle } from './style'

export default function PlayerStats() {
  const { streamInfos, loadingListeners, getRadioData } =
    useContext(StreamContext)

  return (
    <PlayerStatsStyle>
      <div className="stats">
        <p>
          Você está ouvindo <span>Nappanautas</span>
        </p>
        <p>
          Com a programação <span>Jukebox AutoDJ</span>
        </p>
      </div>
      <button type="button" className="listeners" onClick={getRadioData}>
        {loadingListeners ? '...' : streamInfos?.listeners}
      </button>
    </PlayerStatsStyle>
  )
}
