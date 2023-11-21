import { PlayerDJStyle } from './style'

export interface IPlayerDJProps {
  avatarurl: string
}

export default function PlayerDJ({ avatarurl }: IPlayerDJProps) {
  return (
    <PlayerDJStyle avatarurl={avatarurl}>
      <div className="avatar-container"></div>
      <div className="avatar-img"></div>
    </PlayerDJStyle>
  )
}
