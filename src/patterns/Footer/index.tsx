import { VLine } from '@/components/VLine/style'
import { FooterStyle } from './style'
import { FaCode, FaHeart, FaPaintbrush } from 'react-icons/fa6'

export default function Footer() {
  return (
    <FooterStyle>
      <div className="nappafs-stamp"></div>
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
          <p>
            <FaCode /> Codado por <strong>Motivo</strong>
          </p>
          <p>
            <FaPaintbrush /> Desenhado por <strong>Diael</strong>
          </p>
        </div>
      </div>
    </FooterStyle>
  )
}
