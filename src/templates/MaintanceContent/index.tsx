import Player from '@/patterns/Player'
import MaintanceArticle from '@/patterns/MaintanceArticle'
import { MaintanceContentStyle } from './style'
import MaintanceTwitterTimeline from '@/patterns/MaintanceTwitterTimeline'

export default function MaintanceContent() {
  return (
    <MaintanceContentStyle>
      <div>
        <section className="left-coulumn">
          <Player />
          <MaintanceArticle />
        </section>
        <MaintanceTwitterTimeline />
      </div>
    </MaintanceContentStyle>
  )
}
