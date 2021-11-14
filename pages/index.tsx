import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Splash.module.scss'
import GiftButton from "../components/GiftButton/GiftButton";
import {Typography} from "@mui/material";
import {useSpring, animated} from "react-spring";



const Home: NextPage = () => {
    const animate = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#1D1D1B', scale: 1 },
            { opacity: 0.0, color: '#FEF7B6', scale: 0.9 },
        ],
        from: { opacity: 0.0, color: '#FEF7B6', scale: 0.9 },
        reverse: true,
        config: {
            duration: 1000,
        },
        delay: 1000,
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Tadano Rei Birthday Project</title>
                <meta name="description" content="Happy birthday!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <GiftButton href="/happy-bday"/>
                <animated.div style={animate}>
                    <Typography variant="h5" className={styles.text}>
                        Let's open!
                    </Typography>
                </animated.div>

            </main>
        </div>
    )
}

export default Home
