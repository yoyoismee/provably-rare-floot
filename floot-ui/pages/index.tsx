import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Icon from '../components/Icon'
// import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const Barcode = require('react-barcode');

const Home: NextPage = () => {
  const Router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Floot is loot for recipe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:w-3/5 w-5/6 m-auto flex flex-col justify-start">
        <div className="flex justify-between">
          <div className="text-4xl mb-2 font-bold">
            Floot
          </div>
          <div className="text-2xl mb-2">
            <a className="underline font-bold">Rarity</a>
          </div>
        </div>
        <span className="w-full h-3 bg-black mb-2"></span>
        <div className="mb-2 text-xl">
          <span className="mb-2">Floot is randomized recipe generated and stored on chain. Ingredients, flavors, and other prefixes are intentionally added for others to interpret in a chef perspective. The more Floot create, the better crypto-chef ecosystems will be.</span>
        </div>
        <span className="w-full h-3 bg-black mb-2"></span>
        <div className="mb-2 text-xl">
          <div className="text-2xl mb-2 font-bold">
            Uses
          </div>
          <span className="mb-2">Floot is an open-source project, feel free to use Floot in more fancy ways.</span>
        </div>
        <div className="my-4"></div>
        <button className="w-64 p-3 border-black m-auto inline border-4 text-xl font-bold" onClick={() => Router.push('/traits')}>See Traits</button>
      </main>
      
      <footer className="flex flex-col justify-center mb-5">
        <Barcode fontSize={15} height={32} width={1.3} background="#FEF8ED" value="floot.center" />
      </footer>

    </div>
  )
}

export default Home
