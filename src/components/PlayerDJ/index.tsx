import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'

import { PlayerDJStyle } from './style'

export default function PlayerDJ() {
  const { streamInfos, loadingPlayerData } = useContext(StreamContext)

  const avatarurl =
    streamInfos?.djusername === 'No DJ'
      ? '/images/avatar-autodj.png'
      : streamInfos?.djprofile

  return (
    <PlayerDJStyle
      avatarurl={avatarurl ?? '/images/avatar-autodj.png'}
      loadingPlayerData={loadingPlayerData}
    >
      <div className="avatar-container"></div>
      <div className="avatar-img"></div>
    </PlayerDJStyle>
  )
}
