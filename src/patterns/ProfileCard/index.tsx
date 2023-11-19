import ProfileImage from '@/components/ProfileImage'

import { ProfileCardStyle } from './style'

function ProfileCard() {
  return (
    <ProfileCardStyle>
      <div className="texts">
        <h1>Pedro Feitosa</h1>
        <h2>Desenvolvedor Frontend</h2>
        <h3>{`{ React && NextJS }`}</h3>
      </div>
      <ProfileImage />
    </ProfileCardStyle>
  )
}

export default ProfileCard
