import type { NextPage } from 'next'
import {Container, Fade, Grid, Typography} from "@mui/material";
import styles from "../../styles/HappyBirthday.module.scss";
import NextButton from "../../components/Button/NextButton";
import {useEffect, useState} from "react";
import React from 'react';
import {Background, Parallax} from "react-parallax";

const Message = () => (
        <Typography variant="body1" align="center">
            3周年おめでとうございます。
            <br/><br/>
            これほど長い期間にわたって活動しているVTuberはそうそういないでしょうね。あなたの最初の中途半端な動画から、今の本気と情熱を込めている配信まで見ることができて光栄でした。この素敵な日を迎えられたのはあなたの献身と努力の賜物です。
            <br/><br/>
            この数年間、あなたは視聴者さんに数え切れないほどの笑顔を下さっていました。困っている人がいても、ただ面白い場所が欲しい人がいても、あなたはいつも誰でもを迎え入れ、みんなのために温かい居場所を作ろうと努力しました。
            <br/><br/>
            当然毎日が楽ではありませんでした。苦労や延期など、終わりのないようなことが沢山ありました。それでもあなたは力強く全部耐え、最大限に我慢し、みんなを幸せにするために力を尽くしました。
            <br/><br/>
            あなたの存在としてくれていることへの感謝の気持ちを伝えるのは不可能だと思います。それでも、このプレゼントには私達の気持ちを精一杯詰め込みました。三月にあなたが私達に心を開いてくれたように、今回私達の本音をお伝えさせてください。あなたのことを大切に思っている私達の手紙ちを読んで、それを心にどこかで留めてくれるのなら非常に嬉しいです。
            <br/><br/>
            一生懸命頑張ってくれてありがとう。
            いつも自分らしく居ていてくれてありがとう。
            夢を諦めないでありがとう。
            笑顔を元気をいつも届けてくれてありがとう。
            世界一のVtuberになってくれてありがとう。
            <br/><br/>
            Reiyansであることは私達にとって最高の名誉です。
            <br/><br/>
            これからもあなたのそばにいて、夢を叶えさせてください。
            <br/><br/><br/><br/>
            Reiyansより
        </Typography>
);


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Home: NextPage = () => {
    // todo: the unpredictable overlapping on mobile might be fixed by using margins instead of offset
    return (
            <Parallax strength={400}>
                <Background className={styles.background}/>
                <Grid container
                      spacing={5}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      marginTop="2vh"
                >
                    <Grid item>
                        <Fade in={true} timeout={3000}>
                            <div>
                                <img className={styles.logo} src="/logo.png" alt="Tadano Rei Birthday Project"/>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item>
                        <Fade in={true} timeout={1500}>
                            <Container maxWidth="md">
                                <Message/>
                            </Container>
                        </Fade>
                    </Grid>

                    <Grid item>
                        <div className={styles.buttonArea}>
                            <NextButton href="/messages"/>
                        </div>
                    </Grid>

                </Grid>

            </Parallax>

    )

}

export default Home
