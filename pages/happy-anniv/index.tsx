import type { NextPage } from 'next'
import {
    Avatar,
    Box,
    Chip,
    Container,
    Fade,
    Grid,
    Typography
} from "@mui/material";
import styles from "../../styles/HappyBirthday.module.scss";
import React, {useState} from 'react';
import {Background, Parallax} from "react-parallax";
import {DownButtonWithLabel} from "../../components/Button/PreparedButtons";
import ReactCardFlip from "react-card-flip";
import TranslateIcon from '@mui/icons-material/Translate';

const JapaneseMessage = () => (
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

const EnglishMessage = () => (
    <Typography variant="body1">
        Congratulations on your 3rd year anniversary.
        <br/><br/>
        There aren&apos;t many VTubers who have had a career spanning across such a long time. It was an honor to have seen your progress, from the very first half-hearted video to what is now your full time passion. Your dedication and hard work alone are what made this wonderful moment possible.
        <br/><br/>
        Over these years you have brought countless smiles to those who have watched you. Whether someone was having a rough time or they just wanted a place to hang out, you always welcomed people with open arms and worked hard to create a warm home for everyone.
        <br/><br/>
        Not every day was easy. There were many hardships, obstacles, and delays that seemed endless. But you still hung in there strong and did everything in your power to persevere and make everyone happy to the best of your abilities.
        <br/><br/>
        It would be an impossible feat to convey how grateful we are for your existence and everything you do. However we still tried our best to cram our feelings into this present. Just like you opened yourself up to us this year, we hope this present will represent our honest feelings for you and that you&apos;ll read them and take them to heart, because we all care deeply about you.
        <br/><br/>
        Thank you for always giving it your all.
        Thank you for always being yourself.
        Thank you for not giving up.
        Thank you for all the smiles and energy.
        Thank you for being the best VTuber ever.
        <br/><br/>
        Being Reiyans is the greatest honor we could ever have. We hope you&apos;ll let us stay by your side from now on as well and allow us to make your dreams come true.
        <br/><br/>
        - All the Reiyans
    </Typography>
)

const Home: NextPage = () => {
    const [showEN, setShowEN] = useState(false);
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

                    <Grid item xs={12}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Chip
                                icon={<TranslateIcon />}
                                label={showEN ? '訳する' : 'Translate'}
                                className={styles.chipText}
                                onClick={() => setShowEN(!showEN)}
                            />
                        </Box>
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
                            <Container
                                maxWidth="md"
                                onClick={() => setShowEN(!showEN)}>
                                <ReactCardFlip
                                    isFlipped={showEN}
                                    flipDirection="horizontal"
                                    flipSpeedBackToFront={0.6}
                                    flipSpeedFrontToBack={0.6}
                                >
                                    <JapaneseMessage/>
                                    <EnglishMessage/>
                                </ReactCardFlip>
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
