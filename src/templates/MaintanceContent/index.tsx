import { useEffect, useState } from 'react'
import { MaintanceContentStyle } from './style'
import { IRadioData } from '@/types/RadioData'
import PlayerDJ from '@/components/PlayerDJ'
import Player from '@/patterns/Player'

export default function MaintanceContent({
  radioData
}: {
  radioData: IRadioData | null
}) {
  console.log(
    '🚀 ~ file: index.tsx:27 ~ MaintanceContent ~ radioData:',
    radioData
  )
  // const [radioData, setRadioData] = useState<IRadioData | null>(null)
  // console.log(
  //   '🚀 ~ file: index.tsx:16 ~ MaintanceContent ~ radioData:',
  //   radioData
  // )

  // useEffect(() => {
  //   const getRadioData = async () => {
  //     try {
  //       // const { data } = await radioAPI().get(':7017/statistics?json=1')
  //       const response = await radioAPI().get('/cp/get_info.php?p=8034')
  //       console.log(
  //         '🚀 ~ file: index.tsx:38 ~ getRadioData ~ response:',
  //         response
  //       )
  //       // setRadioData(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   getRadioData()
  // }, [])

  return (
    <MaintanceContentStyle>
      <Player />
    </MaintanceContentStyle>
  )
}
