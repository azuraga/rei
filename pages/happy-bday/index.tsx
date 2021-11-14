import type { NextPage } from 'next'
import {Avatar, Box, Chip, Container, Fade, Grid, Typography} from "@mui/material";
import styles from "../../styles/HappyBirthday.module.scss";
import React from 'react';
import {Background, Parallax} from "react-parallax";
import {DownButtonWithLabel} from "../../components/Button/PreparedButtons";

const Message = () => (
        <Typography variant="body1">
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
            <br/><br/>
            Reiyansより
        </Typography>
);

const Home: NextPage = () => {
    return (
        <>
            <Parallax strength={400}>
                <Background className={styles.background}/>
                <Grid container
                      alignItems="flex-start"
                      justifyContent="center"
                      marginTop="5vh"
                      spacing={5}
                >
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center">
                            <b>3周年おめでとうございます。</b>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Fade in={true} timeout={3000}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <img className={styles.commission} src="/commission.png" alt="commission"/>
                                <Chip
                                    label="by @Ninami15"
                                    component="a"
                                    href="https://www.twitter.com/coppersketches"
                                    clickable
                                    avatar={<Avatar alt="Ninami15" src="staff/coppersketches.jpg"/>}
                                    className={styles.commissionAuthor}
                                />
                            </Box>
                        </Fade>

                    </Grid>

                    <Grid item>
                        <Fade in={true} timeout={1500}>
                            <Container maxWidth="md">
                                <Message/>
                            </Container>
                        </Fade>
                    </Grid>

                </Grid>
                <DownButtonWithLabel href={"/messages"}>messages</DownButtonWithLabel>
            </Parallax>
        </>
    )

}

export default Home
