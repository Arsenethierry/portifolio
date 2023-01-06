import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Loader } from '../shared/components'
// import { Loader } from '@shared-components'


const HomePage = dynamic(()=> import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
})

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default Home
