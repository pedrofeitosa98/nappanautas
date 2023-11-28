import { MaintanceTwitterTimelineStyle } from './style'

export default function MaintanceTwitterTimeline() {
  return (
    <MaintanceTwitterTimelineStyle>
      <a
        className="twitter-timeline"
        data-lang="pt"
        data-width="350"
        data-height="370"
        href="https://twitter.com/nappanautas?ref_src=twsrc%5Etfw"
      >
        Tweets by nappanautas
      </a>
    </MaintanceTwitterTimelineStyle>
  )
}
