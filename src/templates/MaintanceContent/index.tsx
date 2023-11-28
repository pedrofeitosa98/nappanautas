import Player from '@/patterns/Player'
import MaintanceArticle from '@/patterns/MaintanceArticle'
import { MaintanceContentStyle } from './style'
import { MaintanceTwitterTimelineStyle } from '@/patterns/MaintanceTwitterTimeline/style'

export default function MaintanceContent() {
  return (
    <MaintanceContentStyle>
      <section className="left-coulumn">
        <Player />
        <MaintanceArticle />
      </section>
      <MaintanceTwitterTimelineStyle />
    </MaintanceContentStyle>
  )
}
