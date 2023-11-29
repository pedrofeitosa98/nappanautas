import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { MaintanceTwitterTimelineStyle } from './style'

export default function MaintanceTwitterTimeline() {
  return (
    <MaintanceTwitterTimelineStyle>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nappanautas"
        options={{
          height: 298,
          width: 338
          // borderRadius: 12
        }}
        theme="dark"
        borderColor="#202020"
        noHeader
        noBorders
        noScrollbar
        transparent
        placeholder="Carregando Tweets..."
      />
    </MaintanceTwitterTimelineStyle>
  )
}
