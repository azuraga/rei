import type { NextPage } from 'next'
import Head from 'next/head'
import { Zoom} from "@mui/material";
import styles from "../../styles/Home.module.scss";
import NextButton from "../../components/Button/NextButton";



const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Tadano Rei Birthday Project</title>
                <meta name="description" content="Happy birthday!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Zoom in={true}>
                <main className={styles.main}>
                    <img className={styles.logo} src="/logo.png" alt="Tadano Rei Birthday Project"/>
                    <NextButton href="/messages"/>
                </main>
            </Zoom>

        </div>
    )

}

export default Home
