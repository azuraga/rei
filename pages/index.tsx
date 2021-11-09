import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NextButton from "../components/Button/NextButton";



const Home: NextPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Head>
                    <title>Tadano Rei Birthday Project</title>
                    <meta name="description" content="Happy birthday!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <NextButton href="/message"/>
            </div>
        </main>
    )

}

export default Home
