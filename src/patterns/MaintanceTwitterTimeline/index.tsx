import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { MaintanceTwitterTimelineStyle } from './style'

export default function MaintanceTwitterTimeline() {
  return (
    <MaintanceTwitterTimelineStyle>
      <TwitterTimelineEmbed
        lang="pt"
        sourceType="profile"
        screenName="nappanautas"
        options={{
          width: 338
          // borderRadius: 12
        }}
        autoHeight
        theme="dark"
        borderColor="#202020"
        // noHeader
        noBorders
        noScrollbar
        transparent
      />
      <TwitterTimelineEmbed
        lang="pt"
        sourceType="profile"
        screenName="nappanautas"
        options={{
          width: 580
          // borderRadius: 12
        }}
        autoHeight
        theme="dark"
        borderColor="#202020"
        // noHeader
        noBorders
        noScrollbar
        transparent
      />
    </MaintanceTwitterTimelineStyle>
  )
}
