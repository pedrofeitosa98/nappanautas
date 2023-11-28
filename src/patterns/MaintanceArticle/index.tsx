import { MaintanceArticleStyle } from './style'

export default function MaintanceArticle() {
  return (
    <MaintanceArticleStyle>
      <div className="text-container">
        <h2 className="title">Quem somos nós?</h2>

        <p>
          Surgindo de um desejo da própria comunidade, Nappanautas é a primeira
          web rádio do Nappa Hotel! Nosso foco será procurar proporcionar
          diversão através de programações diversas e interações diretas com
          vocês jogadores e ouvintes, além de - é claro - muita música!
        </p>
      </div>

      <div className="image-content" />
    </MaintanceArticleStyle>
  )
}
