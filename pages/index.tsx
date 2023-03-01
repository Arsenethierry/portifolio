import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Loader } from '../shared/components'
import { PersonalDetailsContext } from '../shared/utils/context'
import { PersonalDetails, Project } from '../shared/utils/types'
// import { Loader } from '@shared-components'
import { personalDetails } from '../shared/data/personal-details';
import Navbar from '../shared/components/navbar'
import SocialBar from '../shared/components/socialbar'
import Footer from '../shared/components/footer'


const HomePage = dynamic(()=> import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
})

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const Home = () => {

  return (
    <>
    <PersonalDetailsContext.Provider value={personalDetails}>
      <Navbar />
      <SocialBar />
      <HomePage />
      <Footer />
    </PersonalDetailsContext.Provider>
    </>
  )
}

export default Home;

// export async function getStaticProps(): Promise<{
//   props: {
//     personalDetails: PersonalDetails;
//     projectDetails: Project[];
//   }
// }> {
//   const personalDetails = (await getPersonalDetails()) as PersonalDetails;
//   const projectDetails = (await getProjectDetails()) as PersonalDetails;
//   return {
//     props: {
//       personalDetails,
//       projectDetails
//     }
//   };
// }

