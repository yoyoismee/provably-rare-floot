import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icon from '../components/Icon'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
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
          <span>Floot is randomized recipe generated and stored on chain. Ingredients, flavors, and other prefixes are intentionally added for others to interpret in a chef perspective. The more Floot create, the better crypto-chef ecosystems will be.</span>
        </div>
        <span className="w-full h-3 bg-black mb-2"></span>
        <div className="mb-2 text-xl">
          <div className="text-2xl mb-2 font-bold">
            Uses
          </div>
          <span>Floot is an open-source project, feel free to use Floot in more fancy ways.</span>
        </div>
      </main>

      <footer className="flex flex-col justify-center">
        <div className="m-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0.0000mm" y="0.0000mm" width="47.6250mm" height="26.4580mm" viewBox="0.0000 0.0000 47.6250 26.4580" version="1.1" shape-rendering="crispEdges">
            <title>TBarCode - 11.12.1.16467</title>
            <desc>BarCode licensed to MEM:TEC-IT Datenverarbeitung GmbH Internal License</desc>
            <g fill="rgb(0%,0%,0%)">
            </g>
            <g fill="#FEF8ED">
              <rect x="0.0000" y="0.0000" width="47.6250" height="26.4580" />
            </g>
            <g fill="rgb(0%,0%,0%)">
            </g>
            <g fill="rgb(0%,0%,0%)">
              <rect x="0.0000" y="0.0000" width="1.0583" height="20.1864" />
              <rect x="1.5875" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="3.1750" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="5.8208" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="6.8792" y="0.0000" width="1.0583" height="20.1864" />
              <rect x="10.0542" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="11.6417" y="0.0000" width="1.0583" height="20.1864" />
              <rect x="13.7583" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="14.8167" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="17.4625" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="19.5792" y="0.0000" width="2.1167" height="20.1864" />
              <rect x="22.2250" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="23.2833" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="25.4000" y="0.0000" width="2.1167" height="20.1864" />
              <rect x="28.0458" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="29.1042" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="30.6917" y="0.0000" width="2.1167" height="20.1864" />
              <rect x="33.3375" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="34.9250" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="35.9833" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="37.5708" y="0.0000" width="1.0583" height="20.1864" />
              <rect x="40.7458" y="0.0000" width="1.0583" height="20.1864" />
              <rect x="43.3917" y="0.0000" width="1.5875" height="20.1864" />
              <rect x="45.5083" y="0.0000" width="0.5292" height="20.1864" />
              <rect x="46.5667" y="0.0000" width="1.0583" height="20.1864" />
            </g>
            <g fill="rgb(0%,0%,0%)">
              <text x="23.8125" y="25.2821" transform="rotate(360 23.8125,25.2821)" text-anchor="middle" font-family="Arial" font-size="5.6444">floot</text>
            </g>
          </svg>
        </div>

      </footer>
    </div>
  )
}

export default Home
