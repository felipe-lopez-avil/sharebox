import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import Onboarding from '../components/Sections/Onboarding'
import Bestsellers from '../components/Sections/Bestsellers'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>ShareboxApp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero/>

        <div className={styles.sharing}>
          #SharingIsCaring
        </div>

        <Onboarding/>
        
        <Bestsellers/>

      </div>
    </Layout>
    
  )
}
