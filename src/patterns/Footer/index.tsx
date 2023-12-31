import { VLine } from '@/components/VLine/style'
import { FooterStyle } from './style'
import { FaCode, FaHeart, FaPaintbrush } from 'react-icons/fa6'

export default function Footer() {
  return (
    <FooterStyle>
      <div className="nappafs-stamp">
        <img
          src="/images/nappafs.png"
          alt="Selo de fã-site do Nappa Hotel"
          width={123}
          height={64}
          draggable="false"
        />
      </div>
      <VLine color="gray" height="60px" />
      <div className="footer-text">
        <div>
          <strong>© 2023 Nappanautas </strong>
          <p>é um fã-site do </p>
          <a href="https://nappahotel.com/" target="_blank">
            Nappa Hotel
          </a>
          <p> e não possui envolvimento com a Sulake Oy.</p>
        </div>
        <div>
          <p>Algumas imagens utilizadas são de propriedades da Sulake Oy.</p>
        </div>
        <div>
          <p>
            <FaCode /> <strong>Motivo</strong> (Pedro Feitosa) |
          </p>
          <p>
            {' '}
            <FaPaintbrush /> <strong>Diael</strong> (Diogo Allemonge).
          </p>
        </div>
      </div>
    </FooterStyle>
  )
}
