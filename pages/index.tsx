import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import NextButton from "../components/Button/NextButton";
import MessageCard from "../components/MessageCard/MessageCard";
import MessageBoard from "../components/MessageCard/MessageBoard";
import Footer from "../components/MainElements/Footer";

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Tadano Rei Birthday Project</title>
          <meta name="description" content="Happy birthday!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Footer/>
      </div>
  )
}

export default Home
