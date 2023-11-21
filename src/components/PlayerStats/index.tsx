import { PlayerStatsStyle } from './style'

export default function PlayerStats() {
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
      <div className="listeners">
        <p>43</p>
      </div>
    </PlayerStatsStyle>
  )
}
