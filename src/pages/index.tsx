// import Image from 'next/image
import Head from '@/components/Head'
import Footer from '@/patterns/Footer'
import Header from '@/patterns/Header'
import radioAPI from '@/services/radioAPI'
import MaintanceContent from '@/templates/MaintanceContent'
import { GetServerSidePropsContext } from 'next'

// export async function getServerSideProps() {
//   let radioData: IRadioData | null = null

//   try {
//     const response = await radioAPI.post<IRadioData>(':7017/statistics?json=1', {
//       login: 'admin',
//       password: 'KVJ8K5FTBX7V'
//     })
//     console.log(response)
//     radioData = response.data
//   } catch (error) {
//     console.warn(error)
//   }

//   return {
//     props: {
//       radioData,
//       revalidate: 60
//     }
//   }
// }

export default function Home() {
  return (
    <>
      <Head title="Nappanautas - Início" />
      <Header />
      <MaintanceContent />
      <Footer />
    </>
  )
}
