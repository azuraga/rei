import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import NextButton from "../../components/Button/NextButton";
  
const comissionedArt: NextPage = (imageSrc,imageAlt) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tadano Rei Birthday Project</title>
                <meta name="description" content="Happy birthday!" />
               // <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NextButton href="credits"/>
            </main>
        </div>
    )
}

export default comissionedArt