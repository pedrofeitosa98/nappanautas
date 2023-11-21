import { GetServerSidePropsContext } from 'next'
import radioAPI from './radioAPI'
import { IRadioData } from '@/types/RadioData'

export async function getServerSideRadioData(ctx: GetServerSidePropsContext) {
  const api = radioAPI(ctx)
  let radioData: IRadioData | null = null
  console.log(radioData)

  try {
    const response = await api.get<IRadioData>(':7017/statistics?json=1')
    console.log(response)
    radioData = response.data
  } catch (error) {
    console.warn(error)
  }

  return radioData
}
