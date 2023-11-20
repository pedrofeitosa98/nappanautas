// import Image from 'next/image
import Head from '@/components/Head'
import Header from '@/patterns/Header'
import MaintanceContent from '@/templates/MaintanceContent'

function Home() {
  return (
    <>
      <Head title="Nappanautas - Início" />
      <Header />
      <MaintanceContent />
    </>
  )
}

export default Home
