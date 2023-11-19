// import Image from 'next/image'
import { FaGithub, FaLinkedin, FaHourglassHalf } from 'react-icons/fa'

import GradientButton from '@/components/GradientButton'
import ProfileCard from '@/patterns/ProfileCard'

import { WorkInProgressContainer } from './style'

function WorkInProgress() {
  return (
    <WorkInProgressContainer>
      <div className="wip-icon" hidden>
        <FaHourglassHalf />
      </div>
      <ProfileCard />
      <div>
        <p>
          Iiiih... Você chegou um pouco cedo, a casa ainda está sendo arrumada.{' '}
          <br />
          Enquando desenvolvo meu portfólio, você pode me encontrar aqui:
        </p>
        <section className="wip-buttons_section">
          <div>
            <a
              href="https://github.com/pedrofeitosa98"
              target="_blank"
              rel="noreferrer"
            >
              <GradientButton>
                <FaGithub />
                Github
              </GradientButton>
            </a>
            <a
              href="https://linkedin.com/in/pedrofeitosa98"
              target="_blank"
              rel="noreferrer"
            >
              <GradientButton>
                <FaLinkedin />
                LinkedIn
              </GradientButton>
            </a>
          </div>
        </section>
      </div>
    </WorkInProgressContainer>
  )
}

export default WorkInProgress
