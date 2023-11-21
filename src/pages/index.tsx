// import Image from 'next/image
import Head from '@/components/Head'
import Header from '@/patterns/Header'
import radioAPI from '@/services/radioAPI'
import { getServerSideRadioData } from '@/services/serverSideReqs'
import MaintanceContent from '@/templates/MaintanceContent'
import { IRadioData } from '@/types/RadioData'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps() {
  const api = radioAPI()
  let radioData: IRadioData | null = null
  console.log(radioData)

  try {
    const response = await api.post<IRadioData>(':7017/statistics?json=1', {
      login: 'admin',
      password: 'KVJ8K5FTBX7V'
    })
    console.log(response)
    radioData = response.data
  } catch (error) {
    console.warn(error)
  }

  return {
    props: {
      radioData,
      revalidate: 60
    }
  }
}

export default function Home({ radioData }: { radioData: IRadioData }) {
  console.log('aaaaaaaaaaaaaaa', radioData)
  return (
    <>
      <Head title="Nappanautas - Início" />
      <Header />
      <MaintanceContent radioData={radioData} />
    </>
  )
}
